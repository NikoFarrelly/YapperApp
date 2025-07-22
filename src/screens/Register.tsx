import React from 'react';
import { KeyboardAvoidingView, ScrollView, View } from 'react-native';

import { LoadingIndicator } from '../components/LoadingIndicator';
import { Screen } from '../components/Screen';
import { YapButton } from '../components/YapButton';
import { YapInput } from '../components/YapInput';
import { YapTitle } from '../components/YapTitle';
import { IS_IOS } from '../constants';
import { useIsKeyboardVisible } from '../hooks/useIsKeyboardVisible';
import { useRegister } from '../hooks/useRegister';

export const Register = () => {
	const {
		email,
		setEmail,
		password,
		setPassword,
		firstName,
		setFirstName,
		lastName,
		setLastName,
		isDisabled,
		onSubmit,
		loading,
	} = useRegister();
	const isKeyboardVisible = useIsKeyboardVisible();

	return (
		<Screen variant={'contrast'}>
			<View style={{ flex: 0.25, justifyContent: 'center' }}>
				<YapTitle text={'Login'} variant={'secondary-dark'} bold />
			</View>
			<View style={{ flex: 0.25 }} />
			{loading ? (
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
					</ScrollView>
				</KeyboardAvoidingView>
			)}
		</Screen>
	);
};
