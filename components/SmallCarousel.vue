<template>
	<v-carousel
		hide-delimiters-background
		touch delimiter-icon="mdi-circle"
		class="small-carousel"
		:height="height"
	>
		<template #prev="{ props }">
			<v-btn
				v-if="imageList.length > 1"
				class="small-carousel__prev"
				variant="flat"
				size="x-small"
				icon @click="props.onClick"
			>
				<v-icon size="20">
					mdi-chevron-left
				</v-icon>
			</v-btn>
		</template>
		<template #next="{ props }">
			<v-btn
				class="small-carousel__next"
				variant="flat"
				size="x-small"
				icon @click="props.onClick"
			>
				<v-icon size="20">
					mdi-chevron-right
				</v-icon>
			</v-btn>
		</template>
		<v-carousel-item
			v-for="(image, index) in imageList"
			:key="index"
			reverse-transition="slide-x-reverse-transition"
			transition="slide-x-transition"
		>
			<v-img
				:src="image"
				:cover="true"
			/>
		</v-carousel-item>
		<slot />
	</v-carousel>
</template>
<script setup lang="ts">
defineProps<{
	height: number|string;
	imageList: string[];
}>()
</script>
<style lang="scss" scoped>
.small-carousel {
	position: relative;
	&__prev, &__next {
		scale: 0;
		transition: scale 0.2s ease-in-out;
	}
}
.small-carousel:hover {
	.small-carousel__prev, .small-carousel__next {
		scale: 1;
	}
}
</style>
<style lang="scss">
.small-carousel {
	.v-carousel__controls {
		button {
			margin: 0;
			height: 1rem;
			width: 1rem;
			i {
				font-size: .5rem;
			}
		}
	}
}
</style>
