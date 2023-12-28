<template>
	<div class="ad-form">
		<div class="ad-form--headline">
			<h1>Create a new advertisement</h1>
			<v-divider class="mb-4"/>
		</div>
		<div class="ad-form--container">
			<div class="ad-form--form">
				<h2>
					What do you want to advertise?
				</h2>
				<p>Choose one of the following options to start advertising.</p>
				<v-select
					v-model="selectedPropertyType" density="compact"
					hide-details="auto"
					label="Property Type"
					:items="propertyTypes"
					prepend-inner-icon="mdi-home-group"
				/>

				<h2 id="basic-information">
					Basic Information
				</h2>
				<v-text-field
					v-model="payload.name" density="compact"
					hide-details="auto"
					label="Property Name" clearable
					placeholder="Provide an attractive marketing name for the property"
					prepend-inner-icon="mdi-home-city"
				/>
				<v-textarea
					v-model="payload.description" density="compact"
					hide-details="auto"
					label="Property Description" clearable
					prepend-inner-icon="mdi-text-box"
					placeholder="Enter specific description you like to share about the property."
				/>

				<div class="list">
					<v-text-field
						v-model="payload.rent_price" density="compact"
						hide-details="auto"
						type="number" prepend-inner-icon="mdi-currency-inr"
						label="Rent Price" clearable
						placeholder="Enter the rent price for the property"
					/>
					<v-checkbox
						v-model="payload.is_negotiable" density="compact"
						hide-details="auto"
						label="Negotiable?"
					/>
				</div>

				<v-text-field
					v-model="payload.max_occupancy" density="compact"
					hide-details="auto"
					type="number" prepend-inner-icon="mdi-account-group"
					label="Maximum Occupancy" clearable
					placeholder="Enter the maximum number of people allowed for the property"
				/>

				<v-text-field
					v-model="payload.square_footage" density="compact"
					hide-details="auto"
					label="Area (Sq.Ft)" clearable
					prepend-inner-icon="mdi-texture-box"
					placeholder="Enter the dimension of the property. Should be in format: lengthXbreadth. Eg: 10X12"
				/>
				<v-select
					v-model="payload.natural_light" density="compact"
					hide-details="auto"
					:items="lightChoices"
					label="Natural Light Frequency"
					prepend-inner-icon="mdi-weather-sunny"
				/>

				<v-text-field
					v-model="payload.security_deposit" density="compact"
					hide-details="auto"
					type="number" prepend-inner-icon="mdi-currency-inr"
					label="Security Deposit" clearable
					placeholder="Enter amount of security to be deposited before renting the property"
				/>

				<v-select
					v-model="payload.water_supply" density="compact"
					hide-details="auto"
					:items="waterSupplyChoices"
					label="Water Supply Frequency"
					prepend-inner-icon="mdi-water"
				/>

				<v-text-field
					v-model="payload.minimum_stay" density="compact"
					hide-details="auto"
					label="Minimum Stay Duration" clearable
					type="number" prepend-inner-icon="mdi-clock-time-four-outline"
					placeholder="Enter the minimum duration of time that the tenant should stay"
				/>

				<div>
					<v-checkbox
						v-model="payload.is_furnished" density="compact"
						hide-details="auto"
						label="Furnished?"
						prepend-icon="mdi-chair-school"
					/>
					<v-text-field
						v-if="payload.is_furnished" v-model="payload.available_furnishings"
						density="compact"
						hide-details="auto"
						prepend-inner-icon="mdi-chair-school"
						label="Available Furnishings" clearable
						placeholder="Enter a list-wise detail of the available furnishings."
					/>
				</div>

				<h2 id="owner-information">Owner Information</h2>
				<v-checkbox
					v-model="payload.my_own_asset" density="compact"
					hide-details="auto"
					label="Do you own this property"
					prepend-icon="mdi-account"
				/>
				<v-text-field
					v-if="!payload.my_own_asset" v-model="payload.owner_full_name"
					clearable density="compact"
					hide-details="auto"
					prepend-inner-icon="mdi-account"
					label="Full Name" placeholder="Enter full name of the owner"
				/>
				<v-text-field
					v-if="!payload.my_own_asset" v-model="payload.owner_contact_number"
					clearable density="compact"
					hide-details="auto"
					prepend-inner-icon="mdi-phone"
					label="Contact Number" placeholder="Enter contact number of the owner"
				/>

				<h2 id="location-information">Location Information</h2>
				<v-text-field
					v-model="payload.address" density="compact"
					hide-details="auto"
					prepend-inner-icon="mdi-home-map-marker"
					label="Address" clearable
					placeholder="Enter the address of the property"
				/>
				<!--				province, district, city select -->
				<v-autocomplete
					v-model="payload.province" density="compact"
					hide-details="auto"
					label="Province"
					prepend-inner-icon="mdi-map-legend"
					:items="provinceOptions"
				/>
				<v-autocomplete
					v-model="payload.district" density="compact"
					hide-details="auto"
					label="District"
					prepend-inner-icon="mdi-map-marker-circle"
					:items="districtOptions"
				/>
				<v-autocomplete
					v-model="payload.city" density="compact"
					hide-details="auto"
					label="City"
					prepend-inner-icon="mdi-map-marker"
					:items="cityOptions"
				/>

				<!--				lat, lang-->
				<div class="list">
					<v-text-field
						v-model="payload.latitude" density="compact"
						hide-details="auto"
						prepend-inner-icon="mdi-map-marker-radius"
						label="Latitude" clearable
						placeholder="Enter the latitude of the property"
					/>
					<v-text-field
						v-model="payload.longitude" density="compact"
						hide-details="auto"
						prepend-inner-icon="mdi-map-marker-radius"
						label="Longitude" clearable
						placeholder="Enter the longitude of the property"
					/>
				</div>

				<ClientOnly>
					<p id="ad-form--map--help">
						<v-icon>mdi-help</v-icon>
						Click on the map to select the location (lat/lang) of the property.
						As you click on the map, the lat/lang will be automatically updated.

						Or, you can always go the the <a href="maps.google.com" target="_blank" title="Google Maps">Google Maps</a>
						and find the lat/lang of the property.
						Here is a <a href="https://www.youtube.com/watch?v=vkrg4rqKfVU&ab_channel=TechRelatedTips" title="video"
												target="_blank">video</a> to help you find the lat/lang of the location on Google Maps.
					</p>
					<v-card height="300">
						<div id="ad-form--map"></div>
					</v-card>
				</ClientOnly>


				<h2 id="amenities">Amenities</h2>
				<h3>Internal Amenities</h3>

				<div class="list">
					<v-checkbox
						v-model="payload.tv" density="compact"
						hide-details="auto"
						label="TV"
						prepend-icon="mdi-television-classic"
					/>
					<v-checkbox
						v-model="payload.internet" density="compact"
						hide-details="auto" label="Internet"
						prepend-icon="mdi-wifi"
					/>
					<v-checkbox
						v-model="payload.air_conditioning" density="compact"
						hide-details="auto" label="Air Conditioning"
						prepend-icon="mdi-air-conditioner"
					/>
					<v-checkbox
						v-model="payload.laundry" density="compact"
						hide-details="auto" label="Laundry"
						prepend-icon="mdi-washing-machine"
					/>
					<v-checkbox
						v-model="payload.room_cleaning" density="compact"
						hide-details="auto" label="Room Cleaning"
						prepend-icon="mdi-broom"
					/>
					<v-checkbox
						v-model="payload.electricity_backup" density="compact"
						hide-details="auto"
						label="Electricity Backup"
						prepend-icon="mdi-flash"
					/>
				</div>

				<h3>External Amenities</h3>
				<div class="list">
					<v-checkbox
						v-model="payload.with_garden" density="compact"
						hide-details="auto" label="Garden"
						prepend-icon="mdi-flower-tulip-outline"
					/>
					<v-checkbox
						v-model="payload.with_balcony" density="compact"
						hide-details="auto" label="Balcony"
						prepend-icon="mdi-balcony"
					/>
					<v-checkbox
						v-model="payload.with_rooftop_deck" density="compact"
						hide-details="auto" label="Rooftop Deck"
						prepend-icon="mdi-weather-sunny-alert"
					/>
					<v-checkbox
						v-model="payload.with_pool" density="compact"
						hide-details="auto" label="Pool"
						prepend-icon="mdi-pool"
					/>
					<v-checkbox
						v-model="payload.with_gym" density="compact"
						hide-details="auto" label="Gym"
						prepend-icon="mdi-dumbbell"
					/>
					<v-checkbox
						v-model="payload.with_fireplace" density="compact"
						hide-details="auto" label="Fireplace"
						prepend-icon="mdi-fireplace"
					/>
				</div>

				<v-select
					v-model="payload.parking_facility" density="compact"
					hide-details="auto"
					label="Parking Facility"
					:items="parkingOptions"
					prepend-inner-icon="mdi-car"
				/>

				<h2 id="bathroom">Bathroom</h2>

				<v-select
					v-model="payload.bathroom_type" density="compact"
					hide-details="auto"
					label="Type of Washroom"
					:items="bathroomTypeOptions"
					prepend-inner-icon="mdi-toilet"
				/>

				<div class="list">
					<v-checkbox
						v-model="payload.with_shower" density="compact"
						hide-details="auto" label="Shower"
						prepend-icon="mdi-shower"
					/>
					<v-checkbox
						v-model="payload.with_bathtub" density="compact"
						hide-details="auto" label="Bathtub"
						prepend-icon="mdi-bathtub"
					/>
					<v-checkbox
						v-model="payload.hot_water" density="compact"
						hide-details="auto" label="HotWater"
						prepend-icon="mdi-water-boiler"
					/>
				</div>

				<h2 id="accessibility">Accessibility</h2>
				<div class="list">
					<v-checkbox
						v-model="payload.wheelchair_accessible" density="compact"
						hide-details="auto"
						label="WheelChair Accessible"
						prepend-icon="mdi-wheelchair-accessibility"
					/>
					<v-checkbox
						v-model="payload.elevator_access" density="compact"
						hide-details="auto" label="Elevator Access"
						prepend-icon="mdi-elevator"
					/>
				</div>

				<h2 id="restrictions">Restrictions</h2>

				<div class="list">
					<v-checkbox
						v-model="payload.pets_allowed" density="compact"
						hide-details="auto" label="Pets Allowed?"
						prepend-icon="mdi-dog-side"
					/>
					<v-checkbox
						v-model="payload.no_smoking" density="compact"
						hide-details="auto" label="No Smoking"
						prepend-icon="mdi-smoking-off"
					/>
					<v-checkbox
						v-model="payload.only_couples" density="compact"
						hide-details="auto" label="Only Family"
						prepend-icon="mdi-human-male-female-child"
					/>
					<v-checkbox
						v-model="payload.only_couples" density="compact"
						hide-details="auto" label="Only Girls"
						prepend-icon="mdi-human-female-female"
					/>
					<v-checkbox
						v-model="payload.only_vegan" density="compact"
						hide-details="auto" label="Only Vegetarians"
						prepend-icon="mdi-food-apple-outline"
					/>
				</div>

				<v-text-field
					v-model="payload.age_restriction" density="compact"
					hide-details="auto"
					label="Age Restriction"
					type="number" clearable
					prepend-inner-icon="mdi-human-child"
					placeholder="Enter the minimum number of age of the tenant you want in your property"
				/>

				<h2 id="security">Security</h2>
				<div class="list">
					<v-checkbox
						v-model="payload.security_guard" density="compact"
						hide-details="auto" label="Security Guard"
						prepend-icon="mdi-security"
					/>
					<v-checkbox
						v-model="payload.cctv" density="compact"
						hide-details="auto" label="CCTV"
						prepend-icon="mdi-cctv"
					/>
					<v-checkbox
						v-model="payload.fire_alarm" density="compact"
						hide-details="auto" label="Fire Alarm"
						prepend-icon="mdi-fire-alert"
					/>
					<v-checkbox
						v-model="payload.fire_extinguisher" density="compact"
						hide-details="auto" label="Fire Extinguisher"
						prepend-icon="mdi-fire-extinguisher"
					/>
				</div>
				<v-text-field
					v-model="payload.insurance_details" density="compact"
					hide-details="auto"
					prepend-inner-icon="mdi-shield-account"
					label="Insurance Details" clearable
					placeholder="Enter the insurance details of the property"
				/>

				<h2 id="neighborhood">Neighborhood</h2>
				<v-text-field
					v-model="payload.proximity_to_public_transport" density="compact"
					hide-details="auto" prepend-inner-icon="mdi-bus-clock"
					label="Proximity to the Public Transport" clearable
					placeholder="Enter the distance of the property from the public transport"
				/>
				<v-select
					v-model="payload.noise_level" density="compact"
					hide-details="auto"
					label="Noise Level"
					:items="noiseLevelOptions"
					prepend-inner-icon="mdi-volume-high"
				/>
				<v-textarea
					v-model="payload.view_from_accommodation" density="compact"
					hide-details="auto" prepend-inner-icon="mdi-eye"
					label="View from the property" clearable
					placeholder="Provide a generic information about the view that can be seen from the property"
				/>
				<v-textarea
					v-model="payload.nearby_points_of_interest" density="compact"
					hide-details="auto" prepend-inner-icon="mdi-map-marker"
					label="Nearby Points of Interest" clearable
					placeholder="Provide a list-wise information about the nearby points of interest"
				/>
			</div>
			<div class="ad-form--nav">
				<div class="ad-form--nav--container">
					<v-card>
						<v-card-text>
							<v-chip label size="large" @click="scrollTo">Basic Information</v-chip>
							<v-chip label size="large" @click="scrollTo">Owner Information</v-chip>
							<v-chip label size="large" @click="scrollTo">Location Information</v-chip>
							<v-chip label size="large" @click="scrollTo">Amenities</v-chip>
							<v-chip label size="large" @click="scrollTo">Bathroom</v-chip>
							<v-chip label size="large" @click="scrollTo">Accessibility</v-chip>
							<v-chip label size="large" @click="scrollTo">Restrictions</v-chip>
							<v-chip label size="large" @click="scrollTo">Security</v-chip>
							<v-chip label size="large" @click="scrollTo">Neighborhood</v-chip>
						</v-card-text>
					</v-card>
					<div class="ad-form--actions">
						<v-btn color="error" large>Reset</v-btn>
						<v-btn color="primary" large>Submit</v-btn>
					</div>
				</div>
			</div>
		</div>
		<div class="ad-form--footnote">
			<p>
				By clicking on the "Submit" button, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy
				Policy</a>.
			</p>
		</div>
		<div class="ad-form--actions main-actions">
			<v-btn color="error" large>Reset</v-btn>
			<v-btn color="primary" large>Submit</v-btn>
		</div>
	</div>
</template>
<script setup lang="ts">
const propertyTypes = [
	"Room",
	"Flat",
	"House",
	"Vehicle",
]
const lightChoices = [
	{id: 1, title: "No Natural Light"},
	{id: 2, title: "Little Natural Light"},
	{id: 3, title: "Some Natural Light"},
	{id: 4, title: "Lots of Natural Light"},
	{id: 5, title: "Tons of Natural Light"},
]

const waterSupplyChoices = [
	{id: 1, title: "24/7"},
	{id: 2, title: "12/7"},
	{id: 3, title: "8/7"},
	{id: 4, title: "4/7"},
	{id: 5, title: "No Water Supply"},
]

const parkingOptions = [
	{id: 1, title: "Two Wheeler"},
	{id: 2, title: "Four Wheeler"},
	{id: 3, title: "Both"},
	{id: 4, title: "None"},
]

const bathroomTypeOptions = [
	{id: 1, title: "Attached"},
	{id: 2, title: "Shared"},
	{id: 2, title: "Private"},
]
const noiseLevelOptions = [
	{id: 1, title: "Very Quiet"},
	{id: 2, title: "Quiet"},
	{id: 3, title: "Moderate"},
	{id: 4, title: "Loud"},
	{id: 5, title: "Very Loud"},
]

const cityOptions = []
const districtOptions = []
const provinceOptions = []

const selectedPropertyType = ref("Room")
const payload = ref({})

const scrollTo = (e: MouseEvent) => {
	let target = e.target as HTMLElement
	if (!target.classList.contains("v-chip__content")) {
		target = target.querySelector(".v-chip__content") as HTMLElement
	}
	const navTitle = target.innerText
	const element = document.getElementById(navTitle.replace(/\s/g, "-").toLowerCase()) as HTMLElement

	const offset = 100
	const bodyRect = document.body.getBoundingClientRect().top
	const elementRect = element.getBoundingClientRect().top
	const elementPosition = elementRect - bodyRect
	const offsetPosition = elementPosition - offset

	window.scrollTo({
		top: offsetPosition,
		behavior: "smooth",
	})
}

import "leaflet/dist/leaflet.css"

const tile = {
	url: "https://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}",
	attribution: "Google",
	layerType: "base",
	name: "OpenStreetMap",
	subDomains: ["mt0", "mt1", "mt2", "mt3"]
}

onMounted(async () => {
	const L = (await import("leaflet")).default
	const map = L.map("ad-form--map").setView([27.700769, 85.300140], 12)
	L.tileLayer(tile.url, {
		attribution: tile.attribution,
		layerType: tile.layerType,
		name: tile.name,
		subdomains: tile.subDomains
	}).addTo(map)
	map.on('click', function (e) {
		payload.value.latitude = e.latlng.lat;
		payload.value.longitude = e.latlng.lng;
		map.eachLayer(function (layer) {
			if (
				layer._icon && layer._icon.classList.contains('leaflet-marker-icon')
			) {
				map.removeLayer(layer);
			}
		});
		L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
	});

	// add a scroll event listener,
	// when ".main-actions" is visible, hide ".ad-form--nav--container .ad-form--actions"
	// when ".main-actions" is not visible, show ".ad-form--nav--container .ad-form--actions"

	window.addEventListener("scroll", () => {
		const mainActions = document.querySelector(".main-actions") as HTMLElement
		const mainActionsRect = mainActions.getBoundingClientRect()
		const isMainActionsVisible = (
			mainActionsRect.top >= 0 &&
			mainActionsRect.left >= 0 &&
			mainActionsRect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
			mainActionsRect.right <= (window.innerWidth || document.documentElement.clientWidth)
		)
		const navAction = document.querySelector(".ad-form--nav--container .ad-form--actions") as HTMLElement
		if (isMainActionsVisible) {
			navAction.style.display = "none"
		} else {
			navAction.style.display = "flex"
		}


	})

})


</script>
<style lang="scss">
.ad-form {
	padding: 0 1rem 1rem 1rem;
	max-width: 1200px;
	margin: 0 auto;

	#ad-form--map {
		height: 100%;

		&--help {
			background: rgba(0, 0, 0, 0.1);
			margin-block: .5rem;
			border-radius: .5rem;
			padding: .5rem;
			font-size: .875rem;
			line-height: .875rem;
		}
	}

	h2 {
		margin-block: 1rem .5rem;
	}

	.list {
		display: flex;
		align-items: center;
		gap: 0;
		flex-wrap: wrap;
	}

	&--headline {
		position: sticky;
		top: 0;
		background-color: aliceblue;
		z-index: 1;
	}

	&--container {
		display: grid;
		grid-template-columns: 70% 30%;
	}

	&--nav {
		margin-left: 1rem;

		&--container {
			position: sticky;
			top: 4rem;
		}

		.v-card {
			margin-bottom: 1rem;

			.v-card-text {
				display: flex;
				flex-direction: column;
				gap: .5rem;

				.v-chip {
					font-weight: 500;
				}
			}
		}
	}

	.v-checkbox {
		border-bottom: 1px solid #929292;
		background: rgba(0, 0, 0, 0.04);

		&:hover {
			background: rgba(0, 0, 0, 0.09);
		}

		.v-input__prepend {
			margin-left: 1rem;
		}
	}

	&--footnote {
		padding-block: 3rem 1rem;
		font-size: .875rem;
		line-height: .875rem;
	}

	&--actions {
		display: flex;
		gap: 1rem;
	}
}
</style>
