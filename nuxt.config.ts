import vuetify, {transformAssetUrls} from "vite-plugin-vuetify"

export default defineNuxtConfig({
	build: {
		transpile: ["vuetify"],
	},
	app: {
		head: {
			titleTemplate: "%s | RentShare",
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
		},
		pageTransition: { name: "page", mode: "out-in" },
	},
	routeRules: {
		"/profile/**": { ssr: false },
		"/settings/**": { ssr: false }
	},
	devtools: {enabled: true},
	modules: [
		"@nuxtjs/google-fonts",
	],
	googleFonts: {
		families: {
			Figtree: [300, 400, 500, 600, 700, 800, 900],
		},
	},
	vite: {
		vue: {
			template: {
				transformAssetUrls,
			},
		},
		plugins: [
			vuetify({autoImport: true}),
		]
	},
})
