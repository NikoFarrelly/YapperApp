import { useEffect } from 'react';
import { Keyboard } from 'react-native';

export const useKeyboard = ({ onShow, onHide }: { onShow: () => void; onHide: () => void }) => {
	useEffect(() => {
		const keyboardShowingSubscription = Keyboard.addListener('keyboardDidShow', () => onShow());
		const keyboardHideSubscription = Keyboard.addListener('keyboardDidHide', () => onHide());
		return () => {
			keyboardShowingSubscription.remove();
			keyboardHideSubscription.remove();
		};
	}, []);
};
