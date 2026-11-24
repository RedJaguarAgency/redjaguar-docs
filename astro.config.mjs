// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Manual de los plugins de Red Jaguar. Ver docs/plan.md.
//
// Reglas:
// - El inglés vive en la raíz; cada idioma, en su carpeta (es/, más adelante pt-br/).
//   Una página y su traducción tienen la misma ruta.
// - Una dirección publicada no se cambia: los plugins enlazan a ella. Si hay que
//   moverla, agrega la redirección en `redirects`.
// - Para un plugin nuevo: su carpeta en src/content/docs/ (y en es/) y un grupo
//   en `sidebar`.

export default defineConfig({
	site: 'https://docs.redjaguar.agency',
	redirects: {},
	integrations: [
		starlight({
			title: 'Red Jaguar Docs',
			description: 'Manuals for the Red Jaguar WordPress plugins.',
			defaultLocale: 'root',
			locales: {
				root: { label: 'English', lang: 'en' },
				es: { label: 'Español', lang: 'es' },
			},
			social: [
				{ icon: 'email', label: 'Support: roar@redjaguar.agency', href: 'mailto:roar@redjaguar.agency' },
			],
			customCss: ['./src/styles/custom.css'],
			lastUpdated: true,
			pagination: true,
			sidebar: [
				{ label: 'Home', translations: { es: 'Inicio' }, slug: 'index' },
				{
					label: 'Licenses and account',
					translations: { es: 'Licencias y cuenta' },
					items: [{ autogenerate: { directory: 'licenses' } }],
				},
				{
					label: 'News Sitemap & Schema',
					items: [{ autogenerate: { directory: 'news-sitemap-schema' } }],
				},
				{
					label: 'DataMaps',
					items: [{ autogenerate: { directory: 'datamaps' } }],
				},
				{
					label: 'Newsroom Privacy & Optimizer',
					items: [{ autogenerate: { directory: 'newsroom-privacy-optimizer' } }],
				},
				{ label: 'Support', translations: { es: 'Soporte' }, slug: 'support' },
			],
		}),
	],
});
