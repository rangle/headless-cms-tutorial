import { Browser } from 'phosphor-react'

export default {
  title: 'Home Page',
  name: 'homePage',
  type: 'document',
  icon: Browser,
  fields: [
    {
      title: 'Page Content',
      name: 'content',
      type: 'array',
      of: [
        { type: 'mediaModule' },
        { type: 'quote' }
      ],
    },
    {
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Home Page'
      }
    }
  }
}
