<template>
	<div class="amenity-information">
		<h2 id="amenities">
			Amenities
		</h2>
		<h3>Internal Amenities</h3>

		<div class="list">
			<v-checkbox
				v-if="isRoomBeingCreated"
				v-model="payload.with_kitchen_sink"
				hide-details="auto"
				label="With Kitchen Sink"
				append-icon="mdi-countertop"
				density="compact"
			/>
			<v-checkbox
				v-if="isRoomBeingCreated"
				v-model="payload.attach_bathroom"
				hide-details="auto"
				label="Attached Bathroom"
				append-icon="mdi-toilet"
				density="compact"
			/>
			<v-checkbox
				v-model="payload.tv" density="compact"
				hide-details="auto"
				label="TV"
				append-icon="mdi-television-classic"
			/>
			<v-checkbox
				v-model="payload.internet" density="compact"
				hide-details="auto" label="Internet"
				append-icon="mdi-wifi"
			/>
			<v-checkbox
				v-model="payload.air_conditioning" density="compact"
				hide-details="auto" label="Air Conditioning"
				append-icon="mdi-air-conditioner"
			/>
			<v-checkbox
				v-model="payload.laundry" density="compact"
				hide-details="auto" label="Laundry"
				append-icon="mdi-washing-machine"
			/>
			<v-checkbox
				v-model="payload.room_cleaning" density="compact"
				hide-details="auto" label="Room Cleaning"
				append-icon="mdi-broom"
			/>
			<v-checkbox
				v-model="payload.electricity_backup" density="compact"
				hide-details="auto"
				label="Electricity Backup"
				append-icon="mdi-flash"
			/>
		</div>

		<h3>External Amenities</h3>
		<div class="list">
			<v-checkbox
				v-model="payload.with_garden" density="compact"
				hide-details="auto" label="Garden"
				append-icon="mdi-flower-tulip-outline"
			/>
			<v-checkbox
				v-model="payload.with_balcony" density="compact"
				hide-details="auto" label="Balcony"
				append-icon="mdi-balcony"
			/>
			<v-checkbox
				v-model="payload.with_rooftop_deck" density="compact"
				hide-details="auto" label="Rooftop Deck"
				append-icon="mdi-weather-sunny-alert"
			/>
			<v-checkbox
				v-model="payload.with_pool" density="compact"
				hide-details="auto" label="Pool"
				append-icon="mdi-pool"
			/>
			<v-checkbox
				v-model="payload.with_gym" density="compact"
				hide-details="auto" label="Gym"
				append-icon="mdi-dumbbell"
			/>
			<v-checkbox
				v-model="payload.with_fireplace" density="compact"
				hide-details="auto" label="Fireplace"
				append-icon="mdi-fireplace"
			/>
		</div>
		<v-select
			v-model="payload.parking_facility" density="compact"
			hide-details="auto"
			label="Parking Facility"
			:items="parkingOptions"
			prepend-inner-icon="mdi-car"
		/>
	</div>
</template>
<script setup lang="ts">
const parkingOptions = [
	{id: 1, title: "Two Wheeler"},
	{id: 2, title: "Four Wheeler"},
	{id: 3, title: "Both"},
	{id: 4, title: "None"},
]

const props = defineProps<{
	modelValue: IPropertyAmenityInformation,
	isFlatBeingCreated?: boolean,
	isRoomBeingCreated?: boolean,
}>()

defineEmits(["update:modelValue"])

const payload = ref<IPropertyAmenityInformation>(props.modelValue)

watch(() => payload.value, (newVal) => {
	emit("update:modelValue", newVal)
})
</script>
