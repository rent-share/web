<template>
	<div class="listings">
		<h3 class="mb-1">
			Your Listings
		</h3>
		<p class="mb-3">
			You can view your listings here.
		</p>
		<div class="listings--list">
			<AccommodationCard
				v-for="n in 10"
				:key="n"
			/>
		</div>
	</div>
</template>
<script setup lang="ts">
</script>
<style lang="scss">
.listings {
	&--list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-gap: 1rem;
	}
}
</style>
