<template>
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
</template>
