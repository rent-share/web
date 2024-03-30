<template>
	<div class="dashboard">
		<div class="summary--wrapper">
			<v-card
				v-for="summary in summaryItems"
				:key="summary.title"
				class="summary"
			>
				<div class="summary--count">
					{{ summary.count }}
				</div>
				<div class="summary--title">
					{{ summary.title }}
				</div>
			</v-card>
		</div>
		<v-data-table
			v-model="selected"
			class="mt-4"
			:items="items"
			item-value="name"
			show-select density="compact"
		>
			<template #top>
				<v-toolbar
					title="Recent Activities"
					density="compact"
				/>
			</template>
		</v-data-table>
	</div>
</template>
<script setup lang="ts">
useSeoMeta({
	title: "Dashboard - Settings"
})
const summaryItems = [
	{title: "Rentees", count: 1123},
	{title: "Renters", count: 1233},
	{title: "Rooms", count: 12344},
	{title: "Flats", count: 1233},
	{title: "Houses", count: 334}
]
const selected = ref([])
const items = ref([
	{
		name: "🍎 Apple",
		location: "Washington",
		height: "0.1",
		base: "0.07",
		volume: "0.0001",
	},
	{
		name: "🍌 Banana",
		location: "Ecuador",
		height: "0.2",
		base: "0.05",
		volume: "0.0002",
	},
	{
		name: "🍇 Grapes",
		location: "Italy",
		height: "0.02",
		base: "0.02",
		volume: "0.00001",
	},
	{
		name: "🍉 Watermelon",
		location: "China",
		height: "0.4",
		base: "0.3",
		volume: "0.03",
	},
	{
		name: "🍍 Pineapple",
		location: "Thailand",
		height: "0.3",
		base: "0.2",
		volume: "0.005",
	},
	{
		name: "🍒 Cherries",
		location: "Turkey",
		height: "0.02",
		base: "0.02",
		volume: "0.00001",
	},
	{
		name: "🥭 Mango",
		location: "India",
		height: "0.15",
		base: "0.1",
		volume: "0.0005",
	},
	{
		name: "🍓 Strawberry",
		location: "USA",
		height: "0.03",
		base: "0.03",
		volume: "0.00002",
	},
	{
		name: "🍑 Peach",
		location: "China",
		height: "0.09",
		base: "0.08",
		volume: "0.0004",
	},
	{
		name: "🥝 Kiwi",
		location: "New Zealand",
		height: "0.05",
		base: "0.05",
		volume: "0.0001",
	},
])
</script>
<style lang="scss">
.dashboard {
	padding: 1rem;
	.summary {
		padding: 1rem;
		text-align: center;
		&--wrapper {
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			gap: 1rem;
		}
		&--count {
			font-size: 2.4rem;
			font-weight: 600;
		}
		&--title {
			font-size: 1.2rem;
		}
	}
}
</style>
