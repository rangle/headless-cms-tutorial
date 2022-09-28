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
  image: {
    asset: {
      _ref: "image-d7133120bee18e763d3ada7b03ce40c24157f508-917x1218-jpg"
    }
  }
}
export const Default = Template.bind({})
Default.args = defaultArgs
