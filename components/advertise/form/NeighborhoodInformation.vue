<template>
	<div>
		<h2 id="neighborhood">
			Neighborhood
		</h2>
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
</template>
<script setup lang="ts">
const noiseLevelOptions = [
	{id: 1, title: "Very Quiet"},
	{id: 2, title: "Quiet"},
	{id: 3, title: "Moderate"},
	{id: 4, title: "Loud"},
	{id: 5, title: "Very Loud"},
]

const props = defineProps<{
	modelValue: IPropertyNeighborhoodInformation,
	isFlatBeingCreated?: boolean,
}>()

defineEmits(["update:modelValue"])

const payload = ref<IPropertyNeighborhoodInformation>(props.modelValue)

watch(() => payload.value, (newVal) => {
	emit("update:modelValue", newVal)
})
</script>
