import React from 'react'
import { Story, Meta } from '@storybook/react'
import { BlogCard, BlogCardProps } from './BlogCard'
import { mq } from '../../theme'
import styled from 'styled-components'

export default {
  component: BlogCard,
  title: 'Components/BlogCard'
} as Meta

const StyledDsContainer = styled.div(() =>
  mq({
    maxWidth: '100vw',
    margin: 'auto',
    padding: '3rem'
  })
)

const Template: Story<BlogCardProps> = (args) => {
  return (
    <StyledDsContainer>
      <BlogCard {...args} />
    </StyledDsContainer>
  )
}

export const Sample = Template.bind({})

const sampleArgs: BlogCardProps = {
  description:
    'Here is a description',
  title: 'Blog Title',
  image: {
    asset: {
      _ref: "image-d7133120bee18e763d3ada7b03ce40c24157f508-917x1218-jpg"
    }
  },
  slug: 'google.com',
}
Sample.args = sampleArgs
