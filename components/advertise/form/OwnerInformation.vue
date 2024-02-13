<template>
	<h2 id="owner-information">
		Owner Information
	</h2>
	<v-checkbox
		v-model="payload.my_own_asset" density="compact"
		hide-details="auto"
		label="Do you own this property"
		append-icon="mdi-account"
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
</template>
<script setup lang="ts">
const props = defineProps<{
	modelValue: IPropertyOwnerInformation,
	isFlatBeingCreated?: boolean,
}>()

defineEmits(["update:modelValue"])

const payload = ref<IPropertyOwnerInformation>(props.modelValue)

watch(() => payload.value, (newVal) => {
	emit("update:modelValue", newVal)
})
</script>
