import { Link, useRouter } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

import { Screen } from '../components/Screen';
import { YapButton } from '../components/YapButton';
import { YapText } from '../components/YapText';
import { YapTitle } from '../components/YapTitle';
import { darkTheme } from '../theme';

export const Launch = () => {
	const { navigate } = useRouter();
	return (
		<Screen variant="contrast">
			<View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center' }}>
				<YapTitle text={'Yapper'} bold variant={'secondary-dark'} size={'large'} />
			</View>
			<View style={{ flex: 0.45 }} />
			<View
				style={{
					flex: 0.25,
					justifyContent: 'space-around',
					alignItems: 'center',
				}}
			>
				<YapButton text={'Login'} href={'/login'} />
				<YapButton text={'Register'} href={'/register'} />
			</View>
		</Screen>
	);
};
