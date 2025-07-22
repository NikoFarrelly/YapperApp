import { useMemo, useState } from 'react';

import { useNetworkRequest } from './useNetworkRequest';

type RegisterResponse = {
	access_token: string;
	message: string;
};
const REGISTER_URL = process.env.EXPO_PUBLIC_API_URL + '/auth/register';

export const useRegister = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { loading, response, request, error } = useNetworkRequest<RegisterResponse, {}>(
		REGISTER_URL,
		'POST',
		{
			firstName,
			lastName,
			email,
			password,
		},
	);

	const isDisabled = useMemo(
		() =>
			firstName.length > 3 &&
			lastName.length > 3 &&
			email.includes('@') &&
			email.length > 10 &&
			password.length >= 10,
		[firstName, lastName, email, password],
	);

	return {
		firstName,
		setFirstName,
		lastName,
		setLastName,
		email,
		setEmail,
		password,
		setPassword,
		isDisabled,

		loading,
		response,
		request,
		error,
	};
};
