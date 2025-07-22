import { useState } from 'react';

type HTTPRequestCodes = 'GET' | 'POST' | 'PUT' | 'DELETE';

let HEADERS: {
	Accept: string;
	'Content-Type': string;
} = {
	Accept: 'application/json',
	'Content-Type': 'application/json',
};

export const useNetworkRequest = <RequestData>(
	url: string,
	method: HTTPRequestCodes,
	data?: RequestData,
) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [response, setResponse] = useState(null);

	const request = async <RequestFunctionData>(requestProps: {
		requestData?: RequestFunctionData;
	}) => {
		setLoading(true);
		const { requestData } = requestProps;
		try {
			const body = JSON.stringify(requestData ? requestData : data);
			const config =
				method === 'GET'
					? {
							method,
							headers: HEADERS,
						}
					: {
							method,
							body,
							headers: HEADERS,
						};

			const result = await fetch(url, config);
			const json = await result.json();
			setResponse(json);
			if (error) setError(null);
			return { data: json, status: result.status };
		} catch (e) {
			console.log('Request failed with error', e);
			// @ts-expect-error // TODO setup error message properly
			setError(e);
		} finally {
			setLoading(false);
		}
	};

	return {
		loading,
		error,
		response,
		request,
	};
};
