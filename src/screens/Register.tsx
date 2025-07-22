import React from 'react';
import { KeyboardAvoidingView, ScrollView, View } from 'react-native';

import { LoadingIndicator } from '../components/LoadingIndicator';
import { Screen } from '../components/Screen';
import { YapButton } from '../components/YapButton';
import { YapInput } from '../components/YapInput';
import { YapTitle } from '../components/YapTitle';
import { IS_IOS } from '../constants';
import { useIsKeyboardVisible } from '../hooks/useIsKeyboardVisible';
import { useIsLoggedIn } from '../hooks/useIsLoggedIn';
import { useAuth } from '../providers/AuthContext';

export const Register = () => {
	const {
		onRegister,
		registerLoading,
		registerEmail,
		setRegisterEmail,
		registerPassword,
		setRegisterPassword,
		firstName,
		setFirstName,
		lastName,
		setLastName,
		isRegisterDisabled,
	} = useAuth();
	useIsLoggedIn();

	const isKeyboardVisible = useIsKeyboardVisible();

	return (
		<Screen variant={'contrast'}>
			<View style={{ flex: 0.25, justifyContent: 'center' }}>
				<YapTitle text={'Register'} variant={'secondary-dark'} bold />
			</View>
			<View style={{ flex: 0.25 }} />
			{registerLoading ? (
				<View style={{ flex: 0.5, justifyContent: 'flex-start', alignItems: 'center' }}>
					<LoadingIndicator />
				</View>
			) : (
				<KeyboardAvoidingView
					behavior={IS_IOS ? 'padding' : 'height'}
					style={{ flex: isKeyboardVisible ? 1.3 : 0.8, justifyContent: 'space-around' }}
				>
					<ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
						<YapInput
							title={'First name'}
							placeholder={'Joe'}
							value={firstName}
							onChangeText={setFirstName}
							inputMode={'text'}
						/>
						<YapInput
							title={'Last name'}
							placeholder={'Bloggs'}
							value={lastName}
							onChangeText={setLastName}
							inputMode={'text'}
						/>
						<YapInput
							title={'Email'}
							placeholder={'user@place.com...'}
							value={registerEmail}
							onChangeText={setRegisterEmail}
							inputMode={'email'}
							keyboardType={'email-address'}
						/>
						<YapInput
							title={'Password'}
							placeholder={'********'}
							value={registerPassword}
							onChangeText={setRegisterPassword}
							secureTextEntry
						/>
						<View style={{ paddingTop: 24 }}>
							<YapButton text={'Submit'} onPress={onRegister} disabled={!isRegisterDisabled} />
						</View>
					</ScrollView>
				</KeyboardAvoidingView>
			)}
		</Screen>
	);
};
