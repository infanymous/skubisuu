type SanityConfig = {
	projectId: string;
	dataset: string;
	apiVersion: string;
	useCdn: boolean;
};

const DEFAULT_API_VERSION = '2024-01-01';

export function getSanityConfig(): SanityConfig | null {
	const projectId = (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? process.env.SANITY_PROJECT_ID)?.trim();
	const dataset = (process.env.NEXT_PUBLIC_SANITY_DATASET ?? process.env.SANITY_DATASET)?.trim();
	const apiVersion = (process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? process.env.SANITY_API_VERSION)?.trim();

	if (!projectId || !dataset) return null;

	return {
		projectId,
		dataset,
		apiVersion: apiVersion || DEFAULT_API_VERSION,
		useCdn: true,
	};
}
