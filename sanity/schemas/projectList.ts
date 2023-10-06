import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'projectList',
  title: 'Project List',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [{
        type: 'project',
      }]
    }),
  ]
})