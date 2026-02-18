export const settingsQuery = `*[_type == "settings"][0]{
	companyName,
	phoneDisplay,
	phoneHref,
	locationDisplay,
	mapsHref,
	serviceAreas
}`;

export const homeQuery = `*[_type == "home"][0]{
	hero{
		badgeLeft,
		badgeRight,
		titleLine1,
		titleLine2,
		description,
		phoneDisplay,
		phoneHref,
		primaryCtaLabel,
		secondaryCtaLabel,
		secondaryCtaHref
	},
	serviceAreas,
	services{
		title,
		description,
		tiles[]{title,desc,extra}
	},
	lawetaRentalPromo{
		title,
		description,
		linkLabel,
		linkHref
	}
}`;

export const aboutQuery = `*[_type == "about"][0]{
	pillTitle,
	pillSubtitle,
	title,
	lead,
	paragraphs,
	lawetaRental{
		title,
		description,
		contactHref,
		fleet[]{name,productionYear,buildYear,dmc,payload}
	}
}`;

export const contactQuery = `*[_type == "contact"][0]{
	pillTitle,
	pillSubtitle,
	title,
	paragraphs,
	phoneDisplay,
	phoneHref,
	googleReviewsUrl,
	mapEmbedUrl
}`;

export const galleryQuery = `*[_type == "gallery"][0]{
	pillTitle,
	pillSubtitle,
	title,
	description
}`;
