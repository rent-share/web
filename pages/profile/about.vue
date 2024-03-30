<template>
	<div class="profile--about">
		<h3 class="mb-2">
			Profile Information
		</h3>
		<div class="profile--about--preview">
			<v-card
				v-if="payload.profile.citizenship_back"
				color="black" class="preview-card"
				height="200" width="300"
			>
				<v-btn
					icon class="preview-close" size="small"
					@click="payload.profile.citizenship_back = null"
				>
					<v-icon>mdi-close</v-icon>
				</v-btn>
				<v-img
					:src="getObjectUri"
				/>
			</v-card>
		</div>
		<v-form>
			<div class="list-no-gap">
				<v-text-field
					v-model="payload.first_name"

					label="First Name"
					prepend-inner-icon="mdi-account"
					hide-details="auto"
				/>
				<v-text-field
					v-model="payload.middle_name"

					label="Middle Name"
					hide-details="auto"
				/>
				<v-text-field
					v-model="payload.last_name"

					label="Last Name"
					hide-details="auto"
				/>
			</div>
			<div class="list-no-gap">
				<v-text-field
					v-model="payload.username"
					label="Username"
					prepend-inner-icon="mdi-account-circle"
					hide-details="auto"
				/>
				<v-text-field
					v-model="payload.email"
					label="Email"
					prepend-inner-icon="mdi-at"
					hide-details="auto"
				/>
			</div>
			<v-text-field
				v-model="payload.profile.primary_contact"
				label="Primary Contact"
				prepend-inner-icon="mdi-phone"
				hide-details="auto"
			/>
			<v-text-field
				v-model="payload.profile.secondary_contact"
				label="Secondary Contact"
				prepend-inner-icon="mdi-phone-outline"
				hide-details="auto"
			/>
			<v-text-field
				v-model="payload.profile.address"
				label="Address"
				prepend-inner-icon="mdi-map-marker"
				hide-details="auto"
				placeholder="Tole, Ward No. - Municipality/VDC, District"
			/>
			<v-text-field
				v-model="payload.profile.citizenship_number"
				label="Citizenship Number"
				prepend-inner-icon="mdi-card-account-details"
				hide-details="auto"
				placeholder="123-426-7890"
			/>
			<v-file-input
				v-model="payload.profile.citizenship_back"
				label="Citizenship Back"
				prepend-inner-icon="mdi-file-image"
				accept="image/*" :clearable="false" :rules="rules"
				hide-details="auto" prepend-icon=""
			/>
		</v-form>
		<p class="note">
			<strong>Note</strong>: Information about your citizenship will be used to verify your identity so that scams can be prevented.
		</p>
		<div>
			<v-btn
				class="my-4"
				color="primary"
				@click="updateProfile"
			>
				Update Profile
			</v-btn>
			<p class="note">
				By clicking on the button above, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
			</p>
		</div>
	</div>
</template>
<script setup lang="ts">
useSeoMeta({
	title: "Profile"
})

interface UserPayload {
	username: string;
	email: string;
	first_name: string;
	last_name: string;
	profile: {
		middle_name: string;
		primary_contact: number;
		secondary_contact: number | null;
		address: string;
		account_type: number;
		citizenship_number: number | null;
		citizenship_back: File | null;
	}
}

const payload = reactive<UserPayload>({
	profile: {}
})

const rules = reactive([
	value => {
		return !value || !value.length || value[0].size < 2000000 || "Image size should be less than 2 MB!"
	},
])

const updateProfile = () => {
	console.info(payload)
}

const getObjectUri = computed(() => {
	if (!payload.profile.citizenship_back)  return
	return URL.createObjectURL(payload.profile.citizenship_back[0])
})
</script>
<style lang="scss">
.profile--about {
	.note {
		font-size: .875rem;
	}
	&--preview {
		.preview-card {
			position: relative;
			z-index: 1;
		}
		.preview-close {
			position: absolute;
			top: .5rem;
			right: .5rem;
			z-index: 2;
		}
	}
}
</style>
