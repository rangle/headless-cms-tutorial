import { Tag } from 'phosphor-react'

const navigationItem = {
  title: 'Navigation Item',
  name: 'navigationItem',
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
      type: 'string'
    }
  ]
}

export default {
  title: 'Navigation',
  name: 'navigation',
  type: 'document',
  icon: Tag,
  groups: [
    { title: 'Navigation', name: 'navigation' },
    { title: 'Logo', name: 'logo' },
    { title: 'Contact', name: 'contact' }
  ],
  fields: [
    {
      group: 'logo',
      title: 'Logo',
      name: 'image',
      type: 'image',
      validation: (Rule) => Rule.required()
    },
    {
      group: 'navigation',
      title: 'Navigation Items',
      name: 'navigationItems',
      type: 'array',
      of: [navigationItem]
    },
    {
      group: 'contact',
      title: 'Contact Label',
      name: 'contactLabel',
      type: 'string',
      validation: (Rule) => Rule.required()
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Navigation'
      }
    }
  }
}
