import { defineConfig } from 'vitest/config'
import { quickpickle, type QuickPickleConfigSetting } from 'quickpickle'

const qpconf:QuickPickleConfigSetting = {
  worldConfig: {
    host: 'http://localhost',
    port: 8086,
    defaultBrowserSize: 'mobile',
    stepTimeout: 3000,
    screenshotOptions: {
      mask: ['span.icon'],
    },
  }
}

export default defineConfig({
  // @ts-ignore
  plugins: [quickpickle(qpconf)],
  test: {
    include: ['tests/**/*.feature'],
    setupFiles: ['tests/web.steps.ts'],
  },
})
