import { Href, Link } from 'expo-router';
import { Fragment, ReactNode } from 'react';
import { ButtonProps, TouchableOpacity } from 'react-native';

import { theme } from '../theme';
import { YapText } from './YapText';

type AsButton = {
	onPress: () => void;
	href?: never;
};
type AsLink = {
	onPress?: never;
	href: Href;
};
type BaseProps = {
	text: string;
	disabled?: boolean;
};

type YapButtonProps = BaseProps & (AsButton | AsLink);

const ButtonWrapper = ({ href, children }: { href?: Href; children: ReactNode }) =>
	href ? (
		<Link href={href} asChild>
			{children}
		</Link>
	) : (
		<Fragment>{children}</Fragment>
	);

export const YapButton = ({ text, onPress, href, disabled = false }: YapButtonProps) => {
	return (
		<ButtonWrapper href={href}>
			<TouchableOpacity
				style={{
					backgroundColor: disabled ? theme.surfacePrimary50 : theme.surfacePrimary,
					height: 64,
					width: '100%',
					borderRadius: 16,
					alignItems: 'center',
					justifyContent: 'center',
				}}
				onPress={onPress}
				disabled={disabled}
			>
				<YapText text={text} size={'large'} bold />
			</TouchableOpacity>
		</ButtonWrapper>
	);
};
