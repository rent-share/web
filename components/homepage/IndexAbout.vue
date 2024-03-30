<template>
	<div class="about">
		<div class="about--info">
			<h2 class="about--title">
				So, What's RentShare?
			</h2>
			<div class="about--subtitle">
				<p class="mb-4">
					RentShare is a rental platform for accommodation seekers and landlords. We help you find the right
					accommodation for your needs and budget. We also help landlords find the right tenants for their
					properties.
				</p>
				<p>
					We are a team of young and enthusiastic individuals who are passionate about making the rental
					experience better for everyone involved. We are based in Kathmandu, Nepal.
				</p>
			</div>
			<v-card-text class="about--list">
				<div
					v-for="data in aboutData" :key="data.title"
					class="about--list--item"
				>
					<v-icon size="30">
						{{ data.icon }}
					</v-icon>
					<div>
						<div class="about--list--title">
							{{ data.title }}
						</div>
						<div class="about--list--subtitle">
							{{ data.subtitle }}
						</div>
					</div>
				</div>
			</v-card-text>
		</div>
		<v-img
			class="about--img"
			src="/showcase/about_logo.jpeg"
		/>
	</div>
</template>
