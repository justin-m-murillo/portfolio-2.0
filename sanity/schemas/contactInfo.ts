import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactInfo',
  title: 'Contact Info',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string'
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image'
    }),
    defineField({
      name: 'value',
      title: 'Value',
      type: 'string',
    }),
  ]
})