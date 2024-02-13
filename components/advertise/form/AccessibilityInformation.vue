<template>
	<div>
		<h2 id="accessibility">
			Accessibility
		</h2>
		<div class="list">
			<v-checkbox
				v-model="payload.wheelchair_accessible" density="compact"
				hide-details="auto"
				label="WheelChair Accessible"
				append-icon="mdi-wheelchair-accessibility"
			/>
			<v-checkbox
				v-model="payload.elevator_accessible" density="compact"
				hide-details="auto" label="Elevator Access"
				append-icon="mdi-elevator"
			/>
		</div>
	</div>
</template>
<script setup lang="ts">
const props = defineProps<{
	modelValue: IPropertyAccessibilityInformation,
	isFlatBeingCreated?: boolean,
}>()

defineEmits(["update:modelValue"])

const payload = ref<IPropertyAccessibilityInformation>(props.modelValue)

watch(() => payload.value, (newVal) => {
	emit("update:modelValue", newVal)
})
</script>
