import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Footer, FooterProps } from './Footer'

export default {
  component: Footer,
  title: 'Components/Footer',
  viewMode: 'docs',
} as Meta

const Template: Story<FooterProps> = (args) => (
    <Footer {...args} />
)

export const Default = Template.bind({})

const defaultArgs: FooterProps = {
  email: 'info@rangle.io',
  heading: 'Challenges',
  menuList: [
    {
      label: 'Challenge One',
      url: '/challenge/one'
    },
    {
      label: 'Challenge Two',
      url: '/challenge/two'
    },
    {
      label: 'Challenge Three',
      url: '/challenge/three'
    }
  ],
  phone: '1 416-737-1555',
  tagline: 'Making things that matter',
}

Default.args = defaultArgs
