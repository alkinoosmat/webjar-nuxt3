export default defineNuxtConfig({
	modules: ['@nuxtjs/tailwindcss'],
	nitro: {
		preset: 'vercel-edge',
	},
	css: ['~/layouts/global.css'],
});
