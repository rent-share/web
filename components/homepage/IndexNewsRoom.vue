<template>
	<div class="newsroom">
		<h3>Find us in the press.</h3>
		<div class="newsroom__list">
			<v-card
				v-for="i in 4"
				:key="i"
				height="100" width="200"
				color="grey lighten-3"
			>
				Dummy {{ i }}
			</v-card>
		</div>
		<v-btn size="large">
			See our press
		</v-btn>
	</div>
</template>
