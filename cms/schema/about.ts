import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'about',
  title: 'Oferta / O nas',
  type: 'document',
  fields: [
    defineField({
      name: 'pillTitle',
      title: 'Pigułka (tytuł)',
      type: 'string',
      initialValue: 'O nas',
    }),
    defineField({
      name: 'pillSubtitle',
      title: 'Pigułka (podtytuł)',
      type: 'string',
      initialValue: 'poznaj Skubisuu Racing & Rent',
    }),
    defineField({
      name: 'title',
      title: 'Nagłówek strony',
      type: 'string',
      validation: (Rule) => Rule.required(),
      initialValue: 'Kim jesteśmy?',
    }),
    defineField({
      name: 'lead',
      title: 'Lead (krótki opis pod nagłówkiem)',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'paragraphs',
      title: 'Treść (akapity)',
      type: 'array',
      of: [{ type: 'text' }],
      validation: (Rule) => Rule.min(1),
    }),

    defineField({
      name: 'lawetaRental',
      title: 'Wynajem lawet (sekcja)',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Tytuł',
          type: 'string',
          initialValue: 'Wynajem lawet',
        }),
        defineField({
          name: 'description',
          title: 'Opis',
          type: 'text',
        }),
        defineField({
          name: 'contactHref',
          title: 'Link kontaktowy (href)',
          type: 'string',
          initialValue: '/contact',
        }),
        defineField({
          name: 'fleet',
          title: 'Flota (tabela)',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'fleetRow',
              fields: [
                defineField({
                  name: 'name',
                  title: 'Nazwa',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'productionYear',
                  title: 'Rok prod.',
                  type: 'number',
                  validation: (Rule) => Rule.required().min(1900).max(2100),
                }),
                defineField({
                  name: 'buildYear',
                  title: 'Rok zabudowy',
                  type: 'number',
                  validation: (Rule) => Rule.required().min(1900).max(2100),
                }),
                defineField({
                  name: 'dmc',
                  title: 'DMC',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'payload',
                  title: 'Ładowność',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
              ],
            },
          ],
          validation: (Rule) => Rule.min(1),
        }),
      ],
    }),
  ],
});