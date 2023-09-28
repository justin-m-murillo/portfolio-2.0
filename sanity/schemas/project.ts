import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{
        type: 'image',
        fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Alternative Text',
          }
        ]
      }]
    }),
    defineField({
      name: 'demoUrl',
      title: 'Demo URL',
      type: 'string',
    }),
    defineField({
      name: 'repoUrl',
      title: 'Repo URL',
      type: 'string',
    })
  ],
})
