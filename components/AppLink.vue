<template>
	<a
		:href="href"
		:aria-current="ariaCurrent"
		:tabindex="computedTabIndex" class="tab-focus"
		v-bind="$attrs" :title="title || tooltip"
	>
		<template v-if="title">
			{{ title }}
		</template>
		<template v-else>
			<slot />
		</template>
	</a>
</template>
<script setup lang="ts">
const props = defineProps<{
	title?: string;
	href: string;
	routeName?: string;
	tabIndex?: number | string;
	tooltip?: string;
}>()
const route = useRoute()

const ariaCurrent = computed(() => {
	if (props.routeName && route.name === props.routeName) {
		return "page"
	}
	return undefined
})

const computedTabIndex = computed(() => {
	if (props.tabIndex) return parseInt(props.tabIndex.toString())
	return undefined
})
</script>
