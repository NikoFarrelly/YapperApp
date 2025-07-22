import { createContext } from 'react';

import { createContextHook } from '../createContextHook';

type TAuthContext = {
	onLogin: () => void;
	onRegister: () => void;
	loginLoading: boolean;
	registerLoading: boolean;

	firstName: string;
	setFirstName: (value: string) => void;
	lastName: string;
	setLastName: (value: string) => void;
	registerEmail: string;
	setRegisterEmail: (value: string) => void;
	isRegisterDisabled: boolean;
	registerPassword: string;
	setRegisterPassword: (value: string) => void;
	loginEmail: string;
	setLoginEmail: (value: string) => void;
	loginPassword: string;
	setLoginPassword: (value: string) => void;
	isLoginDisabled: boolean;

	jwtToken: string;
	isLoggedIn: boolean;
};

export const AuthContext = createContext<TAuthContext>({
	onLogin: () => {},
	onRegister: () => {},
	loginLoading: false,
	registerLoading: false,

	firstName: '',
	setFirstName: () => {},
	lastName: '',
	setLastName: () => {},
	registerEmail: '',
	setRegisterEmail: () => {},
	isRegisterDisabled: false,
	registerPassword: '',
	setRegisterPassword: () => {},
	loginEmail: '',
	setLoginEmail: () => {},
	loginPassword: '',
	setLoginPassword: () => {},
	isLoginDisabled: false,

	jwtToken: '',
	isLoggedIn: false,
});

export const useAuth = createContextHook<TAuthContext>(AuthContext, 'useAuth');
