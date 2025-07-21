import React from 'react';
import { Text, View } from 'react-native';

import { Screen } from '../components/Screen';
import { YapButton } from '../components/YapButton';
import { darkTheme } from '../theme';

export const Launch = () => {
	return (
		<Screen variant="contrast">
			<View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center' }}>
				<Text style={{ fontSize: 48, fontWeight: 'bold', color: darkTheme.textPrimaryDark }}>
					Yapper
				</Text>
			</View>
			<View style={{ flex: 0.5 }} />
			<View
				style={{
					flex: 0.2,
					justifyContent: 'space-around',
					alignItems: 'center',
				}}
			>
				<YapButton text={'Login'} onPress={() => {}} />
				<YapButton text={'Register'} onPress={() => {}} />
			</View>
		</Screen>
	);
};
