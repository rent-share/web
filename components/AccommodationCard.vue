<template>
	<div class="accommodation-card">
		<v-btn
			class="accommodation-card__bookmark"
			size="x-small" icon
			variant="flat"
			tabindex=""
		>
			<v-icon>{{ accommodation.is_bookmarked ? 'mdi-bookmark' : 'mdi-bookmark-outline' }}</v-icon>
		</v-btn>
		<v-btn
			v-if="accommodation.is_promoted" variant="flat"
			size="small"
			class="accommodation-card__promoted"
		>
			Promoted
		</v-btn>
		<SmallCarousel height="200" :image-list="accommodation.medias">
			<div class="accommodation-card__timestamp">
				{{ $fromNow(accommodation.created_at) }}
			</div>
		</SmallCarousel>
		<div class="accommodation-card__details">
			<div class="accommodation-card__details__rating">
				<div class="accommodation-card__details__rating__score">
					{{ accommodation.rating }}
				</div>
				<div class="accommodation-card__details__rating__text">
					Excellent
				</div>
			</div>

			<div
				v-if="accommodation.is_verified"
				class="accommodation-card__details__verified"
			>
				<v-icon color="success">
					mdi-shield-check
				</v-icon>
				Verified
			</div>
		</div>
		<div class="accommodation-card__info">
			<h2 class="accommodation-card__info__name">
				{{ accommodation.name }}
			</h2>
			<div class="accommodation-card__info__address">
				{{ accommodation.address }}, {{ accommodation.city }}, {{ accommodation.province }}
			</div>
			<div class="accommodation-card__info__bath-bed">
				{{ accommodation.bedrooms }} Bedrooms | {{ accommodation.bathrooms }} Bathrooms
			</div>
		</div>
		<div class="accommodation-card__rent">
			Rs. <span>{{ accommodation.price }}</span> / month
		</div>
		<v-divider class="mx-3" />
		<div class="accommodation-card--actions">
			<v-btn
				variant="tonal" prepend-icon="mdi-eye"
				rounded="lg" color="orange"
				to="room/123"
			>
				View
			</v-btn>
			<v-btn
				variant="tonal" prepend-icon="mdi-book"
				rounded="lg" color="primary"
			>
				Book
			</v-btn>
		</div>
	</div>
</template>
<script setup lang="ts">
type Accommodation = {
	id: number;
	name: string;
	price: number;
	address: string;
	city: string;
	province: string;
	medias: string[];
	rating: number;
	is_verified: boolean;
	bedrooms: number;
	bathrooms: number;
	dimension: string;
	description: string;
	is_bookmarked: boolean;
	is_promoted: boolean;
	created_at: string;
}

// defineProps<{
// 	accommodation: Accommodation;
// }>()

function generate_random_number(min:number, max:number) {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

function generate_random_word(maxLen: number) {
	const alphabet = "abcdefghijklmnopqrstuvwxyz"
	let word = ""
	for (let i = 0; i < maxLen; i++) {
		word += alphabet[generate_random_number(0, alphabet.length - 1)]
	}
	return word
}

function generate_random_words(count: number) {
	const words = []
	for (let i = 0; i < count; i++) {
		words.push(generate_random_word(5))
	}
	return words.join(" ")
}

const accommodation:Accommodation = {
	id: generate_random_number(1, 100),
	name: generate_random_words(6),
	price: 1000 * generate_random_number(1, 10),
	address: "Samakhusi,  " + generate_random_number(1, 10) + ", Ganesh Marg",
	city: "Kathmandu",
	province: "Bagmati",
	medias: [
		"https://picsum.photos/500/600?random=1",
		"https://picsum.photos/500/600?random=2",
		"https://picsum.photos/500/600?random=3",
		"https://picsum.photos/500/600?random=4",
		"https://picsum.photos/500/600?random=5",
	],
	rating: generate_random_number(1, 5),
	is_verified: true,
	bedrooms: generate_random_number(1, 5),
	bathrooms: generate_random_number(1, 5),
	dimension: "500X600",
	description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
	is_bookmarked: false,
	is_promoted: true,
	created_at: "2021-04-01T12:00:00.000Z"
}

</script>
<style lang="scss">
.accommodation-card {
	position: relative;
	border-radius: 8px;
	border: 1px solid #c0c0c0;
	overflow: hidden;

	&__info {
		padding-inline: 1rem;

		&__name {
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			font-size: 1.2rem;
		}
		&__address, &__bath-bed {
			font-size: .875rem;
			color: black;
		}
	}

	&__bookmark {
		position: absolute !important;
		top: .5rem;
		right: .5rem;
		z-index: 1;
		i {
			font-size: 1.1rem;
		}
	}

	&__promoted {
		position: absolute !important;
		top: .5rem;
		left: .5rem;
		z-index: 1;
		padding-inline: 6px;
	}

	&__timestamp {
		position: absolute;
		bottom: 0;
		right: 0;
		z-index: 1;
		padding: 0 .5rem;
		background: black;
		color: white;
		border-radius: 8px 0 0 0;
		scale: 0;
		transition: scale 0.2s ease-in-out;
		font-size: .875rem;
	}

	&__rent {
		padding: .5rem 1rem;
		span {
			font-size: 1.6rem;
			font-weight: 600;
		}
	}

	&__details {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: .5rem 1rem;
		gap: .5rem;
		font-size: .875rem;
		&__rating {
			display: flex;
			align-items: center;
			gap: .2rem;
			&__score {
				font-size: .8rem;
				font-weight: 600;
				background: #1713ae;
				color: white;
				padding: 0 .3rem;
				border-radius: 4px;
			}
			&__text {
				margin-top: .2rem;
			}
		}
		&__verified {
			display: flex;
			align-items: center;
			font-weight: 600;
			gap: .2rem;
			border: 1px solid #c0c0c0;
			padding: .2rem .3rem .2rem .2rem;
			border-radius: 8px;
		}
	}

	&--actions {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: .5rem 1rem;
		gap: .5rem;
	}
}
.accommodation-card:hover {
	box-shadow: 0 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)),
		0px 2px 2px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)),
		0px 1px 5px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12)) !important;
	.accommodation-card__timestamp {
		scale: 1;
	}
}
</style>
