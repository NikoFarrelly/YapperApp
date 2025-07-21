import React from 'react';
import { Text } from 'react-native';

import { theme } from '../theme';

type TextVariants =
	| 'primary-dark'
	| 'primary-light'
	| 'primary-extra-light'
	| 'contrast-light'
	| 'contrast-dark';
type TextSizes = 'small' | 'regular' | 'large';

type YapTextProps = {
	text: string;
	variant?: TextVariants;
	size?: TextSizes;
	bold?: boolean;
};

const getTextSize = (size?: TextSizes): number => {
	switch (size) {
		case 'small':
			return 14;
		default:
		case 'regular':
			return 18;
		case 'large':
			return 22;
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
		case 'contrast-light':
			return theme.textContrastLight;
		case 'contrast-dark':
			return theme.textContrastDark;
	}
};

export const YapText = ({
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
