export interface AuthPayload {
	username?: string;
	password?: string;
	email?: string;
	first_name?: string;
	middle_name?: string;
	last_name?: string;
	primary_contact?: string;
	address?: string;
	city?: string;
	account_type?: number;
	citizenship_number?: string;
	citizenship_back?: File;
}

export interface Choice {
	value: number|string;
	title: string;
}
