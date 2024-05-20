<template>
	<div class="explore">
		<h1>Explore rentals in popular cities</h1>

		<v-expansion-panels>
			<v-expansion-panel
				v-for="i in 6" :key="i"
			>
				<template #title>
					<h4>Item for rent</h4>
				</template>
				<template #text>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
					dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
					ex ea commodo consequat.
				</template>
			</v-expansion-panel>
		</v-expansion-panels>
	</div>
</template>
