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

export const lightTheme: Theme = {
    fillPrimary: colours.offWhite,
    textPrimaryDark: addOpacity(colours.darkGreen, 0.90),
    textPrimaryLight: addOpacity(colours.darkGreen, 0.75),
    TextPrimaryExtraLight: addOpacity(colours.darkGreen, 0.25),
    TextContrastLight: addOpacity(colours.offWhite, 0.90),
    textContrastDark: addOpacity(colours.offWhite, 0.75),
    surfacePrimary: colours.lightGreen,
    surfacePrimary50: addOpacity(colours.lightGreen, 0.50),
    surfaceAccentPrimary: colours.darkGreen,
    borderPrimary: addOpacity(colours.green, 0.10),
    borderSecondary: colours.offWhite,
    surfaceSecondary: colours.green,
    surfaceSecondary50: addOpacity(colours.green, 0.50),
    surfaceSecondary10: addOpacity(colours.green, 0.10),
};

export const darkTheme: Theme = {
    fillPrimary: colours.offWhite,
    textPrimaryDark: addOpacity(colours.lightGreen, 0.9),
    textPrimaryLight: addOpacity(colours.lightGreen, 0.75),
    TextPrimaryExtraLight: addOpacity(colours.lightGreen, 0.25),
    TextContrastLight: addOpacity(colours.darkGreen, 0.90),
    textContrastDark: addOpacity(colours.darkGreen, 0.75),
    surfacePrimary: colours.darkGreen,
    surfacePrimary50: addOpacity(colours.darkGreen, 0.50),
    surfaceAccentPrimary: colours.darkGreen,
    borderPrimary: addOpacity(colours.green, 0.10),
    borderSecondary: colours.offWhite,
    surfaceSecondary: colours.green,
    surfaceSecondary50: addOpacity(colours.green, 0.50),
    surfaceSecondary10: addOpacity(colours.green, 0.10),
};


export const theme = lightTheme;
