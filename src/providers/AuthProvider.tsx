import { ReactNode, useState } from 'react';

import { useLogin } from '../hooks/useLogin';
import { useRegister } from '../hooks/useRegister';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [loginLoading, setLoginLoading] = useState(false);
	const [registerLoading, setRegisterLoading] = useState(false);
	const [jwtToken, setJwtToken] = useState<string>('');
	const {
		firstName,
		setFirstName,
		lastName,
		setLastName,
		email: registerEmail,
		setEmail: setRegisterEmail,
		isDisabled: isRegisterDisabled,
		password: registerPassword,
		setPassword: setRegisterPassword,
	} = useRegister();
	const {
		email: loginEmail,
		setEmail: setLoginEmail,
		password: loginPassword,
		setPassword: setLoginPassword,
		isDisabled: isLoginDisabled,
	} = useLogin();

	const onLogin = () => {
		setLoginLoading(true);
	};

	const onRegister = () => {
		setRegisterLoading(true);
	};

	const context = {
		loginLoading,
		onLogin,
		registerLoading,
		onRegister,

		firstName,
		setFirstName,
		lastName,
		setLastName,
		registerEmail,
		setRegisterEmail,
		isRegisterDisabled,
		registerPassword,
		setRegisterPassword,
		loginEmail,
		setLoginEmail,
		loginPassword,
		setLoginPassword,
		isLoginDisabled,

		jwtToken,
		isLoggedIn: true,
	};
	return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>;
};
