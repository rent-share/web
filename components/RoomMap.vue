<template>
	<div id="room-map" />
</template>
<script setup lang="ts">
import "leaflet/dist/leaflet.css"

const props = defineProps<{
	lat: number;
	lng: number;
	zoom: number;
}>()

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
	map.value = L.map("room-map").setView([props.lat, props.lng], props.zoom)
	L.tileLayer(tile.url, {
		attribution: tile.attribution,
		layerType: tile.layerType,
		name: tile.name,
		subdomains: tile.subDomains
	}).addTo(map.value)
	L.marker([props.lat, props.lng]).addTo(map.value)
})
</script>
<style lang="scss">
#room-map {
	height: 100%;
	width: 100%;
}
</style>
