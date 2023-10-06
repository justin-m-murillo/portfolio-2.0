import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skillSet',
  title: 'Skill Set',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{type: 'skill'}]
    })
  ]
})