import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { quickpickle, type QuickPickleConfig } from 'quickpickle';
import Icons from 'unplugin-icons/vite';
import { ViteToml } from 'vite-plugin-toml';

const qpConfig:Partial<QuickPickleConfig> = {

	// General quickpickle configuration
	explodeTags: [
		['nojs','js'],
		['light','dark'],
		['chromium','firefox','webkit'],
		['mobile','tablet','desktop','widescreen'],
	],
	stepTimeout: 8000,

	// PlaywrightWorld configuration
	worldConfig: {
		port: 5173, // sets the port
		slowMo: 100, // turns on "slowMo"
		defaultBrowserSize: 'mobile',
		stepTimeout: 2000,
		screenshotOptions: {
			resizeEnabled: true,
			mask: [
				'span.icon',
			],
			maskColor: 'violet',
		},
	}
}

export default defineConfig({
	// @ts-ignore
	plugins: [
		tailwindcss(),
		sveltekit(),
		quickpickle(qpConfig),
		Icons({ compiler: 'svelte' }) as any,
		ViteToml(),
	],
	server: {
		fs: {
			allow: ['../../supabase/config.toml', './package.json'],
		},
	},
	ssr: {
		noExternal: [
			'hibp'
		]
	},
  // @ts-ignore
	test: {
		include: ['src/**/*.feature', 'tests/**/*.feature'],
		setupFiles: ['./tests/qp.steps.ts'],
		testTimeout: 10000,
		maxWorkers: 1,
		maxConcurrency: 3,
	}
});
