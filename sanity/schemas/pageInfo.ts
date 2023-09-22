import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pageInfo',
  title: 'Page Info',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionId',
      title: 'Section ID',
      type: 'string'
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'array',
      of: [{type: 'string'}]
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'array',
      of: [{type: 'string'}]
    }),
  ],
})