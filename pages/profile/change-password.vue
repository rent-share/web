<template>
	<div class="change-pass">
		<h3 class="mb-1">
			Update Password
		</h3>
		<p class="mb-3">
			You can update your password here.
		</p>
		<v-form>
			<v-text-field
				v-model="payload.old_password"
				label="Old Password"
				prepend-inner-icon="mdi-lock"
				type="password" hide-details="auto"
			/>
			<v-text-field
				v-model="payload.new_password"
				label="New Password"
				prepend-inner-icon="mdi-lock-plus"
				type="password" hide-details="auto"
			/>
			<v-text-field
				v-model="payload.confirm_password"
				label="Confirm Password"
				prepend-inner-icon="mdi-lock-check"
				type="password" hide-details="auto"
			/>
			<v-checkbox
				v-model="payload.logMeOutFromEverything"
				label="Log me out from all other logged in sessions"
				hide-details
			/>
			<v-btn
				color="primary"
				class="mt-4"
				@click="updatePassword"
			>
				Update Password
			</v-btn>
		</v-form>
	</div>
</template>
<script setup lang="ts">
const payload = ref({
	old_password: "",
	new_password: "",
	confirm_password: "",
	logMeOutFromEverything: false,
})

const updatePassword = () => {
	console.info(payload.value)
}
</script>
