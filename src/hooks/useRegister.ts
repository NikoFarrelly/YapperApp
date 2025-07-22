import { useMemo, useState } from 'react';

export const useRegister = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
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
		isDisabled
	};
};
