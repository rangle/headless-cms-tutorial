import React from 'react'
import { Story, Meta } from '@storybook/react'
import { DsFigure, DsFigureProps } from './DsFigure'

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
  component: DsFigure
} as Meta

const Template: Story<DsFigureProps> = (args) => <DsFigure {...args} />

const defaultArgs: DsFigureProps = {
  src: 'https://res.cloudinary.com/rangle/image/upload/v1646629479/rangle.io/n67h61fgrfkbgddfhmn2.jpg',
  alt: 'tester', 
  caption: 'I am a caption'
}
export const Default = Template.bind({})
Default.args = defaultArgs
