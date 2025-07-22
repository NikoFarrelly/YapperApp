import { useMemo, useState } from 'react';

import { useNetworkRequest } from './useNetworkRequest';

type LoginResponse = {
	message: string;
	access_token: string;
};

const LOGIN_URL = process.env.EXPO_PUBLIC_API_URL + '/auth/login';

export const useLogin = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const { loading, response, request, error } = useNetworkRequest<LoginResponse, {}>(
		LOGIN_URL,
		'POST',
		{
			email,
			password,
		},
	);

	const isDisabled = useMemo(
		() => email.includes('@') && email.length > 10 && password.length >= 10,
		[email, password],
	);
	return {
		email,
		setEmail,
		password,
		setPassword,
		isDisabled,

		loading,
		response,
		request,
		error
	};
};
