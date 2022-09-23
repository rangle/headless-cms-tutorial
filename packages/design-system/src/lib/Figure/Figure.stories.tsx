import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Figure, FigureProps } from './Figure'

export default {
  title: 'Components/Figure',
  viewMode: 'docs',
  argTypes: {
    as: {
      table: {
        disable: true
      }
    },
    theme: {
      table: {
        disable: true
      }
    }
  },
  component: Figure
} as Meta

const Template: Story<FigureProps> = (args) => <Figure {...args} />

const defaultArgs: FigureProps = {
  src: 'https://res.cloudinary.com/rangle/image/upload/v1646629479/rangle.io/n67h61fgrfkbgddfhmn2.jpg',
  alt: 'tester', 
  caption: 'I am a caption'
}
export const Default = Template.bind({})
Default.args = defaultArgs
