import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';

import { theme } from '../theme';

export const LoadingIndicator = (props: ActivityIndicatorProps) => (
	<ActivityIndicator size={props.size ?? 'large'} color={theme.surfacePrimary} {...props} />
);
