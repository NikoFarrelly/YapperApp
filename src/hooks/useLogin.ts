import { useState } from 'react';

export const useLogin = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);
	const isDisabled = email.includes('@') && email.length >= 10 && password.length >= 10;

	const onSubmit = () => {
		setLoading(true);
		// try {
		// } catch (e) {
		// } finally {
		// 	setLoading(false);
		// }
	};

	return {
		email,
		setEmail,
		password,
		setPassword,
		isDisabled,
		onSubmit,
		loading,
	};
};
