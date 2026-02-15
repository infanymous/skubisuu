import type { MetadataRoute } from 'next';

const DEFAULT_SITE_URL = 'https://infanymous.github.io/skubisuu';

function getSiteUrl() {
	const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
	if (raw) {
		try {
			return new URL(raw);
		} catch {
			// fall back
		}
	}
	return new URL(DEFAULT_SITE_URL);
}

const SITE_URL = getSiteUrl();

function url(pathname: string) {
	return new URL(pathname, SITE_URL).toString();
}

export default function sitemap(): MetadataRoute.Sitemap {
	const lastModified = new Date();

	return [
		{
			url: url('/'),
			lastModified,
			changeFrequency: 'weekly',
			priority: 1,
		},
		{
			url: url('/about'),
			lastModified,
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: url('/gallery'),
			lastModified,
			changeFrequency: 'monthly',
			priority: 0.7,
		},
		{
			url: url('/contact'),
			lastModified,
			changeFrequency: 'monthly',
			priority: 0.8,
		},
	];
}
