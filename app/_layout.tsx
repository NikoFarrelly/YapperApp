import { Stack } from 'expo-router';
import React from 'react';

import { useAuth } from '../src/providers/AuthContext';
import { AuthProvider } from '../src/providers/AuthProvider';

const RootLayout = () => {
	const { isLoggedIn } = useAuth();

	return (
		<AuthProvider>
			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Protected guard={isLoggedIn}>
					<Stack.Screen name="home" />
				</Stack.Protected>

				<Stack.Protected guard={!isLoggedIn}>
					<Stack.Screen name="index" />
					<Stack.Screen name="login" />
					<Stack.Screen name="register" />
				</Stack.Protected>
			</Stack>
		</AuthProvider>
	);
};

export default RootLayout;
