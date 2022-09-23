import { Browser } from 'phosphor-react'

export default {
  title: 'Home Page',
  name: 'homePage',
  type: 'document',
  icon: Browser,
  fields: [
    {
      title: 'Page Content',
      name: 'modules',
      type: 'array',
      of: [
        { type: 'quote' }
      ],
      options: {
        editModal: 'fullscreen'
      }
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
