import React from 'react';
import { KeyboardAvoidingView, View } from 'react-native';

import { LoadingIndicator } from '../components/LoadingIndicator';
import { Screen } from '../components/Screen';
import { YapButton } from '../components/YapButton';
import { YapInput } from '../components/YapInput';
import { YapTitle } from '../components/YapTitle';
import { IS_IOS } from '../constants';
import { useIsKeyboardVisible } from '../hooks/useIsKeyboardVisible';
import { useIsLoggedIn } from '../hooks/useIsLoggedIn';
import { useAuth } from '../providers/AuthContext';

export const Login = () => {
	const {
		loginEmail,
		setLoginEmail,
		loginPassword,
		setLoginPassword,
		isLoginDisabled,
		loginLoading,
		onLogin,
	} = useAuth();
	useIsLoggedIn();
	const isKeyboardVisible = useIsKeyboardVisible();

	return (
		<Screen variant={'contrast'}>
			<View style={{ flex: 0.25, justifyContent: 'center' }}>
				<YapTitle text={'Login'} variant={'secondary-dark'} bold />
			</View>
			<View style={{ flex: 0.25 }} />
			{loginLoading ? (
				<View style={{ flex: 0.5, justifyContent: 'flex-start', alignItems: 'center' }}>
					<LoadingIndicator />
				</View>
			) : (
				<KeyboardAvoidingView
					behavior={IS_IOS ? 'padding' : 'height'}
					style={{ flex: isKeyboardVisible ? 1 : 0.5, justifyContent: 'space-around' }}
				>
					<YapInput
						title={'Email'}
						placeholder={'user@place.com...'}
						value={loginEmail}
						onChangeText={setLoginEmail}
						inputMode={'email'}
						keyboardType={'email-address'}
					/>
					<YapInput
						title={'Password'}
						placeholder={'********'}
						value={loginPassword}
						onChangeText={setLoginPassword}
						secureTextEntry
					/>
					<View style={{ paddingTop: 24 }}>
						<YapButton text={'Submit'} onPress={onLogin} disabled={!isLoginDisabled} />
					</View>
				</KeyboardAvoidingView>
			)}
		</Screen>
	);
};
