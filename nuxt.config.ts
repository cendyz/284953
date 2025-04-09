export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxt/image', '@vueuse/nuxt'],
	app: {
		head: {
			htmlAttrs: {
				lang: 'pl',
			},
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
