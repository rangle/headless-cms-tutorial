import React from 'react'
import { Story, Meta } from '@storybook/react'
import { BlogCardGrid, BlogCardGridProps } from './BlogCardGrid'

export default {
  title: 'Components/BlogCardGrid',
  viewMode: 'docs',
  component: BlogCardGrid
} as Meta

const Template: Story<BlogCardGridProps> = (args) => (
  <BlogCardGrid {...args} />
)

const sampleArgs: BlogCardGridProps = {
  cards: [
    {
      description: 'Reduce UI inconsistencies with mixins that capture a design system’s language, Reduce UI inconsistencies with mixins that capture a design system’s language. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut temporibus laboriosam, explicabo impedit vitae commodi? A architecto tenetur optio iusto!',
      title: 'Mixin design tokens',
      slug: 'https://google.com',
      image: {
        asset: {
          _ref: "image-d7133120bee18e763d3ada7b03ce40c24157f508-917x1218-jpg"
        }
      }
    },
    {
      description: 'Reduce UI inconsistencies with mixins that capture a design system’s language, Reduce UI inconsistencies with mixins that capture a design system’s language. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure praesentium perspiciatis doloremque rem quasi alias dicta natus tenetur non exercitationem!',
      title: 'Mixin design tokens',
      slug: 'https://google.com',
      image: {
        asset: {
          _ref: "image-d7133120bee18e763d3ada7b03ce40c24157f508-917x1218-jpg"
        }
      }
    },
    {
      description: 'Reduce UI inconsistencies with mixins that capture a design system’s language, Reduce UI inconsistencies with mixins that capture a design system’s language. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsum excepturi, blanditiis ducimus molestiae tempora exercitationem inventore laboriosam? Dolorem, cum.',
      title: 'Mixin design tokens',
      slug: 'https://google.com',
      image: {
        asset: {
          _ref: "image-d7133120bee18e763d3ada7b03ce40c24157f508-917x1218-jpg"
        }
      }
    },
    {
      description: 'Reduce UI inconsistencies with mixins that capture a design system’s language, Reduce UI inconsistencies with mixins that capture a design system’s language. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur consectetur obcaecati aliquid minima exercitationem? Illo quibusdam repellat ea eos dolores.',
      title: 'Mixin design tokens',
      slug: 'https://google.com',
      image: {
        asset: {
          _ref: "image-d7133120bee18e763d3ada7b03ce40c24157f508-917x1218-jpg"
        }
      }
    }
  ]
}

export const Sample = Template.bind({})
Sample.args = sampleArgs


