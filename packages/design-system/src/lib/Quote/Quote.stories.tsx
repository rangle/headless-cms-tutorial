import React from 'react'
import styled from '@emotion/styled'

import { Story, Meta } from '@storybook/react'
import { Quote, QuoteProps } from './Quote'
import { mq, theme } from '../../theme'

const StyledStory = styled.div(() =>
  mq({ margin: theme.spacing.medium })
)

export default {
  title: 'Components/Quote',
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
  component: Quote,
  decorators: [(Story) => <StyledStory>{Story()}</StyledStory>]
} as Meta

const Template: Story<QuoteProps> = (args) => <Quote {...args}></Quote>

export const Sample = Template.bind({})
Sample.args = {
  attribution: 'Lance Martel, CIO, Staples Canada',
  quotation: 'Rangle gave us permission to prioritize the customer because true innovation is anchored by the customer…and how we drive better experiences for them.',
  image: {
    asset: {
      _ref: "image-d7133120bee18e763d3ada7b03ce40c24157f508-917x1218-jpg"
    }
  }
}
