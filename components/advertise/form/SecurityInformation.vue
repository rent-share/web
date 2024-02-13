<template>
	<div>
		<h2 id="security">
			Security
		</h2>
		<div class="list">
			<v-checkbox
				v-model="payload.security_guard" density="compact"
				hide-details="auto" label="Security Guard"
				append-icon="mdi-security"
			/>
			<v-checkbox
				v-model="payload.cctv" density="compact"
				hide-details="auto" label="CCTV"
				append-icon="mdi-cctv"
			/>
			<v-checkbox
				v-model="payload.fire_alarm" density="compact"
				hide-details="auto" label="Fire Alarm"
				append-icon="mdi-fire-alert"
			/>
			<v-checkbox
				v-model="payload.fire_extinguisher" density="compact"
				hide-details="auto" label="Fire Extinguisher"
				append-icon="mdi-fire-extinguisher"
			/>
		</div>
		<v-text-field
			v-model="payload.insurance_details" density="compact"
			hide-details="auto"
			prepend-inner-icon="mdi-shield-account"
			label="Insurance Details" clearable
			placeholder="Enter the insurance details of the property"
		/>
	</div>
</template>
<script setup lang="ts">
const props = defineProps<{
	modelValue: IPropertySecurityInformation,
	isFlatBeingCreated?: boolean,
}>()

defineEmits(["update:modelValue"])

const payload = ref<IPropertySecurityInformation>(props.modelValue)

watch(() => payload.value, (newVal) => {
	emit("update:modelValue", newVal)
})
</script>
