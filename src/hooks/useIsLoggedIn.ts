import { useRouter } from 'expo-router';
import { useEffect } from 'react';

import { useAuth } from '../providers/AuthContext';

/**
 * If the user is already auth'd, and logged in, navigate them home automatically
 */
export const useIsLoggedIn = () => {
	const { isLoggedIn } = useAuth();
	const { navigate } = useRouter();

	useEffect(() => {
		if (isLoggedIn) navigate('/home');
	}, [isLoggedIn]);
};
