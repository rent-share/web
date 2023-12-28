<template>
	<div id="map" />
</template>
<script setup lang="ts">
import "leaflet/dist/leaflet.css"
const zoom = ref(12)
const center = ref([27.700769, 85.300140])
const map = ref<LMap | null>(null)
const tile = {
	url: "https://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}",
	attribution: "Google",
	layerType: "base",
	name: "OpenStreetMap",
	subDomains: ["mt0","mt1","mt2","mt3"]
}

onMounted(async () => {
	const L = (await import("leaflet")).default
	map.value = L.map("map").setView(center.value, zoom.value)
	L.tileLayer(tile.url, {
		attribution: tile.attribution,
		layerType: tile.layerType,
		name: tile.name,
		subdomains: tile.subDomains
	}).addTo(map.value)
})
</script>
