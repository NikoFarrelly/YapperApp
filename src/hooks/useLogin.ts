import { useState } from 'react';

export const useLogin = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const isDisabled = email.includes('@') && email.length >= 10 && password.length >= 10;
	return {
		email,
		setEmail,
		password,
		setPassword,
		isDisabled,
	};
};
