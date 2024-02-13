<template>
	<div class="basic-information">
		<h2 id="basic-information">
			Basic Information
		</h2>
		<v-text-field
			v-model="payload.name" density="compact"
			hide-details="auto"
			label="Property Name" clearable
			placeholder="Provide an attractive marketing name for the property"
			prepend-inner-icon="mdi-home-city"
		/>
		<v-textarea
			v-model="payload.description" density="compact"
			hide-details="auto"
			label="Property Description" clearable
			prepend-inner-icon="mdi-text-box"
			placeholder="Enter specific description you like to share about the property."
		/>

		<div class="list">
			<v-text-field
				v-model="payload.rent_price" density="compact"
				hide-details="auto" min="0"
				type="number" prepend-inner-icon="mdi-currency-inr"
				label="Rent Price" clearable
				placeholder="Enter the rent price for the property"
			/>
			<v-checkbox
				v-model="payload.is_negotiable"
				density="compact"
				hide-details="auto"
				label="Negotiable?"
				append-icon="mdi-receipt"
			/>
		</div>

		<v-slide-y-transition>
			<div
				v-if="isFlatBeingCreated"
				class="flat-attrs"
			>
				<div class="list">
					<v-text-field
						type="number" density="compact"
						label="No. of Baths" prepend-inner-icon="mdi-toilet"
						clearable hide-details="auto"
						min="0"
						placeholder="Total number of bathroom/washroom/toilets available"
					/>
					<v-text-field
						type="number" min="0"
						label="No. of Beds"
						clearable hide-details="auto"
						density="compact" prepend-inner-icon="mdi-bed"
						placeholder="Total number of bedrooms available"
					/>
				</div>
				<div class="list">
					<v-checkbox
						label="With Hall"
						append-icon="mdi-sofa"
						hide-details="auto" density="compact"
					/>
					<v-checkbox
						label="With Dedicated Kitchen Room"
						hide-details="auto"
						density="compact"
						append-icon="mdi-stove"
					/>
				</div>
			</div>
		</v-slide-y-transition>

		<v-text-field
			v-model="payload.max_occupancy" density="compact"
			hide-details="auto" min="0"
			type="number" prepend-inner-icon="mdi-account-group"
			label="Maximum Occupancy" clearable
			placeholder="Enter the maximum number of people allowed for the property"
		/>

		<v-text-field
			v-model="payload.square_footage" density="compact"
			hide-details="auto"
			label="Total Area (Sq.Ft)" clearable
			prepend-inner-icon="mdi-texture-box"
			placeholder="Enter the dimension of the property. Should be in format: lengthXbreadth. Eg: 10X12"
		/>
		<v-select
			v-model="payload.natural_light" density="compact"
			hide-details="auto"
			:items="lightChoices"
			label="Natural Light Frequency"
			prepend-inner-icon="mdi-weather-sunny"
		/>

		<v-text-field
			v-model="payload.security_deposit" density="compact"
			hide-details="auto" min="0"
			type="number" prepend-inner-icon="mdi-currency-inr"
			label="Security Deposit" clearable
			placeholder="Enter amount of security to be deposited before renting the property"
		/>

		<v-select
			v-model="payload.water_supply" density="compact"
			hide-details="auto"
			:items="waterSupplyChoices"
			label="Water Supply Frequency"
			prepend-inner-icon="mdi-water"
		/>

		<v-text-field
			v-model="payload.minimum_stay" density="compact"
			hide-details="auto" min="0"
			label="Minimum Stay Duration" clearable
			type="number" prepend-inner-icon="mdi-clock-time-four-outline"
			placeholder="Enter the minimum duration of time that the tenant should stay"
		/>

		<div>
			<v-checkbox
				v-model="payload.is_furnished" density="compact"
				hide-details="auto"
				label="Furnished?"
				append-icon="mdi-chair-school"
			/>
			<v-slide-y-transition>
				<v-text-field
					v-if="payload.is_furnished" v-model="payload.available_furnishings"
					density="compact"
					hide-details="auto"
					prepend-inner-icon="mdi-chair-school"
					label="Available Furnishings" clearable
					placeholder="Enter a list-wise detail of the available furnishings."
				/>
			</v-slide-y-transition>
		</div>
	</div>
</template>
<script setup lang="ts">
const props = defineProps<{
	modelValue: IPropertyBasicInformation,
	isFlatBeingCreated: boolean,
}>()

defineEmits(["update:modelValue"])

const payload = ref<IPropertyBasicInformation>(props.modelValue)

const lightChoices = [
	{id: 1, title: "No Natural Light"},
	{id: 2, title: "Little Natural Light"},
	{id: 3, title: "Some Natural Light"},
	{id: 4, title: "Lots of Natural Light"},
	{id: 5, title: "Tons of Natural Light"},
]

const waterSupplyChoices = [
	{id: 1, title: "24/7"},
	{id: 2, title: "12/7"},
	{id: 3, title: "8/7"},
	{id: 4, title: "4/7"},
	{id: 5, title: "No Water Supply"},
]

watch(() => payload.value, (newVal) => {
	emit("update:modelValue", newVal)
})
</script>
