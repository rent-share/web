<template>
	<div class="homepage">
		<HomepageIndexBanner />
		<HomepageIndexInfo />
		<HomepageIndexShowcaseImg />
		<HomepageIndexCities />
		<HomepageIndexAbout />
		<HomepageIndexServices />
		<HomepageIndexValues />
		<HomepageIndexNewsRoom />
		<HomepageIndexSearch />
		<HomepageIndexExplore />
	</div>
</template>
<script setup lang="ts">
useSeoMeta({
	title: "Home",
	ogTitle: "Home | RentShare",
	description: "A rental platform for accommodation seekers and landlords",
	ogDescription: "A rental platform for accommodation seekers and landlords",
	ogImage: "https://rentshare.com/rentshare.png",
	twitterCard: "summary_large_image",
})
</script>
<style lang="scss">
@import "styles/index";
</style>
