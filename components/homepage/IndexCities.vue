<template>
	<v-card
		class="cities mx-auto" max-width="1400"
		color="grey-lighten-3" variant="flat"
		rounded="0"
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
				src="/showcase-2.png" height="100%"
				:cover="true"
				gradient="to top right, rgba(0,0,0,.5), rgba(0,0,0,.5)"
			>
				<h1>Choose a popular city</h1>

				<v-chip-group>
					<v-chip
						v-for="district in districtList"
						:key="district"
						size="large" clas="city-chip"
					>
						{{ district }}
					</v-chip>
				</v-chip-group>
			</v-img>
		</div>
	</v-card>
</template>
<script lang="ts" setup>
const districtList = [
	"Kathmandu",
	"Pokhara",
	"Chitwan",
	"Biratnagar",
	"Birgunj",
	"Butwal",
	"Dharan",
	"Bhaktapur",
	"Lalitpur",
]
</script>
