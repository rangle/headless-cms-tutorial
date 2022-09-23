import { Quotes } from 'phosphor-react'

export default {
  title: 'Quote',
  name: 'quote',
  icon: Quotes,
  type: 'object',
  fields: [
    {
      title: 'Quotation',
      name: 'quotation',
      type: 'text'
    },
    {
      title: 'Attribution',
      name: 'attribution',
      type: 'string'
    },
    // {
    //   title: 'Image',
    //   name: 'image',
    //   type: 'picture'
    // }
  ],
  preview: {
    select: {
      attribution: 'attribution'
    },
    prepare({ attribution }) {
      return {
        title: 'Quote',
        subtitle: attribution
      }
    }
  }
}
