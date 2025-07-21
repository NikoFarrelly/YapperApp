import { Theme } from './types';

const colours = {
	offWhite: '#F1FFEF',
	darkGreen: '#092F0A',
	lightGreen: '#B1F2AA',
	green: '#007800',
};

const addOpacity = (hex: string, alpha: number): string =>
	`${hex}${Math.floor(alpha * 255)
		.toString(16)
		.padStart(2, '0')}`;

export const lightTheme: Theme = {
	fillPrimary: colours.offWhite,
	fillSecondary: addOpacity(colours.lightGreen, 0.9),
	fillContrast: addOpacity(colours.darkGreen, 0.9),
	textPrimaryDark: addOpacity(colours.darkGreen, 0.9),
	textPrimaryLight: addOpacity(colours.darkGreen, 0.75),
	textPrimaryExtraLight: addOpacity(colours.darkGreen, 0.25),
	textContrastLight: addOpacity(colours.offWhite, 0.9),
	textContrastDark: addOpacity(colours.offWhite, 0.75),
	surfacePrimary: colours.lightGreen,
	surfacePrimary50: addOpacity(colours.lightGreen, 0.5),
	surfaceAccentPrimary: colours.darkGreen,
	borderPrimary: addOpacity(colours.green, 0.1),
	borderSecondary: colours.offWhite,
	surfaceSecondary: colours.green,
	surfaceSecondary50: addOpacity(colours.green, 0.5),
	surfaceSecondary10: addOpacity(colours.green, 0.1),
};

export const darkTheme: Theme = {
	fillPrimary: colours.offWhite,
	fillSecondary: addOpacity(colours.darkGreen, 0.9),
	fillContrast: addOpacity(colours.lightGreen, 0.9),
	textPrimaryDark: addOpacity(colours.lightGreen, 0.9),
	textPrimaryLight: addOpacity(colours.lightGreen, 0.75),
	textPrimaryExtraLight: addOpacity(colours.lightGreen, 0.25),
	textContrastLight: addOpacity(colours.darkGreen, 0.9),
	textContrastDark: addOpacity(colours.darkGreen, 0.75),
	surfacePrimary: colours.darkGreen,
	surfacePrimary50: addOpacity(colours.darkGreen, 0.5),
	surfaceAccentPrimary: colours.darkGreen,
	borderPrimary: addOpacity(colours.green, 0.1),
	borderSecondary: colours.offWhite,
	surfaceSecondary: colours.green,
	surfaceSecondary50: addOpacity(colours.green, 0.5),
	surfaceSecondary10: addOpacity(colours.green, 0.1),
};

export const theme = lightTheme;
