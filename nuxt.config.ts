export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxt/image', '@vueuse/nuxt', '@nuxtjs/i18n'],
	i18n: {
		defaultLocale: 'pl',
		locales: [
			{ code: 'pl', name: 'Polski', file: 'pl.json' },
			{ code: 'en', name: 'English', file: 'en.json' },
			{ code: 'ja', name: '日本語', file: 'ja.json' },
		],
		lazy: true,
		langDir: 'locales/',
	},
	app: {
		head: {
			title: 'mWallet',
			link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png?v2' }],
			meta: [
				{
					name: 'description',
					content:
						'Masz kontrolę nad swoimi finansami? Sprawdź naszą finance app i zarządzaj budżetem łatwo, szybko i bezpiecznie!',
				},
			],
		},
	},
})
