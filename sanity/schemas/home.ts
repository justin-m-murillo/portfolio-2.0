import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
    defineField({
      name: 'intro',
      title: 'Introduction',
      type: 'string',
    }),
    defineField({
      name: 'resumeUrl',
      title: 'Resume Url',
      type: 'string',
    }),
  ],
})
