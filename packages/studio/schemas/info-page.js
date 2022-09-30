import { Browser } from 'phosphor-react'
import customBlock from '../lib/custom-block'

export default {
  title: 'Info Page',
  name: 'infoPage',
  type: 'document',
  icon: Browser,
  fields: [
    {
      title: 'Page Content',
      name: 'content',
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
        title: 'Info Page'
      }
    }
  }
}
