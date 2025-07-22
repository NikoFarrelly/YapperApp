import { useState } from 'react';

import { useKeyboard } from './useKeyboard';

export const useIsKeyboardVisible = () => {
	const [isKeyboardVisible, setIsKeyboardVisible] = useState<boolean>(false);
	useKeyboard({
		onShow: () => setIsKeyboardVisible(true),
		onHide: () => setIsKeyboardVisible(false),
	});
	return isKeyboardVisible;
};
