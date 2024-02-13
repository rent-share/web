<template>
	<div class="ad-form">
		<div class="ad-form--headline">
			<h1>Create a new advertisement</h1>
			<v-divider class="mb-4" />
		</div>
		<div class="ad-form--container">
			<div class="ad-form--form">
				<h2>
					What do you want to advertise?
				</h2>
				<p>Choose one of the following options to start advertising.</p>
				<v-select
					v-model="selectedPropertyType" density="compact"
					hide-details="auto"
					label="Property Type"
					:items="propertyTypes"
					prepend-inner-icon="mdi-home-group"
				/>
				<AdvertiseFormBasicInformation
					v-model="basicInformationPayload"
					:is-flat-being-created="isFlatBeingCreated"
				/>

				<AdvertiseFormOwnerInformation
					v-model="ownerInformationPayload"
					:is-flat-being-created="isFlatBeingCreated"
				/>

				<AdvertiseFormLocationInformation
					v-model="locationInformationPayload"
					:is-flat-being-created="isFlatBeingCreated"
				/>

				<AdvertiseFormAmenityInformation
					v-model="amenityInformationPayload"
					:is-flat-being-created="isFlatBeingCreated"
				/>

				<AdvertiseFormBathInformation
					v-model="bathInformationPayload"
					:is-flat-being-created="isFlatBeingCreated"
				/>

				<AdvertiseFormAccessibilityInformation
					v-model="accessibilityInformationPayload"
					:is-flat-being-created="isFlatBeingCreated"
				/>

				<AdvertiseFormRestrictionInformation
					v-model="restrictionInformationPayload"
					:is-flat-being-created="isFlatBeingCreated"
				/>

				<AdvertiseFormSecurityInformation
					v-model="securityInformationPayload"
					:is-flat-being-created="isFlatBeingCreated"
				/>

				<AdvertiseFormNeighborhoodInformation
					v-model="neighborhoodInformationPayload"
					:is-flat-being-created="isFlatBeingCreated"
				/>

				<AdvertiseFormMediaInformation
					v-model="mediaInformationPayload"
					:is-flat-being-created="isFlatBeingCreated"
				/>
			</div>

			<div class="ad-form--nav">
				<div class="ad-form--nav--container">
					<v-card>
						<v-card-text>
							<v-chip
								v-for="section in formSections"
								:key="section"
								label size="large"
								:text="section"
								@click="scrollTo"
							/>
						</v-card-text>
					</v-card>
					<div class="ad-form--actions">
						<v-btn color="error" large>
							Reset
						</v-btn>
						<v-btn color="primary" large>
							Submit
						</v-btn>
					</div>
				</div>
			</div>
		</div>
		<div class="ad-form--footnote">
			<p>
				By clicking on the "Submit" button, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy
					Policy</a>.
			</p>
		</div>
		<div class="ad-form--actions main-actions">
			<v-btn color="error" large>
				Reset
			</v-btn>
			<v-btn color="primary" large>
				Submit
			</v-btn>
		</div>
	</div>
</template>
<script setup lang="ts">
import "leaflet/dist/leaflet.css"

const propertyTypes = [
	"Room",
	"Flat",
	"House",
]
const formSections = [
	"Basic Information",
	"Owner Information",
	"Location Information",
	"Amenities",
	"Bathroom",
	"Accessibility",
	"Restrictions",
	"Security",
	"Neighborhood",
	"Media",
]

const selectedPropertyType = ref("Room")
const basicInformationPayload:IPropertyBasicInformation = reactive({})
const ownerInformationPayload:IPropertyOwnerInformation = reactive({})
const locationInformationPayload:IPropertyLocationInformation = reactive({})
const amenityInformationPayload:IPropertyAmenityInformation = reactive({})
const bathInformationPayload: IPropertyBathInformation = reactive({})
const accessibilityInformationPayload: IPropertyAccessibilityInformation = reactive({})
const restrictionInformationPayload: IPropertyRestrictionInformation = reactive({})
const securityInformationPayload: IPropertySecurityInformation = reactive({})
const neighborhoodInformationPayload: IPropertyNeighborhoodInformation = reactive({})
const mediaInformationPayload: IPropertyMediaInformation = reactive({
	filesForUpload: []
})

const isRoomBeingCreated = computed(() => {
	return selectedPropertyType.value === "Room"
})
const isFlatBeingCreated = computed(() => {
	return selectedPropertyType.value === "Flat"
})
const isHouseBeingCreated = computed(() => {
	return selectedPropertyType.value === "House"
})

const scrollTo = (e: MouseEvent) => {
	let target = e.target as HTMLElement
	if (!target.classList.contains("v-chip__content")) {
		target = target.querySelector(".v-chip__content") as HTMLElement
	}
	const navTitle = target.innerText
	const element = document.getElementById(
		navTitle.replace(/\s/g, "-").toLowerCase()
	) as HTMLElement

	const offset = 100
	const bodyRect = document.body.getBoundingClientRect().top
	const elementRect = element.getBoundingClientRect().top
	const elementPosition = elementRect - bodyRect
	const offsetPosition = elementPosition - offset

	window.scrollTo({
		top: offsetPosition,
		behavior: "smooth",
	})
}

onMounted(async () => {
	window.addEventListener("scroll", () => {
		const mainActions = document.querySelector(".main-actions") as HTMLElement
		const mainActionsRect = mainActions.getBoundingClientRect()
		const isMainActionsVisible = (
			mainActionsRect.top >= 0 &&
			mainActionsRect.left >= 0 &&
			mainActionsRect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
			mainActionsRect.right <= (window.innerWidth || document.documentElement.clientWidth)
		)
		const navAction = document.querySelector(".ad-form--nav--container .ad-form--actions") as HTMLElement
		if (isMainActionsVisible) {
			navAction.style.display = "none"
		} else {
			navAction.style.display = "flex"
		}
	})
})
</script>
<style lang="scss">
@import "../../styles/advertiseNew.scss";
</style>
