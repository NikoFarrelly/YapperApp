import { Context, useContext } from 'react';

export const createContextHook =
	<C,>(context: Context<C>, contextHook: string) =>
	() => {
		const createdContext = useContext(context);
		if (createdContext === undefined)
			throw new Error(`We are not within the correct context to use ${contextHook}`);
		return createdContext as NonNullable<C>;
	};
