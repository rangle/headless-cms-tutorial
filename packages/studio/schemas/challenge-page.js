import customBlock from '../lib/custom-block'
import { Image } from 'phosphor-react'

export default {
  title: 'Challenge Page',
  name: 'challengePage',
  type: 'document',
  fields: [
    {
      title: 'Slug',
      name: 'slug',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      title: 'Page Content',
      name: 'content',
      type: 'array',
      of: [
        { type: 'mediaModule' }
      ]
    },
  ]
}
