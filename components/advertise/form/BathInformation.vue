<template>
	<div class="bath-information">
		<h2 id="bathroom">
			Bathroom
		</h2>
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
				append-icon="mdi-shower"
			/>
			<v-checkbox
				v-model="payload.with_bathtub" density="compact"
				hide-details="auto" label="Bathtub"
				append-icon="mdi-bathtub"
			/>
			<v-checkbox
				v-model="payload.hot_water" density="compact"
				hide-details="auto" label="Hot Water"
				append-icon="mdi-water-boiler"
			/>
		</div>
	</div>
</template>
<script setup lang="ts">
const bathroomTypeOptions = [
	{id: 1, title: "Attached"},
	{id: 2, title: "Shared"},
	{id: 2, title: "Private"},
]
const props = defineProps<{
	modelValue: IPropertyBathInformation,
	isFlatBeingCreated?: boolean,
}>()

defineEmits(["update:modelValue"])

const payload = ref<IPropertyBathInformation>(props.modelValue)

watch(() => payload.value, (newVal) => {
	emit("update:modelValue", newVal)
})
</script>
