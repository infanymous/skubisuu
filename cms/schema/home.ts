import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'home',
  title: 'Strona główna',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({
          name: 'badgeLeft',
          title: 'Badge (lewa część)',
          type: 'string',
          initialValue: '24/7',
        }),
        defineField({
          name: 'badgeRight',
          title: 'Badge (prawa część)',
          type: 'string',
          initialValue: 'Szybka i profesjonalna pomoc na drodze',
        }),
        defineField({
          name: 'titleLine1',
          title: 'Tytuł (linia 1)',
          type: 'string',
          validation: (Rule) => Rule.required(),
          initialValue: 'Pomoc Drogowa',
        }),
        defineField({
          name: 'titleLine2',
          title: 'Tytuł (linia 2)',
          type: 'string',
          validation: (Rule) => Rule.required(),
          initialValue: 'Skubisuu Racing & Rent',
        }),
        defineField({
          name: 'description',
          title: 'Opis',
          type: 'text',
          validation: (Rule) => Rule.required(),
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
          name: 'primaryCtaLabel',
          title: 'CTA główne (tekst)',
          type: 'string',
          initialValue: 'Zadzwoń teraz',
        }),
        defineField({
          name: 'secondaryCtaLabel',
          title: 'CTA dodatkowe (tekst)',
          type: 'string',
          initialValue: 'Poznaj naszą ofertę',
        }),
        defineField({
          name: 'secondaryCtaHref',
          title: 'CTA dodatkowe (link)',
          type: 'string',
          initialValue: '/about',
        }),
      ],
    }),

    defineField({
      name: 'serviceAreas',
      title: 'Obszar działania (lista miejscowości)',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.min(1),
    }),

    defineField({
      name: 'services',
      title: 'Usługi (sekcja z kafelkami)',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Tytuł sekcji',
          type: 'string',
          initialValue: 'Co możemy zrobić na miejscu?',
        }),
        defineField({
          name: 'description',
          title: 'Opis sekcji',
          type: 'text',
        }),
        defineField({
          name: 'tiles',
          title: 'Kafelki usług',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'serviceTile',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Tytuł',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'desc',
                  title: 'Krótki opis',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'extra',
                  title: 'Dłuższy opis',
                  type: 'text',
                  validation: (Rule) => Rule.required(),
                }),
              ],
            },
          ],
        }),
      ],
    }),

    defineField({
      name: 'lawetaRentalPromo',
      title: 'Wynajem lawet (blok promujący na stronie głównej)',
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
          name: 'linkLabel',
          title: 'Link (tekst)',
          type: 'string',
          initialValue: 'Zobacz flotę →',
        }),
        defineField({
          name: 'linkHref',
          title: 'Link (href)',
          type: 'string',
          initialValue: '/about#wynajem-lawet',
        }),
      ],
    }),
  ],
});