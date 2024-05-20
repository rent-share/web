<template>
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
</template>
