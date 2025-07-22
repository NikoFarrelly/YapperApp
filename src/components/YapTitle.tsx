import React from 'react';
import { Text } from 'react-native';

import { theme } from '../theme';

type TextVariants =
	| 'primary-dark'
	| 'primary-light'
	| 'primary-extra-light'
	| 'secondary-dark'
	| 'secondary-light'
	| 'secondary-extra-light'
	| 'contrast-light'
	| 'contrast-dark';
type TextSizes = 'extra-small' | 'small' | 'regular' | 'large';

type YapTextProps = {
	text: string;
	variant?: TextVariants;
	size?: TextSizes;
	bold?: boolean;
};

const getTextSize = (size?: TextSizes): number => {
	switch (size) {
		case 'extra-small':
			return 24;
		case 'small':
			return 32;
		default:
		case 'regular':
			return 40;
		case 'large':
			return 48;
	}
};

const getTextColour = (variant?: TextVariants): string => {
	switch (variant) {
		default:
		case 'primary-dark':
			return theme.textPrimaryDark;
		case 'primary-light':
			return theme.textPrimaryLight;
		case 'primary-extra-light':
			return theme.textPrimaryExtraLight;
		case 'secondary-dark':
			return theme.textSecondaryDark;
		case 'secondary-light':
			return theme.textSecondaryLight;
		case 'secondary-extra-light':
			return theme.textSecondaryExtraLight;
		case 'contrast-light':
			return theme.textContrastLight;
		case 'contrast-dark':
			return theme.textContrastDark;
	}
};

export const YapTitle = ({
	text,
	variant = 'primary-dark',
	size = 'regular',
	bold = false,
}: YapTextProps) => {
	const textColour = getTextColour(variant);
	const textSize = getTextSize(size);
	const fontWeight = bold ? 'bold' : 'normal';
	return <Text style={{ color: textColour, fontSize: textSize, fontWeight }}>{text}</Text>;
};
