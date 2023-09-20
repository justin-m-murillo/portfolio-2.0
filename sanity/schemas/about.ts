import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'slogan',
      title: 'Slogan',
      type: 'array',
      of: [{type: 'string'}]
    }),
    defineField({
      name: 'mission',
      title: 'Mission',
      type: 'array',
      of: [{type: 'string'}]
    }),
    defineField({
      name: 'objectives',
      title: 'Objectives',
      type: 'array',
      of: [{type: 'objective'}]
    })
  ],
})