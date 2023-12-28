<template>
	<v-img
		class="index-img"
		src="/homepage-desktop.svg"
		lazy-src="/homepage-desktop-lazy.png"
		:cover="true" :eager="true"
	>
		<div class="index-img__content">
			<div class="index-img__content__heading">
				Pursue the eternal<br>
				Or dance in the ephemeral
			</div>
			<div class="index-img__content__subheading">
				Accommodation for rent<br>
				that fits your timeline
			</div>
			<div class="index-img__content__form">
				<v-card rounded="lg" color="#e8e8e8">
					<v-card-text class="pa-8">
						<v-text-field
							v-model="search"
							bg-color="white" variant="outlined"
							placeholder="Search by location or property name"
							outlined prepend-inner-icon="mdi-magnify"
							hide-details="auto" name="search"
						/>
					</v-card-text>
				</v-card>
			</div>
		</div>
	</v-img>
	<div class="index__info">
		Lease the present, dwell in possibilities; life's rental script unfolds with each moment.
	</div>

	<v-img
		src="/showcase-1.png" width="auto"
		height="100vh" :eager="true"
	/>

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
					<v-chip size="large">
						Kathmandu
					</v-chip>
					<v-chip size="large">
						Pokhara
					</v-chip>
					<v-chip size="large">
						Chitwan
					</v-chip>
					<v-chip size="large">
						Biratnagar
					</v-chip>
					<v-chip size="large">
						Birgunj
					</v-chip>
					<v-chip size="large">
						Butwal
					</v-chip>
					<v-chip size="large">
						Dharan
					</v-chip>
					<v-chip size="large">
						Bhaktapur
					</v-chip>
					<v-chip size="large">
						Lalitpur
					</v-chip>
				</v-chip-group>
			</v-img>
		</div>
	</v-card>

	<v-card
		class="about d-flex mx-auto pa-2" max-width="1400"
		color="grey-lighten-3" variant="flat"
	>
		<v-card
			max-width="700" width="700"
			variant="flat"
		>
			<v-img src="/showcase-3.jpeg" cover />
		</v-card>
		<v-card
			class="mx-auto" max-width="1400"
			variant="flat"
		>
			<v-card-title>
				So, What's RentShare?
			</v-card-title>
			<v-card-text>
				<p>
					RentShare is a rental platform for accommodation seekers and landlords. We help you find the right
					accommodation for your needs and budget. We also help landlords find the right tenants for their
					properties.
				</p>
				<p>
					We are a team of young and enthusiastic individuals who are passionate about making the rental
					experience better for everyone involved. We are based in Kathmandu, Nepal.
				</p>
			</v-card-text>

			<v-card-text>
				<v-list density="comfortable">
					<v-list-item>
						<template #prepend>
							<v-icon>mdi-nintendo-switch</v-icon>
						</template>
						<v-list-item-title>
							Apply Online
						</v-list-item-title>
						<v-list-item-subtitle>
							Submit digital applications and credit reports with RentShare's easy-to-use application tool.
						</v-list-item-subtitle>
					</v-list-item>
					<v-list-item>
						<template #prepend>
							<v-icon>mdi-account-multiple</v-icon>
						</template>
						<v-list-item-title>
							Find Roommates
						</v-list-item-title>
						<v-list-item-subtitle>
							Find roommates and rooms for rent in your area.
						</v-list-item-subtitle>
					</v-list-item>
					<v-list-item>
						<template #prepend>
							<v-icon>mdi-bell</v-icon>
						</template>
						<v-list-item-title>
							Stay Informed
						</v-list-item-title>
						<v-list-item-subtitle>
							Receive notifications when new listings hit the market.
						</v-list-item-subtitle>
					</v-list-item>
					<v-list-item>
						<template #prepend>
							<v-icon>mdi-quality-high</v-icon>
						</template>
						<v-list-item-title>
							Verified Listings
						</v-list-item-title>
						<v-list-item-subtitle>
							We verify all listings and landlords to ensure your safety.
						</v-list-item-subtitle>
					</v-list-item>
				</v-list>
			</v-card-text>
		</v-card>
	</v-card>

	<v-card class="services" variant="flat">
		<v-card-text class="services__title">
			<h1>Reach quality renters and<br>fill vacancies faster.</h1>
			<p>We have marketing solutions for landlords, agents, and multifamily professionals.</p>
		</v-card-text>

		<v-card-text class="services__list">
			<v-card max-width="500" class="services__item">
				<v-card-text class="services__list__heading">
					<h2>Landlords and Agents</h2>
					<p>Manage your rentals with our free leasing tools.</p>
				</v-card-text>

				<v-list>
					<v-list-item>
						<template #prepend>
							<v-icon>mdi-check</v-icon>
						</template>
						<v-list-item-title>
							Reach over 13 million high-quality renters actively searching on our network
						</v-list-item-title>
					</v-list-item>
					<v-list-item>
						<template #prepend>
							<v-icon>mdi-check</v-icon>
						</template>
						<v-list-item-title>
							List a property for rent and collect online rental applications
						</v-list-item-title>
					</v-list-item>
					<v-list-item>
						<template #prepend>
							<v-icon>mdi-check</v-icon>
						</template>
						<v-list-item-title>
							Screen tenants with full credit reports and background checks
						</v-list-item-title>
					</v-list-item>
				</v-list>

				<v-card-text>
					<v-btn
						block size="large"
						color="primary"
					>
						Learn More
					</v-btn>
				</v-card-text>
			</v-card>
			<v-card max-width="500" class="services__item">
				<v-card-text class="services__list__heading">
					<h2>Multi-family Communities</h2>
					<p>Advertise with us to optimize your leasing success.</p>
				</v-card-text>

				<v-list>
					<v-list-item>
						<template #prepend>
							<v-icon>mdi-check</v-icon>
						</template>
						<v-list-item-title>
							Reach over 13 million high-quality renters actively searching on our network
						</v-list-item-title>
					</v-list-item>
					<v-list-item>
						<template #prepend>
							<v-icon>mdi-check</v-icon>
						</template>
						<v-list-item-title>
							Get exposure across our broad network of leading apartment search sites
						</v-list-item-title>
					</v-list-item>
					<v-list-item>
						<template #prepend>
							<v-icon>mdi-check</v-icon>
						</template>
						<v-list-item-title>
							Receive ongoing support from a dedicated Account Manager
						</v-list-item-title>
					</v-list-item>
				</v-list>

				<v-card-text>
					<v-btn
						block size="large"
						color="primary"
					>
						Learn More
					</v-btn>
				</v-card-text>
			</v-card>
		</v-card-text>
	</v-card>

	<div class="values">
		<h3 class="uppercase">
			Our Values
		</h3>
		<h1>Inclusive. Safe. Respectful</h1>
		<p>
			Our mission is to make the rental experience better for everyone involved.<br>
			Read our full community values to learn more about how we approach our work.
		</p>
		<v-btn size="large">
			Learn More
		</v-btn>
	</div>

	<div class="newsroom">
		<h3>Find us in the press.</h3>
		<div class="newsroom__list">
			<v-card
				v-for="i in 4"
				:key="i"
				height="100" width="200"
				color="grey lighten-3"
			>
				Dummy {{ i }}
			</v-card>
		</div>
		<v-btn size="large">
			See our press
		</v-btn>
	</div>

	<div class="search">
		<h2>Find your next home</h2>
		<p>Search thousands of rental listings and find your next home.</p>
		<v-card
			max-width="600" variant="flat"
			class="mx-auto my-6"
		>
			<v-text-field
				variant="outlined" outlined
				placeholder="Try Koteshwor, Kathmandu"
				prepend-inner-icon="mdi-magnify"
				hide-details="auto" name="search"
			/>
		</v-card>
	</div>

	<div class="explore">
		<h1>Explore rentals in popular cities</h1>

		<v-expansion-panels>
			<v-expansion-panel
				v-for="i in 6" :key="i"
			>
				<template #title>
					<h4>Item for rent</h4>
				</template>
				<template #text>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
					dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
					ex ea commodo consequat.
				</template>
			</v-expansion-panel>
		</v-expansion-panels>
	</div>
</template>
<script setup lang="ts">
useSeoMeta({
	title: "Home | RentShare",
	ogTitle: "Home | RentShare",
	description: "A rental platform for accommodation seekers and landlords",
	ogDescription: "A rental platform for accommodation seekers and landlords",
	ogImage: "https://rentshare.com/rentshare.png",
	twitterCard: "summary_large_image",
})

const search = ref("")
</script>
<style lang="scss" scoped>
@import "styles/index";
</style>
