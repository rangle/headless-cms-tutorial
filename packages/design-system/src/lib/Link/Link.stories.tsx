import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Link, LinkProps } from './Link'

export default {
  title: 'Components/Link',
  viewMode: 'docs',
  component: Link
} as Meta

const Template: Story<LinkProps> = (args) => <Link {...args} />

export const Primary = Template.bind({})
const primaryArgs: LinkProps = {
  label: 'Link Button Test',
  url: 'https://google.ca',
  variant: 'Primary Button',
  direction: 'Left',
  frameworkLinkTag: ''
}
Primary.args = primaryArgs

export const Text = Template.bind({})

const textArgs: LinkProps = {
  label: 'Link Text Test',
  url: 'careers',
  variant: 'Medium Link',
  frameworkLinkTag: ''
}
Text.args = textArgs
