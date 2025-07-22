import React from 'react';
import { TextInput, TextInputProps, View } from 'react-native';

import { theme } from '../theme';
import { YapTitle } from './YapTitle';

type YapInputProps = {
	title: string;
	placeholder: string;
	value: string;
	onChangeText: (text: string) => void;
} & TextInputProps;

export const YapInput = ({ title, placeholder, value, onChangeText, ...rest }: YapInputProps) => {
	return (
		<View>
			<YapTitle text={title} size={'extra-small'} variant={'secondary-dark'} bold />
			<TextInput
				{...rest}
				value={value}
				placeholder={placeholder}
				onChangeText={text => onChangeText(text)}
				style={{
					height: 64,
					width: '100%',
					backgroundColor: theme.fillPrimary,
					borderRadius: 16,
					borderColor: theme.borderPrimary,
					borderWidth: 4,
					fontSize: 20,
					paddingHorizontal: 16,
					color: !!value ? theme.textPrimaryDark : theme.textPrimaryExtraLight,
				}}
			/>
		</View>
	);
};
