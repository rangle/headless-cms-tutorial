import React from 'react'
import styled from '@emotion/styled'

import { Story, Meta } from '@storybook/react'
import { DsQuote, DsQuoteProps } from './DsQuote'
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
  component: DsQuote,
  decorators: [(Story) => <StyledStory>{Story()}</StyledStory>]
} as Meta

const Template: Story<DsQuoteProps> = (args) => <DsQuote {...args}></DsQuote>

export const Sample = Template.bind({})
Sample.args = {
  attribution: 'Lance Martel, CIO, Staples Canada',
  quotation: 'Rangle gave us permission to prioritize the customer because true innovation is anchored by the customer…and how we drive better experiences for them.',
  image: {
    src: 'https://res.cloudinary.com/rangle/image/upload/v1659468735/rangle.io/rangle-dev-website/Component-Quote/dj8a5blg4xrtjuosxsqt.png',
    alt: 'Staples'
  }
}
