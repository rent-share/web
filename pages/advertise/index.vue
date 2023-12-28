<template>
	<div class="advertise">
		<v-img
			class="advertise--banner"
			src="/advertise/info_cover_hd.png"
			lazy-src="/advertise/info_cover_lazy.jpeg"
			height="100vh" width="100vw"
			cover
			gradient="to right top, rgb(135 134 134 / 3%), rgb(163 163 163 / 52%)"
		>
			<div class="advertise--banner--container">
				<h2>RentShare</h2>
				<h1>Advertise your property</h1>
				<p>
					We'll help you find the right tenants for your property.
				</p>
				<v-btn
					color="primary"
					size="large" href="/advertise/new"
				>
					Advertise
				</v-btn>
			</div>
		</v-img>
		<div class="advertise--benefits">
			<h4>Our Benefits</h4>
			<h2>Why choose us?</h2>
			<h3>
				No Broker. No Commission. No Hassle.
			</h3>
			<p>
				The quote "No Broker. No Commission. No Hassle." encapsulates a solution-oriented approach to the challenges
				associated with finding or advertising accommodations and vehicles for rent. In the context of seeking rental
				options, the absence of a broker removes an intermediary, streamlining the process and potentially reducing
				costs for both landlords and tenants. By eliminating commissions, the quote promises a more cost-effective
				transaction, providing a transparent and direct connection between property owners and potential renters.
				Moreover, the emphasis on "No Hassle" implies a simplified and efficient experience, suggesting that the rental
				process is straightforward and user-friendly, sparing individuals from the complexities often associated with
				property transactions. Overall, the quote promotes a convenient and hassle-free experience, appealing to those
				seeking a seamless and direct approach to renting accommodations or vehicles.
			</p>
		</div>
		<div class="advertise--reach">
			<h4>Our Reach</h4>
			<h2>Market your property to a large audience</h2>
			<p>
				We have a large number of users who are looking for properties to rent.
			</p>
		</div>
		<div class="advertise--solution">
			<h4>Our Solution</h4>
			<h2>Help yourself and help others</h2>
			<p>
				In metropolitan areas, the challenge of finding suitable tenants for properties is being addressed through
				innovative solutions. The proposed online platform offers a streamlined approach, allowing tenants to post their
				property listings along with specific requirements. This not only empowers property owners to showcase their
				offerings but also provides a structured and searchable database for potential tenants. By enabling tenants to
				easily navigate through available options, the platform simplifies the otherwise daunting task of finding the
				right accommodation. This tech-driven solution not only addresses the complexities of urban property markets but
				also fosters a more efficient and user-friendly experience for both landlords and tenants alike.
			</p>
		</div>
		<div class="advertise--options">
			<h4>Property Options</h4>
			<h2>What kind of properties can you advertise?</h2>
			<div class="advertise--options--list">
				<v-card
					v-for="option in advertiseOptions" :key="option.title"
					:color="option.color + '-lighten-4'"
				>
					<v-card-text>
						<v-avatar size="80" :color="option.color">
							<v-icon size="40" color="white">
								{{ option.icon }}
							</v-icon>
						</v-avatar>
					</v-card-text>
					<v-card-title><h3>{{ option.title }}</h3></v-card-title>
					<v-card-text>
						<p>{{ option.description }}</p>
					</v-card-text>
					<div class="advertise--options--button">
						<v-btn
							:color="option.color + '-darken-4'"
							variant="tonal"
						>
							Advertise
						</v-btn>
					</div>
				</v-card>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
interface AdvertiseOption {
	title: string
	icon: string
	color: string
	description: string
}

const advertiseOptions: AdvertiseOption[] = [
	{
		title: "Room",
		icon: "mdi-bed",
		color: "teal",
		description: "You can advertise a room in a shared house.",
	},
	{
		title: "Flat",
		icon: "mdi-vhs",
		color: "orange",
		description: "You can advertise a flat in a building.",
	},
	{
		title: "House",
		icon: "mdi-home-city",
		color: "green",
		description: "You can advertise a house.",
	},
	{
		title: "Vehicles",
		icon: "mdi-car-estate",
		color: "blue",
		description: "You can advertise a vehicle like a car, bike, etc.",
	},
	{
		title: "Seek Partners",
		icon: "mdi-account-group",
		color: "purple",
		description: "You can advertise for a partner to share your property with.",
	},
]
</script>
<style lang="scss">
.advertise {
	&--banner {
		position: relative;

		&--container {
			position: absolute;
			top: 30%;
			left: 50%;
			transform: translate(-50%, -50%);
			text-align: center;
			color: black;

			h1 {
				font-size: 4rem;
				line-height: 4rem;
				margin-bottom: 1rem;
			}

			h2 {
				font-size: 2rem;
			}

			p {
				font-size: 1.5rem;
				margin-bottom: 2rem;
			}
		}
	}

	&--reach, &--solution, &--benefits, &--options {
		padding: 2rem;
		text-align: center;
		max-width: 1400px;
		margin: 0 auto;

		h2 {
			font-size: 2rem;
			margin-bottom: 1rem;
		}

		h3 {
			font-size: 1.5rem;
			margin-bottom: 1rem;
		}

		h4 {
			font-size: 1.3rem;
			color: #000287;
		}

		p {
			font-size: 1.5rem;
			margin-bottom: 2rem;
		}
	}

	&--options {
		&--list {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			gap: 1rem;

			.v-card {
				padding-top: 1rem;
				width: 230px;

				h3 {
					font-size: 1.5rem;
					margin-bottom: 1rem;
				}

				p {
					font-size: 1rem;
					margin-bottom: 4rem;
				}
			}
		}

		&--button {
			margin-block: 1rem;
			padding: 1rem;
			position: absolute;
			bottom: 0;
			left: 50%;
			transform: translateX(-50%);
		}
	}
}
</style>
