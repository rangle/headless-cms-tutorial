import { Browser } from 'phosphor-react'
import customBlock from '../lib/custom-block'

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
        customBlock(
          'codehighlight italic strong',
          'h1 h2 h3 smallBody',
          'bullet number',
          'link'
        ),
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
