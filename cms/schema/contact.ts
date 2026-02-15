import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'contact',
  title: 'Kontakt',
  type: 'document',
  fields: [
    defineField({
      name: 'pillTitle',
      title: 'Pigułka (tytuł)',
      type: 'string',
      initialValue: 'Kontakt',
    }),
    defineField({
      name: 'pillSubtitle',
      title: 'Pigułka (podtytuł)',
      type: 'string',
      initialValue: 'jesteśmy dostępni 24/7',
    }),
    defineField({
      name: 'title',
      title: 'Nagłówek strony',
      type: 'string',
      initialValue: 'Skontaktuj się z nami',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'paragraphs',
      title: 'Tekst (akapity)',
      type: 'array',
      of: [{ type: 'text' }],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: 'phoneDisplay',
      title: 'Telefon (wyświetlany)',
      type: 'string',
    }),
    defineField({
      name: 'phoneHref',
      title: 'Telefon (href tel:)',
      type: 'string',
    }),
    defineField({
      name: 'googleReviewsUrl',
      title: 'Link do opinii Google',
      type: 'url',
    }),
    defineField({
      name: 'mapEmbedUrl',
      title: 'Mapa (URL embed dla iframe)',
      type: 'url',
    }),
  ],
});