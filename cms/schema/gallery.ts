import { defineType } from 'sanity';

export default defineType({
  name: 'gallery',
  title: 'Galeria',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tytuł',
      type: 'string',
      validation: Rule => Rule.required(),
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
    },
  ],
});