import { TouchableOpacity } from 'react-native';

import { theme } from '../theme';
import { YapText } from './YapText';

export const YapButton = ({ text, onPress }: { text: string; onPress: () => void }) => {
	return (
		<TouchableOpacity
			style={{
				backgroundColor: theme.surfacePrimary,
				height: 64,
				width: '100%',
				borderRadius: 16,
				alignItems: 'center',
				justifyContent: 'center',
			}}
			onPress={onPress}
		>
			<YapText text={text} size={'large'} bold />
		</TouchableOpacity>
	);
};
