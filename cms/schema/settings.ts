import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'settings',
	title: 'Ustawienia strony',
	type: 'document',
	fields: [
		defineField({
			name: 'companyName',
			title: 'Nazwa firmy',
			type: 'string',
			initialValue: 'Skubisuu Racing & Rent',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'phoneDisplay',
			title: 'Telefon (wyświetlany)',
			type: 'string',
			initialValue: '+48 606 885 604',
		}),
		defineField({
			name: 'phoneHref',
			title: 'Telefon (href tel:)',
			type: 'string',
			initialValue: 'tel:+48606885604',
		}),
		defineField({
			name: 'locationDisplay',
			title: 'Lokalizacja (tekst)',
			type: 'string',
			initialValue: 'Kraków, Małopolskie',
		}),
		defineField({
			name: 'mapsHref',
			title: 'Link do mapy (URL)',
			type: 'url',
			initialValue: 'https://www.google.com/maps/search/?api=1&query=Krak%C3%B3w%2C%20Ma%C5%82opolskie',
		}),
		defineField({
			name: 'serviceAreas',
			title: 'Obszar działania (lista miejscowości)',
			type: 'array',
			of: [{ type: 'string' }],
			initialValue: ['Sławków', 'Bolesław', 'Bukowno', 'Klucze', 'Olkusz', 'Dąbrowa Górnicza'],
			validation: (Rule) => Rule.min(1),
		}),
	],
});
