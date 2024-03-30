import {type Choice} from "./types"

export const AccountTypeChoices: Choice[] = [
	{value: 1, title: "Seeker"},
	{value: 2, title: "Owner"},
	{value: 3, title: "Agent"},
]

export const propertyTypes: string[] = [
	"Room",
	"Flat",
	"House",
	"Vehicle",
]

export const lightChoices: Choice[] = [
	{value: 1, title: "No Natural Light"},
	{value: 2, title: "Little Natural Light"},
	{value: 3, title: "Some Natural Light"},
	{value: 4, title: "Lots of Natural Light"},
	{value: 5, title: "Tons of Natural Light"},
]

export const waterSupplyChoices: Choice[] = [
	{value: 1, title: "24/7"},
	{value: 2, title: "12/7"},
	{value: 3, title: "8/7"},
	{value: 4, title: "4/7"},
	{value: 5, title: "No Water Supply"},
]

export const parkingOptions: Choice[] = [
	{value: 1, title: "Two Wheeler"},
	{value: 2, title: "Four Wheeler"},
	{value: 3, title: "Both"},
	{value: 4, title: "None"},
]

export const bathroomTypeOptions: Choice[] = [
	{value: 1, title: "Attached"},
	{value: 2, title: "Shared"},
	{value: 3, title: "Private"},
]

export const noiseLevelOptions: Choice[] = [
	{value: 1, title: "Very Quiet"},
	{value: 2, title: "Quiet"},
	{value: 3, title: "Moderate"},
	{value: 4, title: "Loud"},
	{value: 5, title: "Very Loud"},
]
