<template>
	<div class="rent-filter">
		<div class="rent-filter__input">
			<v-text-field
				v-model="address" density="compact"
				placeholder="Address"
				hide-details="auto"
				prepend-inner-icon="mdi-map-marker"
				class="rent-filter__address" variant="outlined"
			/>
			<v-text-field
				v-model="address" density="compact"
				placeholder="City"
				hide-details="auto"
				prepend-inner-icon="mdi-city"
				class="rent-filter__city" variant="outlined"
			/>
			<v-text-field
				v-model="address" density="compact"
				placeholder="Province"
				hide-details="auto"
				prepend-inner-icon="mdi-map"
				class="rent-filter__province" variant="outlined"
			/>
			<v-menu>
				<template #activator="{props}">
					<v-btn
						v-bind="props" append-icon="mdi-chevron-down"
						height="40"
					>
						Beds / Baths
					</v-btn>
				</template>
				<v-list>
					<v-list-item>1+ Beds / 1+ Baths</v-list-item>
					<v-list-item>2+ Beds / 2+ Baths</v-list-item>
					<v-list-item>3+ Beds / 3+ Baths</v-list-item>
					<v-list-item>4+ Beds / 4+ Baths</v-list-item>
					<v-list-item>5+ Beds / 5+ Baths</v-list-item>
				</v-list>
			</v-menu>
		</div>
		<div class="rent-filter__row">
			<v-menu>
				<template #activator="{props}">
					<v-btn
						class="rent-filter__btn" v-bind="props"
						append-icon="mdi-chevron-down"
					>
						Price
					</v-btn>
				</template>
				<RangeInput
					v-model="price"
					:min="0"
					:max="100000"
					:step="1000"
					label="Price"
					density="compact"
				/>
			</v-menu>
			<v-menu>
				<template #activator="{props}">
					<v-btn v-bind="props" append-icon="mdi-chevron-down">
						Type
					</v-btn>
				</template>
				<v-list>
					<v-list-item>Room</v-list-item>
					<v-list-item>Flat</v-list-item>
					<v-list-item>House</v-list-item>
				</v-list>
			</v-menu>
			<v-menu>
				<template #activator="{props}">
					<v-btn v-bind="props" append-icon="mdi-chevron-down">
						Rating
					</v-btn>
				</template>
			</v-menu>
			<v-menu>
				<template #activator="{props}">
					<v-btn v-bind="props" append-icon="mdi-chevron-down">
						Pets Allowed
					</v-btn>
				</template>
				<v-list>
					<v-list-item>Dogs Allowed</v-list-item>
					<v-list-item>Cats Allowed</v-list-item>
				</v-list>
			</v-menu>
			<v-btn>
				No fee
			</v-btn>
			<v-dialog
				ref="filterDialog" scrollable
				max-width="600"
			>
				<template #activator="{props}">
					<v-btn v-bind="props" prepend-icon="mdi-filter-plus">
						More filters
					</v-btn>
				</template>
				<v-card>
					<v-toolbar>
						<v-toolbar-title>More filters</v-toolbar-title>
						<v-spacer />
						<v-btn text>
							Close
						</v-btn>
					</v-toolbar>
					<v-card-text style="max-height: 70vh;">
						<v-checkbox
							label="Verified" density="compact"
							hide-details="auto"
						/>
						<v-checkbox
							label="Promoted" density="compact"
							hide-details="auto"
						/>
					</v-card-text>
					<v-divider />
					<v-card-actions>
						<v-btn text color="error">
							Reset
						</v-btn>
						<v-spacer />
						<v-btn color="primary" variant="tonal">
							Apply
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-dialog>
			<v-spacer />
			<v-btn prepend-icon="mdi-bell">
				Save Search
			</v-btn>
		</div>
		<v-divider class="mt-3" />
	</div>
</template>
<script setup lang="ts">
const address = ref("")
const price = ref([0, 100000])
</script>
<style lang="scss">
.rent-filter {
	position: sticky;
	top: 64px;
	z-index: 3;
	background: aliceblue;
	padding-bottom: 1rem;

	.v-btn {
		width: auto;
		box-shadow: none;
		padding: 8px 10px;
		border-radius: 6px;
		font-size: .88rem;
		letter-spacing: normal;
		border: 1px solid #aaaaaa;
		&:hover {
			box-shadow: none;
		}
		.v-btn__append {
			margin-left: 0;
			i {
				font-size: 1rem;
			}
		}
	}

	.v-text-field {
		.v-field {
			padding-left: .5rem;
			background: white;
			input {
				&::placeholder {
					letter-spacing: normal;
					color: black;
				}
			}
		}
	}

	&__row {
		display: flex;
		gap: .75rem;
		align-items: center;
		flex-wrap: wrap;
	}
	&__input {
		display: flex;
		gap: .75rem;
		align-items: center;
		margin-bottom: .75rem;
	}
	&__address {
	}
}
</style>
