<template>
	<v-app class="app">
		<NuxtLayout>
			<NuxtLoadingIndicator :height="4" color="blue" />
			<NuxtPage />
		</NuxtLayout>
	</v-app>
</template>
<style lang="scss">
@import "styles/app";
</style>
