import { defineType } from 'sanity';

export default defineType({
  name: 'gallery',
  title: 'Galeria',
  type: 'document',
  fields: [
    {
      name: 'pillTitle',
      title: 'Pigułka (tytuł)',
      type: 'string',
      initialValue: 'Galeria',
    },
    {
      name: 'pillSubtitle',
      title: 'Pigułka (podtytuł)',
      type: 'string',
      initialValue: 'nasze realizacje',
    },
    {
      name: 'title',
      title: 'Tytuł',
      type: 'string',
      validation: Rule => Rule.required(),
      initialValue: 'Zobacz nasze realizacje',
    },
    {
      name: 'images',
      title: 'Zdjęcia',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        layout: 'grid',
      },
      validation: Rule => Rule.required().min(1),
    },
    {
      name: 'description',
      title: 'Opis',
      type: 'text',
      initialValue: 'Kilka zdjęć z naszej pracy — holowanie, pomoc drogowa i transport.',
    },
  ],
});