<template>
	<v-card flat>
		<v-card-title class="d-flex align-center pe-2">
			<v-icon icon="mdi-video-input-component" /> &nbsp;
			Find a Graphics Card

			<v-spacer />

			<v-text-field
				v-model="search"
				prepend-inner-icon="mdi-magnify"
				density="compact"
				label="Search"
				single-line
				flat
				hide-details
				variant="solo-filled"
			/>
		</v-card-title>

		<v-divider />
		<v-data-table v-model:search="search" :items="items">
			<template #header.stock>
				<div class="text-end">
					Stock
				</div>
			</template>

			<template #item.image="{ item }">
				<v-card class="my-2" elevation="2" rounded>
					<v-img
						:src="`https://cdn.vuetifyjs.com/docs/images/graphics/gpus/${item.image}`"
						height="64"
						cover
					/>
				</v-card>
			</template>

			<template #item.rating="{ item }">
				<v-rating
					:model-value="item.rating"
					color="orange-darken-2"
					density="compact"
					size="small"
					readonly
				/>
			</template>

			<template #item.stock="{ item }">
				<div class="text-end">
					<v-chip
						:color="item.stock ? 'green' : 'red'"
						:text="item.stock ? 'In stock' : 'Out of stock'"
						class="text-uppercase"
						label
						size="small"
					/>
				</div>
			</template>
		</v-data-table>
	</v-card>
</template>
<script>
export default {
	setup() {
		useSeoMeta({
			title: "Accommodations - Settings"
		})
	},
	data () {
		return {
			search: "",
			items: [
				{
					name: "Nebula GTX 3080",
					image: "1.png",
					price: 699.99,
					rating: 5,
					stock: true,
				},
				{
					name: "Galaxy RTX 3080",
					image: "2.png",
					price: 799.99,
					rating: 4,
					stock: false,
				},
				{
					name: "Orion RX 6800 XT",
					image: "3.png",
					price: 649.99,
					rating: 3,
					stock: true,
				},
				{
					name: "Vortex RTX 3090",
					image: "4.png",
					price: 1499.99,
					rating: 4,
					stock: true,
				},
				{
					name: "Cosmos GTX 1660 Super",
					image: "5.png",
					price: 299.99,
					rating: 4,
					stock: false,
				},
			],
		}
	},
}
</script>
