import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { quickpickle } from 'quickpickle';

const qpConfig = {

	// General quickpickle configuration
	explodeTags: [
		['nojs','js'],
		['chromium','firefox','webkit'],
		['mobile','tablet','desktop','widescreen'],
	],

	// PlaywrightWorld configuration
	worldConfig: {
		port: 5173, // sets the port
		slowMo: 50, // turns on "slowMo" for 50ms
	}
}

export default defineConfig({
	// @ts-ignore
	plugins: [tailwindcss(), sveltekit(), quickpickle(qpConfig)],
	test: {
		include: ['src/**/*.feature'],
		setupFiles: ['./src/test/qp.steps.ts'],
	}
});
