<template>
	<div class="search">
		<h2>Find your next home</h2>
		<p>Search thousands of rental listings and find your next home.</p>
		<v-card
			max-width="600" variant="flat"
			class="mx-auto my-6"
		>
			<v-text-field
				v-model="search"
				variant="outlined" outlined
				placeholder="Try Koteshwor, Kathmandu"
				prepend-inner-icon="mdi-magnify"
				hide-details="auto" name="search"
			/>
		</v-card>
	</div>
</template>
<script lang="ts" setup>
const search = ref("")
</script>
