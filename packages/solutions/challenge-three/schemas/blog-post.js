import customBlock from '../lib/custom-block'
import { Image } from 'phosphor-react'

export default {
  title: 'Blog Post',
  name: 'blogPost',
  type: 'document',
  initialValue: () => ({
    publishDate: new Date()
  }),
  fields: [
    {
      title: 'Slug',
      name: 'slug',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      group: 'content',
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      group: 'content',
      title: 'Description',
      name: 'description',
      description:
        'A brief summary of the blog content to be featured above-the-fold.',
      type: 'text'
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image'
    },
    {
      group: 'content',
      title: 'Blog Content',
      name: 'content',
      type: 'array',
      of: [
        customBlock(
          'codehighlight italic strong',
          'h2 h3 smallBody',
          'bullet number',
          'link'
        ),
        { type: 'figure', icon: Image },
        { type: 'quote' },
      ]
    }
  ]
}
