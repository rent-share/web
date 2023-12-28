import vuetify, {transformAssetUrls} from "vite-plugin-vuetify"

export default defineNuxtConfig({
	build: {
		transpile: ["vuetify"],
	},
	app: {
		head: {
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
		}
	},
	devtools: {enabled: true},
	modules: [
		"@pinia/nuxt",
		"@nuxtjs/google-fonts", // https://google-fonts.nuxtjs.org/
		"nuxt3-leaflet",
	],
	pinia: {
		storesDirs: ["./stores/**"],
	},
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
