import '@quickpickle/playwright/world'
import '@quickpickle/playwright/actions'
import '@quickpickle/playwright/outcomes'
import type { PlaywrightWorld } from '@quickpickle/playwright/PlaywrightWorld'
import { Given } from 'quickpickle'
import path from 'node:path'

Given('I load the web component', async (world:PlaywrightWorld) => {
  await world.page.goto('file://' + path.join(__dirname, '../index.html'))
})
