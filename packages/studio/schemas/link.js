import { LinkSimple } from 'phosphor-react'

export default {
  title: 'Link',
  name: 'link',
  icon: LinkSimple,
  type: 'object',
  fields: [
    {
      title: 'Variant',
      name: 'variant',
      type: 'string',
      initialValue: 'Primary Button',
      options: {
        list: ['Primary Button', 'Secondary Button', 'Large Link']
      }
    },
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
