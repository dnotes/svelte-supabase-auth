import { PlaywrightWorld, type PlaywrightWorldConfig } from '@quickpickle/playwright/PlaywrightWorld'
import '@quickpickle/playwright/actions'
import '@quickpickle/playwright/outcomes'
import { Given, When, Then, DataTable, setWorldConstructor, After, Before } from 'quickpickle'
import { expect, type Locator } from 'playwright/test'
import speakeasy from 'speakeasy'
import fs from 'node:fs'

type MailTests = {
  count?:number
  code?:boolean
  subject?:string
}

async function getPassHashParts(passphrase:string):Promise<[string,string]> {
  if (typeof crypto === 'object' && crypto.subtle) {
      const msgUint8 = new TextEncoder().encode(passphrase);
      const hashBuffer = await crypto.subtle.digest('SHA-1', msgUint8);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray
          .map((byte) => byte.toString(16).padStart(2, '0'))
          .join('')
          .toUpperCase();
      return [hashHex.slice(0, 5), hashHex.slice(5)];
      /* c8 ignore start */
  }
  throw new Error('The Web Crypto API is not available in this environment.');
}


class World extends PlaywrightWorld {

  providers: string[] = []
  authConfig: Record<string, string> = {}
  emailAddress: string = ''
  messages: any[] = []
  latestCode: string = ''
  dialog: string = ''
  mfaTokens: Record<string, string> = {}
  data: Record<string, any> = {}
  requests: Record<string, number> = {}

  _passphrase:string = ''
  _passphraseHashParts:[string,string] = ['','']
  _passphraseBreaches:number = 0

  async init():Promise<void> {
    await super.init()
    // set dialog handling
    this.page.on('dialog', dialog => {
      this.dialog = dialog.message()
      if (this.info.tags.includes('@dismiss-dialog')) dialog.dismiss()
      else dialog.accept()
    })
    await this.setPassphrase(crypto.randomUUID())
    this.page.route(/\/\/(?!localhost|127\.0\.0\.1)/, (route) => {
      let host = route.request().url()
      if (host.match(/^\w+tps?:\/\//)) host = host.replace(/^\w+tps?:\/\//, '').replace(/\/.+$/, '')
      this.requests[host] = this.requests[host] ? this.requests[host] + 1 : 1
      if (host.includes('pwned')) {
        route.fulfill({
          status: 200,
          contentType: 'text/plain',
          body: !this._passphraseBreaches ? '' : `${this.passphraseHashParts[1]}:${this._passphraseBreaches}`,
        })
      }
      else route.continue()
    })
  }

  get passphrase() {
    return this._passphrase
  }
  get passphraseHashParts() {
    return this._passphraseHashParts
  }

  async setPassphrase(passphrase:string, breaches:number = 0) {
    this._passphrase = passphrase
    this._passphraseHashParts = await getPassHashParts(this._passphrase) as [string,string]
    this._passphraseBreaches = breaches
  }

  get baseUrl() {
    let querystring:string[] = []
    if (this.providers.length) querystring.push(`providers=${this.providers.join(',')}`)
    if (Object.keys(this.authConfig).length) querystring.push(`${Object.entries(this.authConfig).map(([k,v]) => `${k}=${v}`).join('&')}`)
    let url = new URL(this.worldConfig.host + (this.worldConfig.port ? `:${this.worldConfig.port}` : ''))
    url.pathname = '/testing'
    if (querystring.length) url.search = '?' + querystring.join('&')
    return url
  }

  async emailMessages(test:MailTests):Promise<void> {
    if (test.count && this.messages.length < test.count) await this._getEmailMessages({ count:test.count })
    if (test.subject && !this.messages.some((m:any) => m.Subject.includes(test.subject))) await this._getEmailMessages({ subject:test.subject })
    if (test.code) {
      let code = this?.messages[this?.messages.length - 1]?.Snippet.match(/code: (\d{6})/)?.[1] ?? ''
      if (!code || code === this.latestCode) await this._getEmailMessages({ code:true })
      else this.latestCode = code
    }
  }

  async _getEmailMessages(test:MailTests):Promise<void> {
    const response = await fetch(`http://localhost:54324/api/v1/messages`)
    let data = await response.json()
    this.messages = data.messages.filter((m:any) => m.To[0].Address.includes(this.emailAddress))
    if (!test) return
    if (test.count && this.messages.length < test.count) {
      // wait and try again until we get more messages
      await new Promise(resolve => setTimeout(resolve, 400))
      return this._getEmailMessages({ count:test.count })
    }
    if (test.subject && !this.messages.some((m:any) => m.Subject.includes(test.subject))) {
      // wait and try again until we get a message with the subject
      await new Promise(resolve => setTimeout(resolve, 400))
      return this._getEmailMessages({ subject:test.subject })
    }
    if (test.code) {
      let code = this?.messages[0]?.Snippet.match(/code:.*(\d{6})/)?.[1]
      if (!code || code === this.latestCode) {
        // wait and try again until we get a new code
        await new Promise(resolve => setTimeout(resolve, 400))
        return this._getEmailMessages({ code:true })
      }
      this.latestCode = code
    }
  }

  async ensureLoginMethod(method:'link'|'passphrase') {
    if (method === 'passphrase' && await this.getLocator(this.page, 'Sign in with a passphrase', 'link').isVisible({ timeout:200 })) {
      await this.getLocator(this.page, 'Sign in with a passphrase', 'link').isVisible({ timeout:200 })
      await this.expectElement(this.page.getByRole('textbox', { name:'Passphrase' }))
    }
  }

  async setupAccount(stayLoggedIn:boolean = false):Promise<void> {
    this.messages = []
    this.emailAddress = crypto.randomUUID() + '@example.com'
    await this.ensureLoginMethod('passphrase')
    await this.getLocator(this.page, 'Email address', 'input').fill(this.emailAddress)
    await this.getLocator(this.page, 'Passphrase', 'input').fill(this.passphrase)
    await this.getLocator(this.page, 'Sign up', 'button').click()
    await this.emailMessages({ code:true })
    expect(this.latestCode).not.toBe('')
    await this.getLocator(this.page, 'Enter code', 'textbox').fill(this.latestCode)
    await this.getLocator(this.page, 'Verify code', 'button').click()
    await this.expectSignedIn()
    if (!stayLoggedIn) {
      await this.getLocator(this.page, 'Sign out', 'button').click()
      await this.expectSignedIn(false)
    }
  }

  getTOTPCode(name:string):string {
    let code = speakeasy.totp({ secret:this.mfaTokens[name], encoding:"base32" })
    if (!code) throw new Error(`TOTP code not found for "${name}"`)
    return code
  }

  async saveTOTP(name:string, secret?:string):Promise<void> {
    if (this.mfaTokens[name]) throw new Error(`MFA token named "${name}" already exists`)
    if (!secret) {
      let locator = this.getLocator(this.page, 'Show Secret', 'button')
      if (await locator.isVisible()) await locator.click()
      let token = await this.getLocator(this.page, 'TOTP secret', 'textbox').textContent()
      if (!token) throw new Error('TOTP secret not found')
      this.mfaTokens[name] = token
    } else {
      this.mfaTokens[name] = secret
    }
  }

  async expectSignedIn(isSignedIn:boolean=true):Promise<void> {
    if (isSignedIn) await this.expectText(this.page, 'You are signed in')
    else await this.expectElement(this.page.getByRole('textbox', { name:'Email address' }))
  }

  async openMFAPanel():Promise<void> {
    let locator = this.getLocator(this.page, '+ Multi-factor authentication', 'button')
    if (await locator.isVisible()) await locator.click()
    await this.expectElement(this.getLocator(this.page, 'add a new MFA token', 'button'))
  }

}
setWorldConstructor(World)

Given('the default configuration', async (world:World) => {
  world.authConfig = {}
  await world.page.goto(world.baseUrl.toString())
})

Given(`the following configuration:`, async (world:World, config:DataTable) => {
  world.authConfig = config.rowsHash()
  await world.page.goto(world.baseUrl.toString())
})

Given('the providers {string}', async (world:World, providers:string) => {
  world.providers = providers.split(',').map(p => p.trim())
  await world.page.goto(world.baseUrl.toString())
})

Given('no providers', async (world:World) => {
  world.providers = []
  await world.page.goto(world.baseUrl.toString())
})

Given('I have an existing account', async (world:World) => {
  await world.setupAccount()
})

Given('I am signed in with an existing account', async (world:World) => {
  await world.setupAccount(true)
})

Given('I have an MFA token named {string}', async (world:World, name:string) => {
  await world.openMFAPanel()
  await world.getLocator(world.page, 'add a new MFA token', 'button').click()
  await world.getLocator(world.page, 'Name', 'input').fill(name)
  await world.getLocator(world.page, 'Generate new token', 'button').click()
  await world.saveTOTP(name)
  await world.getLocator(world.page, 'Enter code', 'textbox').fill(world.getTOTPCode(name))
  await world.getLocator(world.page, 'Verify code', 'button').click()
  await world.openMFAPanel()
  await world.expectElement(world.page.getByRole('listitem', { name:`Multi-factor authenticator ${name}` }))
})

Given('I am not signed in', async (world:World) => {
  await world.getLocator(world.page, 'Sign out', 'button').click()
  await world.expectSignedIn(false)
})

Given('I enter a new email address', async (world:World) => {
  world.emailAddress = crypto.randomUUID() + '@example.com'
  await world.getLocator(world.page, 'Email address', 'input').fill(world.emailAddress)
})

When(`I enter a (pwned )passphrase`, async (world:World) => {
  await world.setPassphrase(crypto.randomUUID().slice(0, 15), world.info.step?.includes('pwned') ? 1 : 0)
  await world.getLocator(world.page, 'Passphrase', 'input').fill(world.passphrase)
})
When(`I enter a (pwned )passphrase of {int} characters`, async (world:World, length:number) => {
  await world.setPassphrase(crypto.randomUUID().slice(0, length), world.info.step?.includes('pwned') ? 1 : 0)
  await world.getLocator(world.page, 'Passphrase', 'input').fill(world.passphrase)
})
When(`I enter the (pwned )passphrase {string}`, async (world:World, passphrase:string) => {
  await world.setPassphrase(passphrase, world.info.step?.includes('pwned') ? 1 : 0)
  await world.getLocator(world.page, 'Passphrase', 'input').fill(world.passphrase)
})

When('I sign up with an email link', async (world:World) => {
  await world.ensureLoginMethod('link')
  world.emailAddress = crypto.randomUUID() + '@example.com'
  await world.getLocator(world.page, 'Email address', 'input').fill(world.emailAddress)
  await world.getLocator(world.page, 'Send link', 'button').click()
})

When('I sign up with a passphrase', async (world:World) => {
  await world.ensureLoginMethod('passphrase')
  world.emailAddress = crypto.randomUUID() + '@example.com'
  await world.getLocator(world.page, 'Email address', 'input').fill(world.emailAddress)
  await world.getLocator(world.page, 'Passphrase', 'input').fill(world.passphrase)
  await world.getLocator(world.page, 'Sign up', 'button').click()
})

When('I sign in with an email link', async(world:World) => {
  await world.ensureLoginMethod('link')
  await world.getLocator(world.page, 'Email address', 'input').fill(world.emailAddress)
  await world.getLocator(world.page, 'Send link', 'button').click()
  await world.emailMessages({ code:true })
  expect(world.latestCode).not.toBe('')
  await world.getLocator(world.page, 'Enter code', 'textbox').fill(world.latestCode)
  await world.getLocator(world.page, 'Verify code', 'button').click()
})

When('I sign in with a passphrase', async(world:World) => {
  await world.ensureLoginMethod('passphrase')
  await world.getLocator(world.page, 'Email address', 'input').fill(world.emailAddress)
  await world.getLocator(world.page, 'Passphrase', 'input').fill(world.passphrase)
  await world.page.getByRole('button', { name:'Sign in', exact:true }).click()
})

When('I enter the proper code', async(world:World) => {
  await world.expectElement(world.getLocator(world.page, 'Enter code', 'textbox'))
  await world.emailMessages({ code:true })
  expect(world.latestCode).not.toBe('')
  await world.getLocator(world.page, 'Enter code', 'textbox').fill(world.latestCode)
  await world.getLocator(world.page, 'Verify code', 'button').click()
})

When('I open the MFA panel', async(world:World) => {
  await world.openMFAPanel()
})

When('I save the TOTP named {string}', async(world:World, name:string) => {
  await world.saveTOTP(name)
})

When('I enter/verify the {string} (TOTP )code', async(world:World, name:string) => {
  let code = world.getTOTPCode(name)
  await world.getLocator(world.page, 'Enter code', 'textbox').fill(code)
  await world.getLocator(world.page, 'Verify code', 'button').click()
})

When('I refresh/reload the page', async(world:World) => {
  await world.page.reload()
})

When('I delete the MFA token named {string}', async(world:World, name:string) => {
  await world.openMFAPanel()
  await world.getLocator(world.page, `Delete multi-factor authenticator ${name}`, 'button').click()
  await world.expectElement(world.getLocator(world.page, `Multi-factor authenticator ${name}`, 'button'), false)
})

Then('I should have {int} emails', async (world:World, count:number) => {
  await world.emailMessages({ count })
  expect(world.messages.length).toBe(count)
})

Then('I should have an email with subject {string}', async (world:World, subject:string) => {
  await world.emailMessages({ subject })
  expect(world.messages.length).toBeGreaterThan(0)
  expect(world.messages.some((m:any) => m.Subject.includes(subject))).toBe(true)
})

Then('I should be signed in', async (world:World) => {
  await world.expectSignedIn()
})

Then('I should be signed out', async (world:World) => {
  await world.expectSignedIn(false)
})

Then('I should see my email address', async (world:World) => {
  await world.expectText(world.page, world.emailAddress)
})

Then('I should see a dialog with {string}', async (world:World, message:string) => {
  expect(world.dialog).toContain(message)
})

Then('I should see a(n) MFA token/factor named {string}', async (world:World, name:string) => {
  await world.expectElement(world.page.getByRole('listitem', { name:`Multi-factor authenticator ${name}` }))
})
Then('I should NOT see a(n) MFA token/factor named {string}', async (world:World, name:string) => {
  await world.expectElement(world.page.getByRole('listitem', { name:`Multi-factor authenticator ${name}` }), false)
})

Then('I should see an MFA challenge', async (world:World) => {
  await world.expectElement(world.getLocator(world.page, 'Multi-Factor Authentication', 'heading'))
})

Then('I should see a/an/the {string} notification/warning/error/message', async (world:World, text:string) => {
  await world.expectElement(world.getLocator(world.page, 'p,span', 'element', text))
})

Then('I should not/NOT see a/an/the {string} notification/warning/error/message', async (world:World, text:string) => {
  await world.expectElement(world.getLocator(world.page, 'p,span', 'element', text), false)
})

Then('there should have been {int} request(s) to {string}', async (world:World, count:number, host:string) => {
  await world.page.waitForTimeout(1000)
  if (!count) expect(world.requests[host]).toBeFalsy()
  else expect(world.requests[host]).toBe(count)
})

Before(async (world:World) => {
  let path = world.screenshotPath.replace('/'+world.screenshotDir+'/', '/errors/')
  if (fs.existsSync(path)) fs.unlinkSync(path)
})

After(async (world:World) => {
  if (world.info.errors.length) {
    world.info.errors[0].message += '\n\nRequests: ' + JSON.stringify(world.requests, null, 2)
    world.worldConfig.screenshotDir = 'errors'
    await world.screenshot()
  }
})
