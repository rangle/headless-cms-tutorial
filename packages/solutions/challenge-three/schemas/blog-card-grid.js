import { NewspaperClipping } from 'phosphor-react'

const blogPosts = {
  title: 'Blog posts',
  name: 'blogPost',
  type: 'reference',
  to: [{ type: 'blogPost' }]
}
export default {
  title: 'Blog Card Grid',
  name: 'blogCardGrid',
  type: 'object',
  icon: NewspaperClipping,
  fields: [
    {
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [blogPosts],
      validation: (Rule) => Rule.required()
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Blog Card Grid'
      }
    }
  }
}
