<script setup lang="ts">
const emit = defineEmits(["update:modelValue"])

const props = defineProps<{
	modelValue: number[];
	max: number;
	min: number;
	step: number;
	label: string;
}>()

const value = computed({
	get() {
		return props.modelValue
	},
	set(value) {
		emit("update:modelValue", value)
	}
})
</script>

<template>
	<v-card class="range-input" rounded="0">
		<div class="range-input__limit">
			<v-text-field
				v-model="value[0]"
				class="range-input__min"
				type="number" density="compact"
				hide-details="auto"
				:label="'Minimum ' + label"
			/>
			<v-text-field
				v-model="value[1]"
				class="range-input__max"
				type="number" density="compact"
				hide-details="auto"
				:label="'Maximum ' + label"
			/>
		</div>
		<v-card-text class="py-2 pl-0">
			<v-range-slider
				v-model="value"
				class="range-input__input"
				:max="max"
				:min="min"
				:step="step"
				:label="label"
				hide-details="auto"
			/>
		</v-card-text>
	</v-card>
</template>
<style lang="scss">
.range-input {
	&__limit {
		display: flex;
		justify-content: center;
		align-items: center;
	}
}
</style>
