<template>
	<div class="room">
		<div class="room--toolbar">
			<v-btn icon variant="tonal">
				<v-icon>mdi-chevron-left</v-icon>
			</v-btn>
			<v-chip label size="small">
				Rent List
			</v-chip>
			<v-spacer />
			<v-chip
				label prepend-icon="mdi-clock"
				size="small"
			>
				{{ $fromNow(room.created_at) }}
			</v-chip>
			<v-btn
				icon variant="flat"
				size="small"
			>
				<v-icon>mdi-bell</v-icon>
			</v-btn>
			<v-btn
				icon variant="flat"
				size="small"
			>
				<v-icon>mdi-bookmark</v-icon>
			</v-btn>
		</div>
		<div class="room--headline">
			<div class="room--headline--name">
				<h1>{{ room.name }}</h1>
				<p>
					{{ room.address }}, {{ room.district.name }}, {{ room.district.province.name }} |
					<span class="room--headline--rating">{{ room.rating }}</span> Excellent |
					<v-icon color="green">
						mdi-shield
					</v-icon>
					Verified
				</p>
			</div>
			<v-spacer />
			<div class="room--headline--price">
				<div class="room--headline--overline">
					Monthly Rent
				</div>
				<p>Rs. 6000</p>
			</div>
			<div class="room--headline--beds">
				<div class="room--headline--overline">
					Beds
				</div>
				<p>{{ room.beds }}</p>
			</div>
			<div class="room--headline--baths">
				<div class="room--headline--overline">
					Baths
				</div>
				<p>{{ room.baths }}</p>
			</div>
			<div class="room--headline--area">
				<div class="room--headline--overline">
					Area (Feet)
				</div>
				<p>{{ room.dimension }}</p>
			</div>
		</div>
		<div class="room--content">
			<div class="room--media">
				<v-card height="100%">
					<v-carousel show-arrows="hover" height="100%">
						<v-carousel-item
							v-for="media in room.medias"
							:key="media.id"
							:src="media.url"
							cover
						/>
					</v-carousel>
				</v-card>
			</div>
			<div class="room--details">
				<div class="room--tour">
					<h2>Tour Details</h2>
					<v-menu>
						<template #activator="{props}">
							<v-text-field
								label="Select date"
								readonly density="compact"
								hide-details class="room--tour--input"
								prepend-inner-icon="mdi-calendar"
								v-bind="props" variant="outlined"
							/>
						</template>
						<v-date-picker
							locale="en"
						/>
					</v-menu>
					<v-btn
						block size="large"
						variant="outlined"
						class="room--tour--button"
					>
						Request tour
					</v-btn>
				</div>
				<div class="room--contact">
					<h2>Contact</h2>
					<div class="d-flex align-center gap-point5">
						<h4><a :href="'tel:' + room.primary_contact">{{ room.primary_contact }}</a>,</h4>
						<h4 class="text-grey-darken-1">
							<a :href="'tel:' + room.secondary_contact">{{ room.secondary_contact }}</a>
						</h4>
					</div>
				</div>
				<div class="room--location">
					<h2>Location</h2>
					<v-card
						class="room--map" variant="outlined"
						rounded="2"
					>
						<ClientOnly>
							<template #fallback>
								<div class="d-flex justify-center align-center fill-height">
									<v-progress-circular indeterminate color="primary" />
								</div>
							</template>
							<RoomMap
								:lat="27.717245"
								:lng="85.323959"
								:zoom="15"
							/>
						</ClientOnly>
					</v-card>
					<p>{{ room.address }}, {{ room.district.name }}, {{ room.district.province.name }}</p>
				</div>
				<v-btn block variant="outlined">
					Ask a question
				</v-btn>
				<v-divider class="mt-4" />
				<v-btn variant="text" prepend-icon="mdi-flag">
					Report this listing
				</v-btn>
			</div>
		</div>
		<div class="room--description">
			<h2>About {{ room.name }}</h2>
			<p>{{ room.description }}</p>

			<h2>Features</h2>
			<v-list class="room--description--features">
				<v-list-item prepend-icon="mdi-account-group">
					<v-list-item-title>Max Occupancy</v-list-item-title>
					<v-list-item-subtitle>{{ room.max_occupancy }}</v-list-item-subtitle>
				</v-list-item>
				<v-list-item prepend-icon="mdi-home-city">
					<v-list-item-title>Rental Type</v-list-item-title>
					<v-list-item-subtitle>{{ room.rental_type }}</v-list-item-subtitle>
				</v-list-item>
				<v-list-item prepend-icon="mdi-weather-sunny">
					<v-list-item-title>Natural Light</v-list-item-title>
					<v-list-item-subtitle>{{ room.natural_light }}</v-list-item-subtitle>
				</v-list-item>
				<v-list-item prepend-icon="mdi-cash">
					<v-list-item-title>Security Deposit</v-list-item-title>
					<v-list-item-subtitle>
						{{
							room.security_deposit ? "Rs." + room.security_deposit : "No"
						}}
					</v-list-item-subtitle>
				</v-list-item>
				<v-list-item prepend-icon="mdi-cash">
					<v-list-item-title>Is Rent Negotiable?</v-list-item-title>
					<v-list-item-subtitle>{{ room.is_negotiable ? "Yes" : "No" }}</v-list-item-subtitle>
				</v-list-item>
				<v-list-item prepend-icon="mdi-water">
					<v-list-item-title>Water Supply</v-list-item-title>
					<v-list-item-subtitle>{{ room.water_supply }}</v-list-item-subtitle>
				</v-list-item>
				<v-list-item prepend-icon="mdi-clock">
					<v-list-item-title>Minimum Stay</v-list-item-title>
					<v-list-item-subtitle>{{ room.minimum_stay }}</v-list-item-subtitle>
				</v-list-item>
				<v-list-item prepend-icon="mdi-sofa">
					<v-list-item-title>Is Furnished</v-list-item-title>
					<v-list-item-subtitle>{{ room.is_furnished ? "Yes" : "No" }}</v-list-item-subtitle>
					<v-list-item-subtitle v-if="room.is_furnished">
						{{ room.available_furnishings.join(", ") }}
					</v-list-item-subtitle>
				</v-list-item>
			</v-list>
		</div>
		<div class="room--amenities">
			<h2>Amenities for {{ room.name }}</h2>
			<h3>InHouse Amenities</h3>
			<div class="room--amenities--inside">
				<div class="room--amenities--item">
					<v-icon>mdi-air-conditioner</v-icon>
					<p>Air Conditioner</p>
				</div>
				<div class="room--amenities--item">
					<v-icon>mdi-wifi</v-icon>
					<p>Wifi</p>
				</div>
				<div class="room--amenities--item">
					<v-icon>mdi-shower</v-icon>
					<p>Hot Water</p>
				</div>
				<div class="room--amenities--item">
					<v-icon>mdi-car</v-icon>
					<p>Parking</p>
				</div>
				<div class="room--amenities--item">
					<v-icon>mdi-clock</v-icon>
					<p>24 Hour Security</p>
				</div>
				<div class="room--amenities--item">
					<v-icon>mdi-television</v-icon>
					<p>TV</p>
				</div>
				<div class="room--amenities--item">
					<v-icon>mdi-washing-machine</v-icon>
					<p>Laundry</p>
				</div>
				<div class="room--amenities--item">
					<v-icon>mdi-spray-bottle</v-icon>
					<p>Room Cleaning</p>
				</div>
				<div class="room--amenities--item">
					<v-icon>mdi-flash</v-icon>
					<p>Electricity Backup</p>
				</div>
			</div>
			<h3>Building Amenities</h3>
			<div class="room--amenities--outside">
				<div class="room--amenities--item">
					<v-icon>mdi-food-steak</v-icon>
					<p>BBQ Grills and Dining Tables</p>
				</div>
				<div class="room--amenities--item">
					<v-icon>mdi-cat</v-icon>
					<p>Cats OK</p>
				</div>
				<div class="room--amenities--item">
					<v-icon>mdi-account-tie</v-icon>
					<p>Concierge Service</p>
				</div>
				<div class="room--amenities--item">
					<v-icon>mdi-dog</v-icon>
					<p>Dogs OK</p>
				</div>
				<div class="room--amenities--item">
					<v-icon>mdi-door</v-icon>
					<p>Door Attendant</p>
				</div>
				<div class="room--amenities--item">
					<v-icon>mdi-elevator</v-icon>
					<p>Elevator</p>
				</div>
				<div class="room--amenities--item">
					<v-icon>mdi-dumbbell</v-icon>
					<p>Fitness Center</p>
				</div>
				<div class="room--amenities--item">
					<v-icon>mdi-garage</v-icon>
					<p>Garage Parking</p>
				</div>
				<div class="room--amenities--item">
					<v-icon>mdi-flower</v-icon>
					<p>Garden</p>
				</div>
				<div class="room--amenities--item">
					<v-icon>mdi-account-multiple</v-icon>
					<p>Multi-use Room</p>
				</div>
				<div class="room--amenities--item">
					<v-icon>mdi-account-cog</v-icon>
					<p>On-Site Maintenance</p>
				</div>
				<div class="room--amenities--item">
					<v-icon>mdi-store</v-icon>
					<p>Onsite Brooklyn Harvest Supermarket</p>
				</div>
				<div class="room--amenities--item">
					<v-icon>mdi-account-cog</v-icon>
					<p>Onsite Management</p>
				</div>
				<div class="room--amenities--item">
					<v-icon>mdi-umbrella</v-icon>
					<p>Outdoor Space</p>
				</div>
				<div class="room--amenities--item">
					<v-icon>mdi-package-variant</v-icon>
					<p>Package Service</p>
				</div>
				<div class="room--amenities--item">
					<v-icon>mdi-account-group</v-icon>
					<p>Residents Lounge</p>
				</div>
				<div class="room--amenities--item">
					<v-icon>mdi-sprout</v-icon>
					<p>Roof Deck or Sun Deck</p>
				</div>
				<div class="room--amenities--item">
					<v-icon>mdi-umbrella</v-icon>
					<p>Two Outdoor Terraces and Sun Lounge</p>
				</div>
			</div>
		</div>
		<div class="room--rules">
			<h2>Building Details</h2>

			<v-list class="d-flex align-center">
				<v-list-item>
					<v-list-item-title>Year Built</v-list-item-title>
					<v-list-item-subtitle>{{ room.building_details.year_built }}</v-list-item-subtitle>
				</v-list-item>
				<v-list-item>
					<v-list-item-title>Building Type</v-list-item-title>
					<v-list-item-subtitle>{{ room.building_details.type }}</v-list-item-subtitle>
				</v-list-item>
				<v-list-item>
					<v-list-item-title>Stories</v-list-item-title>
					<v-list-item-subtitle>{{ room.building_details.stories }}</v-list-item-subtitle>
				</v-list-item>
			</v-list>

			<h2>Rules and Policies</h2>
			<v-list>
				<v-list-item
					v-for="rule in room.rules" :key="rule.title"
					prepend-icon="mdi-circle-medium"
				>
					<v-list-item-content>
						<v-list-item-title>{{ rule.title }}</v-list-item-title>
						<v-list-item-subtitle>{{ rule.content }}</v-list-item-subtitle>
					</v-list-item-content>
				</v-list-item>
			</v-list>
			<h2>Restrictions</h2>
			<v-chip-group>
				<v-chip
					label size="small"
					:disabled="!room.restrictions.no_smoking"
				>
					No Smoking
				</v-chip>
				<v-chip
					label size="small"
					:disabled="!room.restrictions.only_couples"
				>
					Only Couples
				</v-chip>
				<v-chip
					label size="small"
					:disabled="!room.restrictions.only_vegan"
				>
					Only Vegan
				</v-chip>
				<v-chip
					label size="small"
					:disabled="!room.restrictions.pets_allowed.dogs"
				>
					Dogs Allowed
				</v-chip>
				<v-chip
					label size="small"
					:disabled="!room.restrictions.pets_allowed.cats"
				>
					Cats Allowed
				</v-chip>
				<v-chip label size="small">
					Age Restriction: {{ room.restrictions.age_restriction }}+
				</v-chip>
			</v-chip-group>
		</div>
		<div class="room--neighborhood">
			<h2>Neighborhood</h2>
			<v-list class="room--neighborhood--list">
				<v-list-item prepend-icon="mdi-eye">
					<v-list-item-title>View from Accommodation</v-list-item-title>
					<v-list-item-subtitle>{{ room.neighborhood.view_from_accommodation }}</v-list-item-subtitle>
				</v-list-item>
				<v-list-item prepend-icon="mdi-map-marker-distance">
					<v-list-item-title>Nearby Points of Interest</v-list-item-title>
					<v-list-item-subtitle class="no-ellipsis">
						<v-list density="compact">
							<v-list-item
								v-for="point in room.neighborhood.nearby_points_of_interest"
								:key="point" prepend-icon="mdi-circle-medium"
							>
								<v-list-item-title class="no-ellipsis">
									{{ point }}
								</v-list-item-title>
							</v-list-item>
						</v-list>
					</v-list-item-subtitle>
				</v-list-item>
				<v-list-item prepend-icon="mdi-bus">
					<v-list-item-title>Proximity to Public Transport</v-list-item-title>
					<v-list-item-subtitle>{{ room.neighborhood.proximity_to_public_transport }}</v-list-item-subtitle>
				</v-list-item>
				<v-list-item prepend-icon="mdi-volume-high">
					<v-list-item-title>Noise Level</v-list-item-title>
					<v-list-item-subtitle>{{ room.neighborhood.noise_level }}</v-list-item-subtitle>
				</v-list-item>
			</v-list>
		</div>
		<div class="room--reviews">
			<h2>Reviews</h2>

			<v-textarea
				v-model="review.comment"
				label="Write a review"
				hide-details
				solo
				rows="3"
				class="room--reviews--textarea"
			/>

			<v-list>
				<v-list-item
					v-for="rev in room.reviews" :key="rev.created_at"
					lines="three"
				>
					<template #prepend>
						<v-avatar size="40" color="primary">
							<v-img v-if="rev.created_by.avatar" :src="rev.created_by.avatar" />
							<span v-else class="room--reviews--av-text">{{ rev.created_by.name[0] }}</span>
						</v-avatar>
					</template>
					<v-list-item-title class="room--reviews--title">
						{{ rev.created_by.name }}
						<v-spacer />
						<v-chip
							label prepend-icon="mdi-clock-plus"
							size="x-small" class="room--reviews--timestamp"
						>
							{{ $fromNow(rev.created_at) }}
						</v-chip>
					</v-list-item-title>
					<v-rating
						v-model="rev.rating" readonly
						density="compact"
					/>
					<v-list-item-subtitle>{{ rev.comment }}</v-list-item-subtitle>
				</v-list-item>
			</v-list>
		</div>
		<div class="room--similar">
			<h2>Similar Properties</h2>
			<div class="room--similar--list">
				<AccommodationCard
					v-for="i in 4"
					:key="i"
				/>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const review = ref({
	comment: "",
	post_anonymously: false,
	medias: [],
	rating: 0,
})
const room = {
	id: 1,
	name: "Cozy Room with a View",
	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget lacinia aliquam, nisl" +
		" nisl aliquet nisl, vitae aliquam nisl nisl vitae nisl." +
		" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget lacinia aliquam, nisl" +
		" nisl aliquet nisl, vitae aliquam nisl nisl vitae nisl." +
		" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget lacinia aliquam, nisl" +
		" nisl aliquet nisl, vitae aliquam nisl nisl vitae nisl.",
	created_at: "2021-08-01 12:00:00",
	address: "Ganesh Marg, 5, Maitidevi",

	max_occupancy: 2,
	rental_type: "Monthly",
	natural_light: "Some Natural Light",
	security_deposit: null,
	is_negotiable: true,
	water_supply: "24 Hours",
	minimum_stay: "1 Month",
	is_furnished: true,
	available_furnishings: [
		"Bed",
		"Chair",
		"Table",
	],

	district: {
		name: "Kathmandu",
		province: {
			name: "Bagmati",
		}
	},
	rating: 4.5,
	dimension: "15X12",
	beds: 2,
	baths: 1,
	medias: [
		{id: 1, url: "https://picsum.photos/seed/122/1024/768"},
		{id: 2, url: "https://picsum.photos/seed/222/1024/768"},
		{id: 3, url: "https://picsum.photos/seed/322/1024/768"},
		{id: 4, url: "https://picsum.photos/seed/422/1024/768"},
		{id: 5, url: "https://picsum.photos/seed/522/1024/768"},
		{id: 6, url: "https://picsum.photos/seed/622/1024/768"},
		{id: 7, url: "https://picsum.photos/seed/722/1024/768"},
	],
	primary_contact: "	9841234567",
	secondary_contact: "9841234568",
	rules: [
		{
			title: "Home by 10pm",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget lacinia aliquam, nisl" +
				" nisl aliquet nisl, vitae aliquam nisl nisl vitae nisl."
		},
		{
			title: "No Parties",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget lacinia aliquam, nisl" +
				" nisl aliquet nisl, vitae aliquam nisl nisl vitae nisl."
		},
		{
			title: "No Drugs",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget lacinia aliquam, nisl" +
				" nisl aliquet nisl, vitae aliquam nisl nisl vitae nisl."
		},
		{
			title: "No Loud Music",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget lacinia aliquam, nisl" +
				" nisl aliquet nisl, vitae aliquam nisl nisl vitae nisl."
		},
	],
	restrictions: {
		pets_allowed: {
			dogs: false,
			cats: false,
		},
		no_smoking: false,
		only_couples: false,
		only_vegan: false,
		age_restriction: 18
	},
	reviews: [
		{
			comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget lacinia aliquam, nisl" +
				" nisl aliquet nisl, vitae aliquam nisl nisl vitae nisl.",
			post_anonymously: false,
			medias: [],
			rating: 4.5,
			created_at: "2021-08-01 12:00:00",
			created_by: {
				name: "John Doe",
				avatar: "https://picsum.photos/seed/122/200/200",
			}
		},
		{
			comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget lacinia aliquam, nisl" +
				" nisl aliquet nisl, vitae aliquam nisl nisl vitae nisl.",
			post_anonymously: false,
			medias: [],
			rating: 4.5,
			created_at: "2021-08-01 12:00:00",
			created_by: {
				name: "Kim Jong Un",
				avatar: null
			}
		},
		{
			comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget lacinia aliquam, nisl" +
				" nisl aliquet nisl, vitae aliquam nisl nisl vitae nisl.",
			post_anonymously: false,
			medias: [],
			rating: 4.5,
			created_at: "2021-08-01 12:00:00",
			created_by: {
				name: "Summer Smith",
				avatar: "https://picsum.photos/seed/122/200/200",
			}
		},
		{
			comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget lacinia aliquam, nisl" +
				" nisl aliquet nisl, vitae aliquam nisl nisl vitae nisl.",
			post_anonymously: false,
			medias: [],
			rating: 4.5,
			created_at: "2021-08-01 12:00:00",
			created_by: {
				name: "Evan You",
				avatar: "https://picsum.photos/seed/192/200/200",
			}
		},
		{
			comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget lacinia aliquam, nisl" +
				" nisl aliquet nisl, vitae aliquam nisl nisl vitae nisl.",
			post_anonymously: false,
			medias: [],
			rating: 4.5,
			created_at: "2021-08-01 12:00:00",
			created_by: {
				name: "Patric Jane",
				avatar: "https://picsum.photos/seed/22/200/200",
			}
		}
	],
	building_details: {
		year_built: 2010,
		type: "Apartment",
		stories: 5,
	},
	neighborhood: {
		view_from_accommodation: "Beautiful view of the city",
		nearby_points_of_interest: [
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget lacinia aliquam, nisl" +
			" nisl aliquet nisl, vitae aliquam nisl nisl vitae nisl.",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget lacinia aliquam, nisl" +
			" nisl aliquet nisl, vitae aliquam nisl nisl vitae nisl.",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget lacinia aliquam, nisl" +
			" nisl aliquet nisl, vitae aliquam nisl nisl vitae nisl.",
		],
		proximity_to_public_transport: "2 KM from the nearest bus stop",
		noise_level: "Low",
	}
}
</script>
<style lang="scss">
@import "styles/room.scss";
</style>
