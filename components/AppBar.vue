<template>
	<v-toolbar
		class="navbar"
		:class="{
			'navbar__sticky navbar__shrink': stickyNavRoutes.includes(route.name),
			'elevation-2': elevatedNavRoutes.includes(route.name)
		}"
	>
		<div class="navbar__brand list">
			<v-icon size="30" color="primary">
				mdi-home
			</v-icon>
			<AppLink
				href="/" route-name="rent"
				tab-index="1" tooltip="RentShare"
			>
				<h3>RentShare</h3>
			</AppLink>
		</div>
		<v-spacer />
		<div class="navbar__actions list">
			<AppLink
				class="navbar__action" tab-index="2"
				href="/advertise" title="Advertise"
				route-name="advertise"
			/>
			<AppLink
				class="navbar__action" tab-index="3"
				href="/rent" title="Rent"
				route-name="rent"
			/>
			<v-menu class="navbar__menu">
				<template #activator="{ props }">
					<div
						v-ripple
						class="navbar__dropdown tab-focus" tabindex="4"
						v-bind="props"
						@keypress.enter="props.onClick"
						@keypress.space="props.onClick"
					>
						<v-icon>mdi-account-circle</v-icon>
						<v-icon>mdi-menu</v-icon>
					</div>
				</template>
				<v-list
					class="navbar__menu__list" density="compact"
					min-width="150"
				>
					<v-list-item>Favorites</v-list-item>
					<v-list-item>Applications</v-list-item>
					<v-list-item to="/rent">
						Rentals
					</v-list-item>
					<v-list-item>Saved searches</v-list-item>
					<v-divider class="py-1" />
					<v-list-item to="/advertise">
						Advertise
					</v-list-item>
					<v-list-item href="/rent">
						Rent
					</v-list-item>
					<v-divider class="py-1" />
					<v-list-item to="/profile/about">
						Profile
					</v-list-item>
					<v-list-item @click="toggleLoginDialog()">
						Log in
					</v-list-item>
					<v-list-item @click="toggleSignUpDialog()">
						Sign up
					</v-list-item>
					<v-list-item>Logout</v-list-item>
					<v-divider />
					<v-list-item to="/settings/dashboard">
						Settings
					</v-list-item>
				</v-list>
			</v-menu>
		</div>
		<AuthDialog
			v-model="authDialog.show"
			:for-login="authDialog.mode === 'login'"
			:for-register="authDialog.mode === 'register'"
			:for-forgot-password="authDialog.mode === 'forgot-password'"
			@close="authDialog.show = false"
			@signup="toggleSignUpDialog()"
			@login="toggleLoginDialog()"
			@forgot-password="toggleForgotPasswordDialog()"
		/>
	</v-toolbar>
</template>
<script setup lang="ts">
const route = useRoute()
const stickyNavRoutes = ["rent", "profile-about", "profile-change-password", "profile-listings", "profile-applications"]
const elevatedNavRoutes = ["profile-about", "profile-change-password", "profile-listings", "profile-applications"]
const authDialog = reactive<{
	show: boolean;
	mode: "login" | "register" | "forgot-password" | null;
}>({
	show: false,
	mode: null
})

const toggleLoginDialog = () => {
	authDialog.mode = "login"
	authDialog.show = true
}

const toggleSignUpDialog = () => {
	authDialog.mode = "register"
	authDialog.show = true
}

const toggleForgotPasswordDialog = () => {
	authDialog.mode = "forgot-password"
	authDialog.show = true
}
</script>
<style lang="scss">
.navbar {
	padding-inline: 1rem;
	background: aliceblue;
	&__sticky {
		background: #e4f4ff !important;
		position: sticky !important;
		top: 0;
		z-index: 2;
		border-bottom: 1px solid #d3edff;
	}
	&__shrink {
		.v-toolbar__content {
			max-width: 1370px;
			margin-inline: auto;
		}
	}
	&__brand {
		a {
			color: inherit;
			text-decoration: none;
		}
		i {
			margin-bottom: .2rem;
		}
	}
	&__action {
		padding-inline: .2rem;
		margin-right: .2rem;
		font-size: .875rem;
		text-align: center;
		text-decoration: none;
		color: black;
	}
	&__action[aria-current="page"] {
		color: #3f51b5;
		font-weight: 700;
	}
	&__dropdown {
		margin-left: .5rem;
		outline: 1px solid #c0c0c0;
		padding: .2rem;
		border-radius: 24px;
		cursor: pointer;
		&:hover {
			background: white;
		}
	}
	&__menu {
		&__list {
			.v-list-item {
				font-size: .875rem;
				padding-block: 0;
				min-height: 30px !important;
				padding-inline: .2rem;
			}
		}
	}
}
</style>
