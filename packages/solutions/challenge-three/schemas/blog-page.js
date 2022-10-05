import { Browser } from 'phosphor-react'

export default {
  title: 'Blog Page',
  name: 'blogPage',
  type: 'document',
  icon: Browser,
  groups: [
    { title: 'Settings', name: 'settings' },
    { title: 'Content', name: 'content', default: true },
  ],
  fields: [
    {
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'settings'
    },
    {
      title: 'Blog posts',
      name: 'modules',
      type: 'array',
      of: [
        { type: 'blogCardGrid' }
      ],
      group: 'content',
      options: {
        editModal: 'fullscreen'
      },
      validation: (Rule) => Rule.required()
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Blog Page'
      }
    }
  }
}
