import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'objectives',
      title: 'Objectives',
      type: 'array',
      of: [{type: 'objective'}]
    })
  ],
})