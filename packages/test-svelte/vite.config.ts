import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { quickpickle } from 'quickpickle';
import type { QuickPickleConfigSetting } from 'quickpickle';

const quickpickleConfig:QuickPickleConfigSetting = {
	worldConfig: {
		slowMo: 50,
		stepTimeout: 1000,
		port: 8081,
	}
}

export default defineConfig({
	plugins: [sveltekit(), quickpickle()],
	// @ts-expect-error
	test: {
		include: ['**/*.feature'],
    setupFiles: ['tests/svelte-test.steps.ts'],
		quickpickle: quickpickleConfig,
	}
});
