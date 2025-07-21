import { ReactNode } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { theme } from '../theme';

type BackgroundVariants = 'primary' | 'secondary' | 'contrast';

type ScreenProps = {
	children: ReactNode;
	style?: StyleProp<ViewStyle>;
	variant?: BackgroundVariants;
};

const getBackgroundColor = (variant?: BackgroundVariants) => {
	switch (variant) {
		default:
		case 'primary':
			return theme.fillPrimary;
		case 'secondary':
			return theme.fillSecondary;
		case 'contrast':
			return theme.fillContrast;
	}
};

export const Screen = ({ children, style, variant = 'primary' }: ScreenProps) => {
	const backgroundColor = getBackgroundColor(variant);
	return (
		<SafeAreaView style={{ flex: 1, padding: 16, backgroundColor }}>
			<View style={[{ flex: 1 }, style]}>{children}</View>
		</SafeAreaView>
	);
};
