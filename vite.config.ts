import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { quickpickle, type QuickPickleConfig } from 'quickpickle';

const qpConfig:Partial<QuickPickleConfig> = {

	// General quickpickle configuration
	explodeTags: [
		['nojs','js'],
		['chromium','firefox','webkit'],
		['mobile','tablet','desktop','widescreen'],
	],
	stepTimeout: 6000,

	// PlaywrightWorld configuration
	worldConfig: {
		port: 5173, // sets the port
		slowMo: 100, // turns on "slowMo"
	}
}

export default defineConfig({
	// @ts-ignore
	plugins: [tailwindcss(), sveltekit(), quickpickle(qpConfig)],
	test: {
		include: ['src/**/*.feature'],
		setupFiles: ['./src/test/qp.steps.ts'],
		testTimeout: 10000,
		maxWorkers: 1,
		maxConcurrency: 1,
	}
});
