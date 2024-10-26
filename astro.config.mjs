// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom'
import starlightThemeRapide from 'starlight-theme-rapide'
// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My homelab Wiki',
			social: {
				github: 'https://github.com/nycbrah/homelab-wiki',
			},
			plugins: [starlightImageZoom(),starlightThemeRapide()],
			sidebar: [
				{
					label: 'Getting Started',
					autogenerate: { directory: 'getting_started' },
				},
				{
					label: 'Planning a Homelab',
					autogenerate: { directory: 'planning_a_homelab' },
				},

				{
					label: 'Resources',
					autogenerate: { directory: 'resources' },
				},
			],
		}),
	],
});
