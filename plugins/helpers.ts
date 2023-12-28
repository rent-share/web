import moment from "moment"

export default defineNuxtPlugin(() => {
	return {
		provide: {
			fromNow: (date: string) => {
				return moment(date).fromNow()
			},
			formatDate: (date: string, format: string = "MMMM Do YYYY, h:mm:ss a") => {
				return moment(date).format(format)
			}
		}
	}
})
