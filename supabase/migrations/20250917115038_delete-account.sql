-- Enable pgcrypto extension for cryptographic functions
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Create RPC function to delete user account with reauthentication protection
CREATE OR REPLACE FUNCTION delete_user_account(nonce text)
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = ''
AS $$
DECLARE
    current_user_id uuid;
    token_record record;
    user_email text;
    expected_hash text;
BEGIN
    -- Get the current user's ID
    current_user_id := (SELECT(auth.uid()));

    -- Check if user is authenticated
    IF current_user_id IS NULL THEN
        RAISE EXCEPTION 'User not authenticated';
    END IF;

    -- Check if nonce is provided
    IF nonce IS NULL OR length(trim(nonce)) != 6 THEN
        RAISE EXCEPTION 'Please enter a 6-digit code which should have been sent to your email.';
    END IF;

    -- Get user's email to recreate the token hash
    -- Based on Supabase crypto.go: GenerateTokenHash(emailOrPhone, otp) = SHA224(email+otp)
    SELECT email INTO user_email FROM auth.users WHERE id = current_user_id;

    IF user_email IS NULL THEN
        RAISE EXCEPTION 'User email not found';
    END IF;

    -- Generate hash using Supabase's algorithm: SHA224(email + otp)
    expected_hash := encode(extensions.digest(user_email || nonce, 'sha224'), 'hex');

    -- Look for active reauthentication token in one_time_tokens table
    SELECT * INTO token_record
    FROM auth.one_time_tokens ott
    WHERE ott.user_id = current_user_id
      AND ott.token_type = 'reauthentication_token'
      AND ott.token_hash = expected_hash
      AND ott.created_at > (now() - interval '10 minutes');

    -- Check if token was found
    IF NOT FOUND THEN
        -- Try to clear any existing tokens for this user to prevent brute force
        DELETE FROM auth.one_time_tokens
        WHERE user_id = current_user_id AND token_type = 'reauthentication_token';

        RAISE EXCEPTION 'Invalid or expired verification code. Please request a new verification code.';
    END IF;

    -- Clear the token after successful verification to prevent reuse
    DELETE FROM auth.one_time_tokens
    WHERE user_id = current_user_id AND token_type = 'reauthentication_token';

    -- Delete the user account
    -- This will cascade to delete related data due to foreign key constraints
    DELETE FROM auth.users WHERE id = current_user_id;
    -- REPLACE THE ABOVE WITH YOUR OWN ACCOUNT DELETION LOGIC

    -- Return success response
    RETURN json_build_object(
        'message', 'Account deleted successfully.'
    );
END;
$$;

-- Grant execute permission to authenticated users
revoke execute on function delete_user_account(text) from public;
revoke execute on function delete_user_account(text) from anon;
GRANT EXECUTE ON FUNCTION delete_user_account(text) TO authenticated;
