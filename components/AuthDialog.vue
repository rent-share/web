<template>
	<v-dialog
		:max-width="dialogMaxWidth"
		v-bind="$attrs" class="auth-dialog"
	>
		<v-card>
			<div class="auth-dialog--title">
				<div>{{ dialogTitle }}</div>
				<v-btn
					icon size="small"
					variant="tonal" @click="$emit('close')"
				>
					<v-icon>mdi-close</v-icon>
				</v-btn>
			</div>
			<!-- eslint-disable-next-line -->
			<div class="auth-dialog--subtitle" v-html="dialogSubtitle" />
			<v-card-text>
				<v-form>
					<v-select
						v-if="forRegister"
						v-model="payload.account_type"
						label="Account Type*"
						:density="density" :items="AccountTypeChoices"
						prepend-inner-icon="mdi-target-account"
						:hide-details="hideDetails"
						placeholder="Select an account type"
					/>
					<div v-if="forRegister" class="list">
						<v-text-field
							v-model="payload.first_name"
							label="First Name*" :density="density"
							prepend-inner-icon="mdi-account"
							:hide-details="hideDetails"
						/>
						<v-text-field
							v-model="payload.middle_name"
							label="Middle Name" :density="density"
							:hide-details="hideDetails"
						/>
						<v-text-field
							v-model="payload.last_name"
							label="Last Name*" :density="density"
							:hide-details="hideDetails"
						/>
					</div>
					<v-text-field
						v-if="props.forLogin || props.forRegister"
						v-model="payload.username"
						label="Username*" :density="density"
						prepend-inner-icon="mdi-account"
						:hide-details="hideDetails"
						autocomplete="username"
					/>
					<v-text-field
						v-if="props.forRegister || props.forForgotPassword"
						v-model="payload.email"
						label="Email Address*"
						:density="density" type="email"
						prepend-inner-icon="mdi-at"
						:hide-details="hideDetails"
					/>
					<v-text-field
						v-if="props.forRegister"
						v-model="payload.primary_contact"
						label="Contact Number*"
						:density="density" type="tel"
						prepend-inner-icon="mdi-phone"
						:hide-details="hideDetails"
					/>
					<v-text-field
						v-if="props.forRegister"
						v-model="payload.address"
						label="Address*"
						:density="density"
						prepend-inner-icon="mdi-map-marker"
						:hide-details="hideDetails"
					/>
					<v-text-field
						v-if="props.forLogin || props.forRegister"
						v-model="payload.password"
						label="Password*" :hide-details="hideDetails"
						type="password" :density="density"
						prepend-inner-icon="mdi-lock"
						autocomplete="current-password"
					/>
				</v-form>
			</v-card-text>
			<div v-if="forRegister" class="auth-dialog--info">
				By creating an account, I accept RentShare's
				<AppLink title="Terms and Conditions" href="/terms-and-conditions" />,
				<AppLink title="Privacy Policy" href="/privacy-policy" />,
				and <AppLink title="Community Values" href="/community-values" />.
			</div>
			<div class="auth-dialog--actions">
				<v-btn
					v-if="forLogin || forForgotPassword"
					variant="text" color="primary"
					@click="$emit('signup')"
				>
					New to RentShare? Sign up for free
				</v-btn>
				<v-btn
					v-if="forRegister || forForgotPassword"
					variant="text" color="primary"
					@click="$emit('login')"
				>
					Already have an account? Log in
				</v-btn>
				<v-btn
					v-if="forLogin"
					variant="text" color="orange"
					@click="$emit('forgot-password')"
				>
					Forgot Password?
				</v-btn>
				<v-btn
					class="mt-4 mb-2"
					variant="elevated"
					color="primary" block
					@click="$emit('close')"
				>
					Submit
				</v-btn>
			</div>
		</v-card>
	</v-dialog>
</template>
<script lang="ts" setup>
const props = defineProps<{
	forLogin: boolean;
	forRegister: boolean;
	forForgotPassword: boolean;
}>()

defineEmits(["close", "signup", "login", "forgot-password"])

const dialogTitle = computed(() => {
	if (props.forLogin) return "Log Into RentShare"
	if (props.forRegister) return "Sign up"
	if (props.forForgotPassword) return "Forgot Password"
})

const dialogSubtitle = computed(() => {
	if (props.forLogin) return "Experience the best of <strong>RentShare</strong>"
	if (props.forRegister) return "Begin your <strong>RentShare</strong> journey"
	if (props.forForgotPassword) return "Enter your e-mail address below, and we'll e-mail instructions for setting a new one."
})

const dialogMaxWidth = computed(() => {
	if (props.forRegister) return 600
	return 400
})

const density = computed(() => {
	// if (props.forRegister) return "compact"
	return "default"
})

const hideDetails = computed(() => {
	if (props.forRegister) return "auto"
	return false
})

const payload: AuthPayload = reactive({})
</script>
<style lang="scss">
.auth-dialog {
	.list {
		display: flex;
		align-items: center;
		gap: 0;
	}
	&--title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 2rem 2rem .5rem 2rem;
		font-size: 1.6rem;
		line-height: 1.6rem;
	}
	&--subtitle {
		padding: 0 2rem 2rem 2rem;
		font-size: 1rem;
		line-height: 1rem;
		color: #6c757d;
	}
	&--info {
		padding: 0 2rem 0rem 2rem;
		font-size: .75rem;
		line-height: 1rem;
		color: #6c757d;
	}
	&--actions {
		padding: 1rem 1.5rem;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		button {
			width: fit-content;
		}
	}
	.v-field {
		border-radius: 0;
	}
}
</style>
