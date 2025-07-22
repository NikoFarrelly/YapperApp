import { useMemo, useState } from 'react';

import { useNetworkRequest } from './useNetworkRequest';

const BASE_URL = 'http://localhost:4000';
const REGISTER_URL = BASE_URL + '/auth/register';

export const useRegister = () => {
	const [firstName, setFirstName] = useState('Joe');
	const [lastName, setLastName] = useState('Bloggs');
	const [email, setEmail] = useState('joe@bloggs.com');
	const [password, setPassword] = useState('joebloggs#1&4eva');

	const { loading, response, request, error } = useNetworkRequest(REGISTER_URL, 'POST', {
		firstName,
		lastName,
		email,
		password,
	});

	const isDisabled = useMemo(() => !!firstName && !!lastName && !!email && !!password, [firstName]);

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
