<template>
	<div>
		<h2 id="restrictions">
			Restrictions
		</h2>
		<div class="list">
			<v-checkbox
				v-model="payload.pets_allowed" density="compact"
				hide-details="auto" label="Pets Allowed?"
				append-icon="mdi-dog-side"
			/>
			<v-checkbox
				v-model="payload.no_smoking" density="compact"
				hide-details="auto" label="No Smoking"
				append-icon="mdi-smoking-off"
			/>
			<v-checkbox
				v-model="payload.only_couples" density="compact"
				hide-details="auto" label="Only Family"
				append-icon="mdi-human-male-female-child"
			/>
			<v-checkbox
				v-model="payload.only_girls" density="compact"
				hide-details="auto" label="Only Girls"
				append-icon="mdi-human-female-female"
			/>
			<v-checkbox
				v-model="payload.only_vegan" density="compact"
				hide-details="auto" label="Only Vegetarians"
				append-icon="mdi-food-apple-outline"
			/>
		</div>
		<v-text-field
			v-model="payload.age_restriction" density="compact"
			hide-details="auto" min="0"
			label="Age Restriction"
			type="number" clearable
			prepend-inner-icon="mdi-human-child"
			placeholder="Enter the minimum number of age of the tenant you want in your property"
		/>
	</div>
</template>
<script setup lang="ts">
const props = defineProps<{
	modelValue: IPropertyRestrictionInformation,
	isFlatBeingCreated?: boolean,
}>()

defineEmits(["update:modelValue"])

const payload = ref<IPropertyRestrictionInformation>(props.modelValue)

watch(() => payload.value, (newVal) => {
	emit("update:modelValue", newVal)
})
</script>
