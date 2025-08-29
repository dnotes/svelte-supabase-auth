import { PlaywrightWorld } from '@quickpickle/playwright/PlaywrightWorld'
import '@quickpickle/playwright/actions'
import '@quickpickle/playwright/outcomes'
import { Given, When, Then, DataTable, setWorldConstructor, After, AfterStep } from 'quickpickle'
import { expect } from 'playwright/test'

type MailTests = {
  count?:number
  code?:boolean
  subject?:string
}

class World extends PlaywrightWorld {

  providers: string[] = []
  authConfig: Record<string, string> = {}
  emailAddress: string = ''
  messages: any[] = []
  latestCode: string = ''
  data: Record<string, string> = {}

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
      let code = this?.messages[this?.messages.length - 1]?.Snippet.match(/code: (\d{6})/)?.[1]
      if (!code || code === this.latestCode) {
        // wait and try again until we get a new code
        await new Promise(resolve => setTimeout(resolve, 400))
        return this._getEmailMessages({ code:true })
      }
      this.latestCode = code
    }
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

When('I sign up with an email link', async (world:World) => {
  world.emailAddress = crypto.randomUUID() + '@example.com'
  await world.getLocator(world.page, 'Email address', 'input').fill(world.emailAddress)
  await world.getLocator(world.page, 'Send link', 'button').click()
})

When('I enter the proper code', async(world:World) => {
  await world.expectElement(world.page.getByRole('textbox', { name:'Enter code' }))
  await world.emailMessages({ code:true })
  expect(world.latestCode).not.toBe('')
  await world.getLocator(world.page, 'Enter code', 'textbox').fill(world.latestCode)
  await world.getLocator(world.page, 'Verify code', 'button').click()
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
  await world.expectText(world.page, 'You are signed in')
})

Then('I should see my email address', async (world:World) => {
  await world.expectText(world.page, world.emailAddress)
})

AfterStep(async (world:World) => {
  if (world.info.errors.length) {
    await world.screenshot()
  }
})
