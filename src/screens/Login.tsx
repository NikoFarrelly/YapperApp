import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Keyboard, KeyboardAvoidingView, ScrollView, View } from 'react-native';

import { Screen } from '../components/Screen';
import { YapButton } from '../components/YapButton';
import { YapInput } from '../components/YapInput';
import { YapTitle } from '../components/YapTitle';
import { IS_IOS } from '../constants';
import { theme } from '../theme';

export const Login = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	// const [errorMessage, setErrorMessage] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);

	const onSubmit = () => {
		setLoading(true);
		// try {
		// } catch (e) {
		// } finally {
		// 	setLoading(false);
		// }
	};
	const isDisabled = email.includes('@') && email.length >= 10 && password.length >= 10;

	const [isKeyboardVisible, setIsKeyboardVisible] = useState<boolean>(false);

	useEffect(() => {
		const keyboardShowingSubscription = Keyboard.addListener('keyboardDidShow', () =>
			setIsKeyboardVisible(true),
		);
		const keyboardHideSubscription = Keyboard.addListener('keyboardDidHide', () =>
			setIsKeyboardVisible(false),
		);
		return () => {
			keyboardShowingSubscription.remove();
			keyboardHideSubscription.remove();
		};
	});
	console.log('isKeyboardVisible', isKeyboardVisible);

	return (
		<Screen variant={'contrast'}>
			<View style={{ flex: 0.25, justifyContent: 'center' }}>
				<YapTitle text={'Login'} variant={'secondary-dark'} bold />
			</View>
			<View style={{ flex: 0.25 }} />
			{loading ? (
				<View style={{ flex: 0.5, justifyContent: 'flex-start', alignItems: 'center' }}>
					<ActivityIndicator size="large" color={theme.surfacePrimary} />
				</View>
			) : (
				<KeyboardAvoidingView
					behavior={IS_IOS ? 'padding' : 'height'}
					style={{ flex: isKeyboardVisible ? 1 : 0.5, justifyContent: 'space-around' }}
				>
					<YapInput
						title={'Email'}
						placeholder={'user@place.com...'}
						value={email}
						onChangeText={setEmail}
						inputMode={'email'}
						keyboardType={'email-address'}
					/>
					<YapInput
						title={'Password'}
						placeholder={'********'}
						value={password}
						onChangeText={setPassword}
						secureTextEntry
					/>
					<View style={{ paddingTop: 24 }}>
						<YapButton text={'Submit'} onPress={onSubmit} disabled={!isDisabled} />
					</View>
				</KeyboardAvoidingView>
			)}
		</Screen>
	);
};
