module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:vue/vue3-recommended',
		"@nuxt/eslint-config"
	],
	parser: "vue-eslint-parser",
	parserOptions: {
		parser: '@typescript-eslint/parser'
	},
	plugins: ['@typescript-eslint'],
	ignorePatterns: [
		'node_modules/',
		'build/',
		'dist/',
		'coverage/',
		".gitignore",
	],
	rules: {
		"semi": ["error", "never"],
		"quotes": ["error", "double"],
		"no-console": ["error", { allow: ["warn", "error", "info"] }],
		"indent": ["error", "tab"],
		"vue/html-quotes": ["error", "double"],
		"vue/html-indent": ["error", "tab"],
		"vue/max-attributes-per-line": ["error", {
			"singleline": {
				"max": 2
			},
			"multiline": {
				"max": 2
			}
		}],
		"vue/no-multiple-template-root": "off",
	}
}
