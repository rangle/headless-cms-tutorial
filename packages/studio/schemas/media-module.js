import React from 'react'

import { NewspaperClipping } from 'phosphor-react'

import customBlock from '../lib/custom-block.js'

export default {
  title: 'Media Module',
  name: 'mediaModule',
  type: 'object',
  icon: NewspaperClipping,
  fields: [
    {
      title: 'Variant',
      name: 'variant',
      type: 'string',
      options: {
        list: ['Media Left', 'Media Right']
      },
      initialValue: 'Media Left',
      validation: (Rule) => Rule.required()
    },
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      title: 'Subcopy',
      name: 'subcopy',
      type: 'array',
      of: [customBlock('strong italic', '', 'bullet', 'link')],
      validation: (Rule) => Rule.required()
    },
    {
      title: 'CTA',
      name: 'cta',
      type: 'link'
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image'
    }
  ],
  preview: {
    select: {
      heading: 'heading'
    },
    prepare({ heading, image }) {
      return {
        title: 'Media Module',
        subtitle: heading,
        media: image && <img src={image} alt='' />
      }
    }
  }
}
