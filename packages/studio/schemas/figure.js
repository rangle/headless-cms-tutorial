import { Image } from 'phosphor-react'
import React from 'react'

export default {
  title: 'Figure',
  name: 'figure',
  icon: Image,
  type: 'object',
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image'
    },
    {
      title: 'Alt',
      name: 'alt',
      type: 'string',
      validation: (Rule) => Rule.required()
    }
  ],
  preview: {
    select: {
      image: 'src.secure_url',
      alt: 'alt'
    },
    prepare({ alt, image }) {
      return {
        title: 'Image',
        subtitle: alt,
        media: <img src={image} alt={alt} />
      }
    }
  }
}
