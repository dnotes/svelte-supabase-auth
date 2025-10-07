import '@quickpickle/playwright/world'
import '@quickpickle/playwright/actions'
import '@quickpickle/playwright/outcomes'
import type { PlaywrightWorld } from '@quickpickle/playwright/PlaywrightWorld'
import { Given, Then } from 'quickpickle'
import path from 'node:path'

Given('I load the web component', async (world:PlaywrightWorld) => {
  await world.page.goto('file://' + path.join(__dirname, '../index.html'))
})

Then('the screenshot {string} should match to within {float}%', async (world:PlaywrightWorld, name:string, maxDiffPercentage:number) => {
  await world.page.waitForTimeout(1000)
  let explodedTags = world.info.explodedIdx ? `_(${world.info.tags.join(',')})` : '';
  await world.expectScreenshotMatch(world.page, `${world.screenshotDir}/${name}${explodedTags}.png`, { maxDiffPercentage });
})
