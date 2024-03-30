<template>
	<v-card
		class="blog-card"
		max-width="300"
	>
		<v-img
			:src="blog.poster" height="200"
			cover
		/>
		<v-card-title>{{ blog.title }}</v-card-title>
		<v-card-text>{{ blog.content.substring(0, 100) }}</v-card-text>
		<v-card-actions>
			<v-btn variant="text">
				Read More
			</v-btn>
		</v-card-actions>
	</v-card>
</template>
<script setup lang="ts">
const blog = {
	poster: "https://picsum.photos/300/200",
	title: "My Blog",
	content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc eu nisl. Nu"
}
</script>
