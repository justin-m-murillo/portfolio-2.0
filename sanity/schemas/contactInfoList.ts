import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactInfoList',
  title: 'Contact Info List',
  type: 'document',
  fields: [
    defineField({
      name: 'contacts',
      title: 'Contacts',
      type: 'array',
      of: [{type: 'contactInfo'}]
    }),
  ]
})