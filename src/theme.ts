import {Theme} from "./types";

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

const lightTheme: Theme = {
    fillPrimary: colours.offWhite,
    TextPrimaryDark: addOpacity(colours.darkGreen, 90),
    textPrimaryLight: addOpacity(colours.darkGreen, 75),
    TextPrimaryExtraLight: addOpacity(colours.darkGreen, 25),
    TextContrastLight: addOpacity(colours.offWhite, 90),
    textContrastDark: addOpacity(colours.offWhite, 75),
    surfacePrimary: colours.lightGreen,
    surfacePrimary50: addOpacity(colours.lightGreen, 50),
    surfaceAccentPrimary: colours.darkGreen,
    borderPrimary: addOpacity(colours.green, 10),
    borderSecondary: colours.offWhite,
    surfaceSecondary: colours.green,
    surfaceSecondary50: addOpacity(colours.green, 50),
    surfaceSecondary10: addOpacity(colours.green, 10),
};

const darkTheme: Theme = {
    fillPrimary: colours.offWhite,
    TextPrimaryDark: addOpacity(colours.lightGreen, 90),
    textPrimaryLight: addOpacity(colours.lightGreen, 75),
    TextPrimaryExtraLight: addOpacity(colours.lightGreen, 25),
    TextContrastLight: addOpacity(colours.darkGreen, 90),
    textContrastDark: addOpacity(colours.darkGreen, 75),
    surfacePrimary: colours.darkGreen,
    surfacePrimary50: addOpacity(colours.darkGreen, 50),
    surfaceAccentPrimary: colours.darkGreen,
    borderPrimary: addOpacity(colours.green, 10),
    borderSecondary: colours.offWhite,
    surfaceSecondary: colours.green,
    surfaceSecondary50: addOpacity(colours.green, 50),
    surfaceSecondary10: addOpacity(colours.green, 10),
};

export const theme = lightTheme;
