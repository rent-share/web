<template>
	<div>
		<FullScreenDialog
			v-if="!!fullScreenMedia"
			:media="fullScreenMedia"
			@close="closeFullScreenDialog"
		/>
		<h2 id="Media">
			Media
		</h2>
		<div class="file-upload--wrapper">
			<template v-if="filePreviews.length">
				<h3>Previews:</h3>
				<div class="file-upload--preview">
					<template
						v-for="preview in filePreviews"
						:key="preview.url"
					>
						<div class="file-upload--preview--item">
							<v-btn
								icon size="small" variant="tonal"
								class="file-upload--preview--item--fullscreen"
								@click="openFullscreen(preview)"
							>
								<v-icon size="large" color="white">
									mdi-fullscreen
								</v-icon>
							</v-btn>
							<img
								v-if="preview.type.includes('image')"
								:key="preview.url"
								:src="preview.url"
								alt="preview"
							>
							<video
								v-if="preview.type.includes('video')"
								:key="preview.url"
								:src="preview.url"
								alt="preview" controls
							/>
							<v-text-field
								class="mt-2"
								variant="outlined"
								label="Media Information"
								placeholder="Enter the media information"
							/>
						</div>
					</template>
				</div>
			</template>
			<div
				class="file-upload--area"
				@click="fileInput.click()"
			>
				<div class="file-upload--info">
					<p>Click here to add the image/video files</p>
					<input
						ref="fileInput"
						type="file"
						multiple
						style="display: none;"
						accept="image/*,video/*"
						@change="onFileInputChange"
					>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
const fileInput = ref(null)
const filePreviews = reactive<{
	type: string;
	url: string;
}[]>([])
const onFileInputChange = (e: Event) => {
	const target = e.target as HTMLInputElement
	const files = target.files

	if(files?.length) {
		for (let i = 0; i < files.length; i++) {
			const file = files[i]
			payload.value.filesForUpload.push(file)
			const url = URL.createObjectURL(file)
			filePreviews.push({
				type: file.type,
				url,
			})
		}
	}
}
const fullScreenMedia = ref<IFullScreenMedia | null>(null)
const openFullscreen = (media) => {
	fullScreenMedia.value = media
}
const closeFullScreenDialog = () => {
	fullScreenMedia.value = null
}

const props = defineProps<{
	modelValue: IPropertyMediaInformation,
	isFlatBeingCreated?: boolean,
}>()

defineEmits(["update:modelValue"])
const payload = ref<IPropertyMediaInformation>(props.modelValue)

watch(() => payload.value, (newVal) => {
	emit("update:modelValue", newVal)
})
</script>
