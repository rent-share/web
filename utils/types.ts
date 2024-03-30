export interface AuthPayload {
	username?: string;
	password?: string;
	email?: string;
	first_name?: string;
	middle_name?: string;
	last_name?: string;
	primary_contact?: string;
	address?: string;
	account_type?: number;
	citizenship_number?: string;
	citizenship_back?: File;
}

export interface Choice {
	value: number|string;
	title: string;
}

export interface IFullScreenMedia {
	url: string;
	type: string
}

export interface IPropertyBasicInformation {
	name: string;
	description: string;
	rent_price: number;
	is_negotiable: boolean;
	max_occupancy: number;
	square_footage: string;
	natural_light: number;
	security_deposit: number;
	water_supply: number;
	minimum_stay: number;
	is_furnished: boolean
	available_furnishings: string;
}

export interface IPropertyOwnerInformation {
	my_own_asset: boolean;
	owner_full_name?: string;
	owner_contact_number?: number;
}

export interface IPropertyLocationInformation {
	address: string;
	province: string;
	district: string;
	city: string;
	latitude: string;
	longitude: string;
}

export interface IPropertyAmenityInformation {
	with_kitchen_sink: boolean;
	attach_bathroom: boolean;
	tv: boolean;
	internet: boolean;
	air_conditioning: boolean;
	laundry: boolean;
	room_cleaning: boolean;
	electricity_backup: boolean;
	with_garden: boolean;
	with_balcony: boolean;
	with_rooftop_deck: boolean;
	with_pool: boolean;
	with_gym: boolean;
	with_fireplace: boolean;
	parking_facility: number;
}

export interface IPropertyBathInformation {
	bathroom_type: number;
	with_shower: boolean;
	with_bathtub: boolean;
	hot_water: boolean;
}

export interface IPropertyAccessibilityInformation {
	wheelchair_accessible: boolean;
	elevator_accessible: boolean;
}

export interface IPropertyRestrictionInformation {
	pets_allowed: boolean;
	no_smoking: boolean;
	only_couples: boolean;
	only_girls: boolean;
	only_vegan: boolean;
	age_restriction: number;
}

export interface IPropertySecurityInformation {
	security_guard: boolean;
	cctv: boolean;
	fire_alarm: boolean;
	fire_extinguisher: boolean;
	insurance_details: string;
}

export interface IPropertyNeighborhoodInformation {
	proximity_to_public_transport: number;
	noise_level: number;
	view_from_accommodation: string;
	nearby_points_of_interest: string;
}

export interface IPropertyMediaInformation {
	filesForUpload: File[]
}

export interface Profile {
	id: number;
	middle_name: string|null;
	primary_contact: string;
	secondary_contact: string|null;
	address: string;
	account_type: number;
	citizenship_number: string|null;
	citizenship_back: string|null;
	is_citizenship_verified: boolean;
	is_contact_verified: boolean;
	is_email_verified: boolean;
}

export interface User {
	id: number;
	username: string;
	email: string;
	last_login: string;
	is_superuser: boolean;
	first_name: string;
	last_name: string;
	is_staff: boolean;
	is_active: boolean;
	date_joined: string;
	profile: Profile;
}
