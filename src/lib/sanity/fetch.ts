import { getSanityConfig } from './config';

type QueryParams = Record<string, string | number | boolean | null>;

type SanityQueryResponse<T> = {
	result: T;
};

function encodeParams(params?: QueryParams) {
	if (!params) return '';
	const entries = Object.entries(params).filter(([, v]) => v !== null && v !== undefined);
	if (entries.length === 0) return '';
	return entries
		.map(([k, v]) => `&$${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
		.join('');
}

export async function sanityFetch<T>(query: string, params?: QueryParams): Promise<T | null> {
	const config = getSanityConfig();
	if (!config) return null;

	const host = config.useCdn ? `${config.projectId}.apicdn.sanity.io` : `${config.projectId}.api.sanity.io`;
	const url = `https://${host}/v${config.apiVersion}/data/query/${config.dataset}?query=${encodeURIComponent(query)}${encodeParams(params)}&perspective=published`;

	try {
		const res = await fetch(url, {
			// Static export: build-time fetch only.
			cache: 'force-cache',
		});
		if (!res.ok) return null;
		const data = (await res.json()) as SanityQueryResponse<T>;
		return data.result ?? null;
	} catch {
		return null;
	}
}
