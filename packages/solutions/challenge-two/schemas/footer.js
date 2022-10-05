import { Tag } from 'phosphor-react'

const menuLink = {
  title: 'Menu Link',
  name: 'menuLink',
  type: 'object',
  fields: [
    {
      title: 'Label',
      name: 'label',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      title: 'Url',
      name: 'url',
      type: 'string',
      validation: (Rule) => Rule.required()
    }
  ]
}

export default {
  title: 'Footer',
  name: 'footer',
  type: 'document',
  icon: Tag,
  fields: [
    {
      title: 'Footer Tagline',
      name: 'tagline',
      type: 'string'
    },
    {
      title: 'Heading',
      name: 'heading',
      type: 'string'
    },
    {
      title: 'Menu List',
      name: 'menuList',
      type: 'array',
      of: [menuLink],
      group: 'columnOne'
    },
    {
      title: 'Email',
      name: 'email',
      type: 'string',
      group: 'contact'
    },
    {
      title: 'Phone',
      name: 'phone',
      type: 'string',
      group: 'contact'
    }
  ]
}
