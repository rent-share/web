<template>
	<div class="profile">
		<div class="profile__nav">
			<div class="profile__nav__headline">
				<v-avatar size="40" color="primary">
					<span class="profile__nav__headline__initials">{{ getInitials }}</span>
				</v-avatar>
				<div class="profile__nav__headline__name">
					{{ fullName }}
				</div>
			</div>
			<div class="profile__nav__subtitle">
				<div class="list">
					<div
						v-if="currentUser.is_superuser"
						class="profile__nav__subtitle__chip"
					>
						Admin
					</div>
					<div
						v-if="currentUser.is_staff"
						class="profile__nav__subtitle__chip"
					>
						Staff
					</div>
					<div
						class="profile__nav__subtitle__chip"
					>
						{{ AccountTypeChoices[currentUser.profile.account_type].title }}
					</div>
				</div>
				<div>Date Joined: {{ $fromNow(currentUser.date_joined) }}</div>
				<div>Last Logged In: {{ $fromNow(currentUser.last_login) }}</div>
			</div>
			<v-divider />
			<a
				v-for="item in navItems"
				:key="item.title"
				class="profile__nav__item"
				:href="item.to"
				:class="{ active: $route.path === item.to }"
			>
				<v-icon>{{ item.icon }}</v-icon>
				<span>{{ item.title }}</span>
			</a>
		</div>
		<div class="profile__content">
			<router-view />
		</div>
	</div>
</template>
<script setup lang="ts">
useSeoMeta({
	title: "Profile",
	ogTitle: "Profile | RentShare",
	description: "A rental platform for accommodation seekers and landlords",
	ogDescription: "A rental platform for accommodation seekers and landlords",
	ogImage: "https://rentshare.com/rentshare.png",
	twitterCard: "summary_large_image",
})

const navItems = [
	{
		title: "About",
		to: "/profile/about",
		icon: "mdi-account",
	},
	{
		title: "Change Password",
		to: "/profile/change-password",
		icon: "mdi-lock-reset",
	},
	{
		title: "Listings",
		to: "/profile/listings",
		icon: "mdi-home",
	},
	{
		title: "Bookmarks",
		to: "/profile/bookmarks",
		icon: "mdi-bookmark"
	},
	{
		title: "Applications",
		to: "/profile/applications",
		icon: "mdi-file-document-edit-outline",
	}
]

const currentUser: User = {
	id: 1,
	username: "johndoe",
	email: "john@test.com",
	last_login: "2023-12-29T11:22:03.109986Z",
	is_superuser: true,
	first_name: "",
	last_name: "",
	is_staff: true,
	is_active: true,
	date_joined: "2023-12-29T11:20:31.324958Z",
	profile: {
		id: 1,
		full_name: "",
		middle_name: "",
		primary_contact: "9843534565",
		secondary_contact: null,
		address: "Kathmandu, Nepal",
		account_type: 1,
		citizenship_number: "12-345678-90",
		citizenship_back: null,
		is_citizenship_verified: false,
		is_contact_verified: false,
		is_email_verified: false
	}
}

const fullName = computed(() => {
	return currentUser.profile.full_name || currentUser.username
})

const getInitials = computed(() => {
	return fullName.value.split(" ").map((n) => n[0]).join("")
})

</script>
<style lang="scss">
.profile {
	max-width: 1200px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 4fr;
	padding: 1rem;
	&__nav {
		position: sticky;
		top: 5rem;
		border: 1px solid #ccc;
		border-radius: 4px;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		margin-right: 1rem;
		height: fit-content;
		&__headline {
			padding: .5rem;
			display: flex;
			align-items: center;
			gap: .5rem;
			&__initials {
				text-transform: uppercase;
				font-weight: 500;
				font-size: 1.2rem;
			}
			&__name {
				font-size: 1.2rem;
				font-weight: 600;
				margin-left: .5rem;
			}
		}
		&__subtitle {
			padding: .5rem;
			font-size: .875rem;
			.list {
				margin-bottom: .5rem;
			}
			&__chip {
				background: #eee;
				padding: .2rem .5rem;
				border-radius: 4px;
			}
		}
		&__item {
			padding: 1rem .8rem;
			transition: all .2s ease;
			text-decoration: none;
			color: #000;
			&:hover {
				background: #eee;
			}
			&.active {
				background: #e3e3e3;
				font-weight: 700;
			}
			span {
				margin-left: 1rem;
			}
			&:not(:last-child) {
				border-bottom: 1px solid #ccc;
			}
		}
	}
	&__content {
		min-height: 90vh;
		.v-field {
			border-radius: 0;
		}
		> div {
			padding: 1rem;
			border: 1px solid #ccc;
			border-radius: 4px;
		}
	}
}
</style>
