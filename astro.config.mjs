	// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightCatppuccin from '@catppuccin/starlight'
import starlightImageZoom from 'starlight-image-zoom'
import mermaid from 'astro-mermaid';
import starlightCodeblockFullscreen from 'starlight-codeblock-fullscreen'
import starlightCustomNavigation from 'starlight-custom-navigation'
import starlightMarkdownBlocks from 'starlight-markdown-blocks';
import { pluginTypewriter } from 'expressive-code-typewriter';

export default defineConfig({
	redirects: {
		'/': '/es/',
	},
	integrations: [
		starlight({
			title: {
				es: "Manim - PyCon26",
				ca: "Manim - PyCon26",
				en: "Manim - PyCon26",
			},
			logo: {
				light: './src/assets/light_logo.svg',
				dark: './src/assets/dark_logo.svg',
			},
			defaultLocale: 'es',
			locales: {
				es: {
					label: 'Español',
					lang: 'es'
				},
				ca: {
					label: 'Català',
					lang: 'ca'
				},
				en: {
					label: 'English',
					lang: 'en'
				},
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			plugins: [
				starlightCatppuccin({
					dark: { flavor: "frappe", accent: "teal" },
					light: { flavor: "latte", accent: "teal" },
				}),
				starlightImageZoom(),
				starlightCodeblockFullscreen(),
				starlightCustomNavigation(),
			],
			components: {
				Footer: './src/components/CustomFooter.astro'
			}
		}),
		mermaid(),

	],
});
