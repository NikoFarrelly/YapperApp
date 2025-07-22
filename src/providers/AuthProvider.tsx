import { ReactNode, useState } from 'react';

import { useLogin } from '../hooks/useLogin';
import { useRegister } from '../hooks/useRegister';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
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

		response: registerResponse,
		loading: registerLoading,
		error: registerError,
		request: registerRequest,
	} = useRegister();
	const {
		email: loginEmail,
		setEmail: setLoginEmail,
		password: loginPassword,
		setPassword: setLoginPassword,
		isDisabled: isLoginDisabled,

		response: loginResponse,
		loading: loginLoading,
		error: loginError,
		request: loginRequest,
	} = useLogin();

	const onLogin = async () => {
		const res = await loginRequest({});
		if (res?.status === 200) {
			setJwtToken(res.data.access_token);
		}
	};

	const onRegister = async () => {
		const res = await registerRequest({});
		if (res?.status === 201) {
			setJwtToken(res.data.access_token);
		}
	};

	const context = {
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
		registerResponse,
		registerError,

		loginEmail,
		setLoginEmail,
		loginPassword,
		setLoginPassword,
		isLoginDisabled,
		loginResponse,
		loginLoading,
		loginError,
		onLogin,

		jwtToken,
		isLoggedIn: !!jwtToken,
	};
	return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>;
};
