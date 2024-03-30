<template>
	<div class="default-layout">
		<AppBar />
		<div class="app-container">
			<slot />
		</div>
		<app-footer />
	</div>
</template>
<style lang="scss">
.app-container {
	background: aliceblue;
}
</style>
