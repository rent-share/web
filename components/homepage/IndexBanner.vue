<template>
	<v-img
		class="index-img"
		src="/homepage-desktop.svg"
		lazy-src="/homepage-desktop-lazy.png"
		:cover="true" :eager="true"
	>
		<div class="index-img__credit">
			Image Source: <a href="https://www.zumper.com/" title="Zumper">Zumper</a>
		</div>
		<div class="index-img__content">
			<div class="index-img__content__heading">
				Pursue the eternal<br>
				Or dance in the ephemeral
			</div>
			<div class="index-img__content__subheading">
				Accommodation for rent<br>
				that fits your timeline
			</div>
			<div class="index-img__content__form">
				<v-card rounded="lg" color="#e8e8e8">
					<v-card-text class="pa-8">
						<v-text-field
							v-model="search"
							bg-color="white" variant="outlined"
							placeholder="Search by location or property name"
							outlined prepend-inner-icon="mdi-magnify"
							hide-details="auto" name="search"
						/>
					</v-card-text>
				</v-card>
			</div>
		</div>
	</v-img>
</template>
<script lang="ts" setup>
const search = ref("")
</script>
