<template>
	<v-card
		class="cities mx-auto" max-width="1400"
		color="grey-lighten-3" variant="flat"
		rounded="small" height="90vh"
	>
		<div class="cities__left">
			<v-avatar color="orange-lighten-4" size="50">
				<v-icon
					color="orange" size="40"
					class="mt-5"
				>
					mdi-fire
				</v-icon>
			</v-avatar>
			<h1>Our Hottest Cities</h1>
			<p>Find sweet deals on accommodations and houses for rent in our most popular locations</p>
		</div>
		<div class="cities__right">
			<v-img
				:src="getBgImage" height="90vh"
				:cover="true" class="cities__bg"
				gradient="to top right, rgba(0,0,0,.5), rgba(0,0,0,.5)"
			>
				<h2>Choose a popular city</h2>

				<div class="cities__group">
					<a
						v-for="city in featuredCities" :key="city.name"
						v-ripple class="cities__city"
						@mouseenter="city.isActive = true"
						@mouseleave="city.isActive = false"
					>
						{{ city.name }}
						<img :src="city.iconImage" :alt="city.name">
					</a>
				</div>
			</v-img>
		</div>
	</v-card>
</template>
<script lang="ts" setup>
const featuredCities = reactive([
	{
		name: "Kathmandu",
		iconImage: "/showcase/Icon_Boudhanath_Stupa.jpg",
		bgImage: "/showcase/Boudhanath_Stupa.jpg",
		isActive: false,
	},
	{
		name: "Pokhara",
		iconImage: "/showcase/Icon_Phewa_lake.jpg",
		bgImage: "/showcase/Phewa_lake.jpg",
		isActive: false,
	},
	{
		name: "Chitwan",
		iconImage: "/showcase/Icon_Chital_at_Chitwan.jpg",
		bgImage: "/showcase/Chital_at_Chitwan.jpg",
		isActive: false,
	},
	{
		name: "Bhaktapur",
		iconImage: "/showcase/Icon_Nyatpola_&_Bhairav_Temple.jpg",
		bgImage: "/showcase/Nyatpola_&_Bhairav_Temple.jpg",
		isActive: false,
	},
	{
		name: "Lalitpur",
		iconImage: "/showcase/Icon_Patan_Durbar_Square.jpg",
		bgImage: "/showcase/Patan_Durbar_Square.jpg",
		isActive: false,
	},
])
const getBgImage = computed(() => {
	const city = featuredCities.find(city => city.isActive)
	if (city) return city.bgImage
	return "/showcase-2.png"
})
</script>
