<template>
	<v-app
		id="settings-layout"
		theme="dark"
	>
		<v-system-bar>
			<v-spacer />

			<v-icon>mdi-square</v-icon>

			<v-icon>mdi-circle</v-icon>

			<v-icon>mdi-triangle</v-icon>
		</v-system-bar>


		<v-navigation-drawer width="244">
			<div class="d-flex align-center pa-3">
				<v-avatar size="40" color="white" />
				<h1>RentShare</h1>
			</div>

			<v-list density="compact">
				<v-list-item
					v-for="(navItem, index) in navItems"
					:key="index"
					:title="navItem.title"
					:prepend-icon="navItem.icon"
					:to="`/settings/${navItem.to}`"
					link
				/>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar
			class="px-3"
			flat density="compact"
			height="72"
		>
			<v-spacer />
			<v-btn>Home</v-btn>
			<v-btn>Gnome</v-btn>

			<v-responsive max-width="156">
				<v-text-field
					bg-color="grey-lighten-1"
					density="compact"
					flat
					hide-details
					rounded="pill"
					variant="solo-filled"
					prepend-inner-icon="mdi-magnify"
				/>
			</v-responsive>
		</v-app-bar>

		<v-main>
			<slot />
		</v-main>

		<v-footer app>
			Admin Panel Footer
		</v-footer>
	</v-app>
</template>
<script setup lang="ts">
const navItems = [
	{
		title: "Dashboard",
		icon: "mdi-view-dashboard",
		to: "dashboard"
	},
	{
		title: "Accounts",
		icon: "mdi-account",
		to: "accounts"
	},
	{
		title: "Accommodations",
		icon: "mdi-city",
		to: "accommodations"
	},
]
</script>
