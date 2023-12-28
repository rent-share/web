<template>
	<v-footer color="#08318c" class="footer">
		<section>
			<div class="footer__columns">
				<div class="footer__column site_brand">
					<h2>RentShare</h2>
					<p>Find your fresh start.</p>
					<p>© 2024 RentShare Pvt. Ltd.</p>
					<div class="social-media">
						<v-icon>mdi-facebook</v-icon>
						<v-icon>mdi-twitter</v-icon>
						<v-icon>mdi-instagram</v-icon>
						<v-icon>mdi-linkedin</v-icon>
					</div>
				</div>
				<div
					v-for="(column, index) in footerItems" :key="index"
					class="footer__column"
				>
					<h4>{{ column.title }}</h4>

					<p v-for="(link, i) in column.items" :key="i">
						<a :href="link.to">{{ link.title }}</a>
					</p>
				</div>
			</div>
			<v-divider class="my-6" />
			<div class="last_row">
				<div>
					Fair Housing and Equal Opportunity
				</div>
				<div>
					Made with <v-icon>mdi-heart</v-icon> in Kathmandu.
				</div>
			</div>
		</section>
	</v-footer>
</template>
<script setup lang="ts">
const footerItems = [
	{
		title: "Company",
		items: [
			{ title: "About", to: "/about" },
			{ title: "Careers", to: "/careers" },
			{ title: "Blog", to: "/blog" },
			{ title: "RentalGuides", to: "/rental-guides" },
			{ title: "Newsroom", to: "/news-room" },
		]
	},
	{
		title: "Support",
		items: [
			{ title: "Help Center", to: "/help-center" },
			{ title: "Contact Us", to: "/contact-us" },
			{ title: "Terms and Conditions", to: "/advertise" },
			{ title: "Sitemap", to: "/list-your-rental" },
			{ title: "Feedback", to: "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=feedback-rentshare@gmail.com" },
			{ title: "Fair Housing Rights", to: "/rental-manager" },
		]
	},
	{
		title: "Privacy Policy",
		items: [
			{ title: "Privacy Policy", to: "/privacy-policy" },
			{ title: "Do Not Sell or Share My Personal Information", to: "/do-not-sell-my-info" },
		]
	},
	{
		title: "Explore",
		items: [
			{ title: "Advertise with us", to: ""},
			{ title: "Tenant Screening", to: ""},
			{ title: "List Property", to: ""},
			{ title: "Landlord Resources", to: ""}
		]
	}
]
</script>
<style lang="scss" scoped>
.footer {
	section {
		max-width: 1100px;
		margin: 0 auto;
		padding-block: 2rem .5rem;
	}
	&__columns {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
	}
	&__column {
		max-width: 200px;
		h4 {
			text-transform: uppercase;
			margin-bottom: .875rem;
			letter-spacing: 0.063rem;
			font-size: .75rem;
		}
		a {
			color: white;
			text-decoration: none;
			font-weight: 500;
			font-size: 1rem;
			&:hover {
				text-decoration: underline;
			}
		}
	}
	.site_brand {
		h2 {
			margin-top: -.5rem;
			margin-bottom: 1rem;
		}
		p {
			margin-bottom: .5rem;
		}
		.social-media {
			margin-block: 1rem;
		}
	}
	.last_row {
		display: flex;
		justify-content: space-between;
		font-size: .875rem;
	}
}
</style>
