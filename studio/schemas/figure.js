import { Image } from 'phosphor-react'
import React from 'react'

export default {
  title: 'Figure',
  name: 'figure',
  icon: Image,
  type: 'object',
  fields: [
    // {
    //   title: 'Source',
    //   name: 'src',
    //   type: 'cloudinary.asset',
    //   validation: (Rule) => Rule.required()
    // },
    {
      title: 'Caption',
      name: 'caption',
      type: 'string'
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
