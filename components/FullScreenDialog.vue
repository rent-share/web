<template>
	<v-dialog
		persistent
		:model-value="!!media"
		class="full-screen--dialog"
	>
		<v-card class="full-screen--card">
			<v-btn
				size="small"
				icon class="full-screen--close"
				@click="emit('close')"
			>
				<v-icon size="large">
					mdi-close
				</v-icon>
			</v-btn>
			<img
				v-if="media.type.includes('image')"
				:key="media.url"
				:src="media.url"
				alt="preview"
				height="auto" width="100%"
			>
			<video
				v-if="media.type.includes('video')"
				:key="media.url"
				:src="media.url"
				alt="preview" controls
				height="auto" width="100%"
			/>
		</v-card>
	</v-dialog>
</template>
<script setup lang="ts">
defineProps<{
	media: IFullScreenMedia,
}>()
const emit = defineEmits(["close"])
</script>
