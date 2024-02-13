<template>
	<div class="location-information">
		<h2 id="location-information">
			Location Information
		</h2>
		<v-text-field
			v-model="payload.address" density="compact"
			hide-details="auto"
			prepend-inner-icon="mdi-home-map-marker"
			label="Address" clearable
			placeholder="Enter the address of the property"
		/>
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

				Or, you can always go the the <a
					href="maps.google.com" target="_blank"
					title="Google Maps"
				>Google Maps</a>
				and find the lat/lang of the property.
				Here is a <a
					href="https://www.youtube.com/watch?v=vkrg4rqKfVU&ab_channel=TechRelatedTips" title="video"
					target="_blank"
				>video</a> to help you find the lat/lang of the location on Google Maps.
			</p>
			<v-card height="300">
				<div id="ad-form--map" />
			</v-card>
		</ClientOnly>
	</div>
</template>
<script setup lang="ts">
const props = defineProps<{
	modelValue: IPropertyLocationInformation,
	isFlatBeingCreated?: boolean,
}>()

defineEmits(["update:modelValue"])

const payload = ref<IPropertyLocationInformation>(props.modelValue)

watch(() => payload.value, (newVal) => {
	emit("update:modelValue", newVal)
})

const cityOptions = []
const districtOptions = []
const provinceOptions = []

const tile = {
	url: "https://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}",
	attribution: "Google",
	layerType: "base",
	name: "OpenStreetMap",
	subDomains: ["mt0", "mt1", "mt2", "mt3"]
}

onMounted(async () => {
	const L = (await import("leaflet"))?.default
	if (!L) {
		console.error("Leaflet not found.")
	}
	const map = L.map("ad-form--map").setView([27.700769, 85.300140], 12)
	L.tileLayer(tile.url, {
		attribution: tile.attribution,
		layerType: tile.layerType,
		name: tile.name,
		subdomains: tile.subDomains
	}).addTo(map)
	map.on("click", function (e) {
		payload.value.latitude = e.latlng.lat
		payload.value.longitude = e.latlng.lng
		map.eachLayer(function (layer) {
			if (
				layer._icon && layer._icon.classList.contains("leaflet-marker-icon")
			) {
				map.removeLayer(layer)
			}
		})
		L.marker([e.latlng.lat, e.latlng.lng]).addTo(map)
	})
	L.tileLayer(tile.url, {
		attribution: tile.attribution,
		layerType: tile.layerType,
		name: tile.name,
		subdomains: tile.subDomains
	}).addTo(map)
})
</script>
