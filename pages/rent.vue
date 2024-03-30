<template>
	<div class="rent">
		<RentFilter />
		<h1>11,984 Rooms for Rent in Kathmandu</h1>
		<div class="rent__container">
			<div class="rent__list">
				<AccommodationCard
					v-for="i in 10"
					:key="i"
				/>
			</div>
			<v-card class="rent__map">
				<ClientOnly fallback-tag="div">
					<template #fallback>
						<div class="d-flex justify-center align-center fill-height">
							<v-progress-circular indeterminate color="primary" />
						</div>
					</template>
					<RentMap />
				</ClientOnly>
			</v-card>
		</div>
		<div class="rent__vacancy">
			<v-card>
				<h2>Are you a rental professional?</h2>
				<v-card-text>
					Try our tenant screening, or post rental listings to RentShare. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
				</v-card-text>
			</v-card>
		</div>
		<div class="rent__guide">
			<div class="rent__guide__info">
				<h2>Renter's guide to Kathmandu</h2>
				<p>
					Looking for a house or apartment to rent? Find your next home by searching our listings. Or, post your place with us.
				</p>
				<a href="">Read more</a>
			</div>
			<div class="rent__guide__avatar">
				<v-avatar size="300" color="primary">
					<img src="https://picsum.photos/300/300" alt="Renter's guide">
				</v-avatar>
			</div>
		</div>
		<div class="rent__statistics">
			<div class="rent__statistics__overline">
				Kathmandu rent data for:
			</div>
			<h2>Accommodation for rent</h2>
			<div class="rent__statistics__info">
				<div>
					<div class="rent__statistics__info__title uppercase">
						Average Rent
					</div>
					<div class="rent__statistics__info__value">
						Rs 10,000
					</div>
				</div>
				<div>
					<div class="rent__statistics__info__title uppercase">
						Year over year change
					</div>
					<div class="rent__statistics__info__value">
						10%
						<v-chip prepend-icon="mdi-chevron-up">
							Rs 1200
						</v-chip>
					</div>
				</div>
				<div>
					<div class="rent__statistics__info__title uppercase">
						Accommodations for rent
					</div>
					<div class="rent__statistics__info__value">
						11,984
					</div>
				</div>
			</div>
			<v-divider class="mb-6" />
			<div class="rent__statistics__overline">
				Rent ranges for Kathmandu accommodations:
			</div>
			<div class="rent__statistics__ranges">
				<div class="rent__statistics__ranges__range">
					<div class="rent__statistics__ranges__range__title">
						Rs 0 - Rs 10,000
					</div>
					<v-progress-linear
						model-value="15" rounded
						bg-color="pink-lighten-3"
						color="pink-lighten-1" height="10"
						striped
					/>
				</div>
				<div class="rent__statistics__ranges__range">
					<div class="rent__statistics__ranges__range__title">
						Rs 10,000 - Rs 20,000
					</div>
					<v-progress-linear
						model-value="30" rounded
						bg-color="blue-grey"
						color="lime" height="10"
						striped
					/>
				</div>
				<div class="rent__statistics__ranges__range">
					<div class="rent__statistics__ranges__range__title">
						Rs 20,000 - Rs 30,000
					</div>
					<v-progress-linear
						model-value="25" rounded
						bg-color="pink-lighten-3"
						color="pink-lighten-1"
						height="10" striped
					/>
				</div>
			</div>
		</div>
		<div class="rent__demographics">
			<div class="rent__demographics__headline">
				<h2>Demographics for Kathmandu</h2>
				<p>
					We currently have <strong>11,984</strong> accommodations for rent across Kathmandu. <strong>Kathmandu</strong> rent prices vary across neighborhoods from <strong>Samakhusi</strong> to <strong>Samakhusi</strong>. Overall, <strong>Samakhusi</strong> is the most expensive neighborhood, while <strong>Samakhusi</strong> is the cheapest one. For more information about Kathmandu rental trends, check out our monthly rent report.
				</p>
			</div>
			<div class="rent__demographics__gender">
				<h3>Gender</h3>
				<div class="rent__demographics__gender__row">
					<v-avatar size="300" color="orange" />
					<div>
						<div>
							<span class="rent__demographics__gender__index bg-amber" />
							48% Male
						</div>
						<div>
							<span class="rent__demographics__gender__index bg-teal" />
							52% Female
						</div>
					</div>
				</div>
			</div>
			<div class="rent__demographics__age">
				<h3>Age Range</h3>
				<div class="rent__demographics__range-card">
					<div class="rent__demographics__range-card__row">
						<div class="rent__demographics__range-card__label">
							0-19
						</div>
						<v-progress-linear
							model-value="15"
							bg-color="pink-lighten-3"
							color="pink-lighten-1"
							height="10" striped
							rounded
						/>
					</div>
					<div class="rent__demographics__range-card__row">
						<div class="rent__demographics__range-card__label">
							20-29
						</div>
						<v-progress-linear
							model-value="15"
							bg-color="pink-lighten-3"
							color="pink-lighten-1"
							height="10" striped
							rounded
						/>
					</div>
					<div class="rent__demographics__range-card__row">
						<div class="rent__demographics__range-card__label">
							30-39
						</div>
						<v-progress-linear
							model-value="15"
							bg-color="pink-lighten-3"
							color="pink-lighten-1"
							height="10" striped
							rounded
						/>
					</div>
					<div class="rent__demographics__range-card__row">
						<div class="rent__demographics__range-card__label">
							40-49
						</div>
						<v-progress-linear
							model-value="15"
							bg-color="pink-lighten-3"
							color="pink-lighten-1"
							height="10" striped
							rounded
						/>
					</div>
					<div class="rent__demographics__range-card__row">
						<div class="rent__demographics__range-card__label">
							50-59
						</div>
						<v-progress-linear
							model-value="15"
							bg-color="pink-lighten-3"
							color="pink-lighten-1"
							height="10" striped
							rounded
						/>
					</div>
					<div class="rent__demographics__range-card__row">
						<div class="rent__demographics__range-card__label">
							60+
						</div>
						<v-progress-linear
							model-value="15"
							bg-color="pink-lighten-3"
							color="pink-lighten-1"
							height="10" striped
							rounded
						/>
					</div>
				</div>
			</div>
			<div class="rent__demographics__education">
				<h3>Education</h3>
				<div class="rent__demographics__range-card">
					<div class="rent__demographics__range-card__row">
						<div class="rent__demographics__range-card__label">
							High School
						</div>
						<v-progress-linear
							model-value="15"
							bg-color="pink-lighten-3"
							color="pink-lighten-1"
							striped rounded
							height="10"
						/>
					</div>
					<div class="rent__demographics__range-card__row">
						<div class="rent__demographics__range-card__label">
							Some College
						</div>
						<v-progress-linear
							model-value="15"
							bg-color="pink-lighten-3"
							color="pink-lighten-1"
							striped rounded
							height="10"
						/>
					</div>
					<div class="rent__demographics__range-card__row">
						<div class="rent__demographics__range-card__label">
							Associate Degree
						</div>
						<v-progress-linear
							model-value="15"
							bg-color="pink-lighten-3"
							color="pink-lighten-1"
							striped rounded
							height="10"
						/>
					</div>
					<div class="rent__demographics__range-card__row">
						<div class="rent__demographics__range-card__label">
							Bachelor's Degree
						</div>
						<v-progress-linear
							model-value="15"
							bg-color="pink-lighten-3"
							color="pink-lighten-1"
							striped rounded
							height="10"
						/>
					</div>
					<div class="rent__demographics__range-card__row">
						<div class="rent__demographics__range-card__label">
							Master's Degree or Higher
						</div>
						<v-progress-linear
							model-value="15"
							bg-color="pink-lighten-3"
							color="pink-lighten-1"
							striped rounded
							height="10"
						/>
					</div>
				</div>
			</div>
			<div class="rent__demographics__income">
				<h3>Income</h3>
				<div class="rent__demographics__range-card">
					<div class="rent__demographics__range-card__row">
						<div class="rent__demographics__range-card__label">
							Less than Rs 10,000
						</div>
						<v-progress-linear
							model-value="15" rounded
							bg-color="pink-lighten-3"
							color="pink-lighten-1" height="10"
							striped
						/>
					</div>
					<div class="rent__demographics__range-card__row">
						<div class="rent__demographics__range-card__label">
							Rs 10,000 - Rs 20,000
						</div>
						<v-progress-linear
							model-value="30" rounded
							bg-color="blue-grey"
							color="lime" height="10"
							striped
						/>
					</div>
					<div class="rent__demographics__range-card__row">
						<div class="rent__demographics__range-card__label">
							Rs 20,000 - Rs 30,000
						</div>
						<v-progress-linear
							model-value="25" rounded
							bg-color="pink-lighten-3"
							color="pink-lighten-1"
							height="10" striped
						/>
					</div>
				</div>
			</div>
		</div>
		<div class="rent__blogs">
			<h2>Life in Kathmandu</h2>
			<div class="rent__blogs__container">
				<BlogCard
					v-for="i in 4"
					:key="i"
				/>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
useSeoMeta({
	title: "Rooms for Rent"
})
</script>
<style lang="scss">
.rent {
	padding: 0 1rem 1rem;
	max-width: 1400px;
	margin: 0 auto;
	h1 {
		margin-bottom: 1rem;
	}
	&__container {
		padding: .1rem;
		display: grid;
		grid-template-columns: 70% 30%;
		@media only screen and (max-width: 1000px) {
			grid-template-columns: 65% 35%;
		}
		@media only screen and (max-width: 800px) {
			grid-template-columns: 60% 40%;
		}
		@media only screen and (max-width: 600px) {
			display: flex;
			flex-direction: column-reverse;
		}
	}
	&__list {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: space-between;

		.accommodation-card {
			width: calc(33% - .5rem);
			@media (max-width: 1200px) {
				width: calc(50% - .5rem);
			}
			@media (max-width: 768px) {
				width: 100%;
			}
		}
	}
	&__map {
		margin-left: 1rem;
		position: sticky;
		top: 11.28rem;
		height: calc(100vh - 185px);
		#map {
			height: 100%;
			width: 100%;
		}
		@media only screen and (max-width: 600px) {
			margin-left: 0;
			position: relative;
			top: 0;
			margin-bottom: 1rem;
			height: 90vh;
		}
	}
	&__vacancy {
		max-width: 1200px;
		margin-inline: auto;
		margin-top: 5rem;
		h2 {
			font-size: 2rem;
			padding: 1rem 1rem 0 1rem;
		}
	}
	&__guide {
		max-width: 1200px;
		margin-inline: auto;
		margin-top: 5rem;
		display: grid;
		grid-template-columns: 40% 60%;
		&__info {
			h2 {
				margin-bottom: 1rem;
				font-size: 3rem;
				line-height: 3rem;
			}
		}
	}
	&__statistics {
		margin-top: 5rem;
		padding: 1rem;
		max-width: 1200px;
		margin-inline: auto;
		border: 1px solid grey;
		border-radius: 8px;

		&__overline {
			margin-bottom: .5rem;
		}
		h2 {
			margin-bottom: 1rem;
		}
		&__info {
			display: flex;
			gap: 1rem;
			margin-bottom: 1rem;
			align-items: center;
			justify-content: space-between;
			padding-block: 1rem;
			&__title {
				font-size: .75rem;
				letter-spacing: 2px;
				margin-bottom: .5rem;
			}
			&__value {
				font-size: 1.5rem;
				font-weight: 500;
			}
		}
		&__ranges {
			padding-top: 1rem;
			&__range {
				margin-bottom: 1rem;
				&__title {
					font-weight: 500;
					margin-bottom: .5rem;
				}
			}
		}
	}
	&__demographics {
		margin-top: 5rem;

		max-width: 1200px;
		margin-inline: auto;
		h3 {
			margin-bottom: 1rem;
			padding-inline: .2rem;
		}
		&__headline {
			display: grid;
			grid-column-gap: 1rem;
			grid-template-columns: 50% 50%;
			margin-bottom: 2rem;
			h2 {
				font-size: 2rem;
				line-height: 2rem;
			}
		}
		&__gender {
			margin-bottom: 3rem;
			&__row {
				display: flex;
			}
			&__index {
				display: inline-block;
				width: 1rem;
				height: 1rem;
				border-radius: 50%;
				margin-right: .5rem;
			}
		}
		&__range-card {
			border: 1px solid grey;
			border-radius: 8px;
			padding: 1rem;
			margin-bottom: 2rem;
			&__row {
				margin-bottom: 1rem;
			}
			&__label {
				font-weight: 500;
				margin-bottom: .5rem;
			}
		}
		&__age {

		}
	}
	&__blogs {
		margin-top: 3rem;
		margin-bottom: 3rem;
		max-width: 1200px;
		margin-inline: auto;
		h2 {
			margin-bottom: 1rem;
			font-size: 2rem;
			line-height: 2rem;
		}
		&__container {
			display: flex;
			gap: 1rem;
		}
	}
}
</style>
