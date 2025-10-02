export function isElevationError(error:any) {
  return error?.message?.includes('AAL2') ||
         error?.message?.includes('Authenticator Assurance Level') ||
         error?.message?.includes('aal2_required') ||
         error?.message?.includes('requires_aal2')
}
