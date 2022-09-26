import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Navigation, NavigationProps } from './Navigation'

export default {
  title: 'Components/Navigation',
  viewMode: 'docs',
  component: Navigation,
  parameters: {
    docs: { iframeHeight: 250, inlineStories: false }
  }
} as Meta


const Template: Story<NavigationProps> = (args) => {
  return (
    <div>
      <Navigation {...args} />
    </div>
  )
}

const defaultArgs: NavigationProps = {
  contactLabel: 'Talk to us',
  frameworkLinkTag: '',
  image: {
    src: 'https://res.cloudinary.com/rangle/image/upload/v1647100684/rangle.io/smlprjojskmatamnzklw.svg',
    alt: 'rangle logo',
  },
  navigationItems: [
    {
      label: 'About us',
      submenu: [
        {
          label: 'Sample 1',
          url: 'google.com'
        },
        {
          label: 'Sample 2',
          url: 'google.com'
        }
      ]
    },
    {
      label: 'Expertise',
      url: 'google.com'
    },
    {
      label: 'Services',
      submenu: [
        {
          label: 'Frontend',
          url: 'https://google.com'
        },
        {
          label: 'Design system',
          url: 'https://google.com'
        },
        {
          label: 'Headless',
          url: 'https://google.com'
        },
        {
          label: 'Software as a medical device',
          url: 'https://google.com'
        },
        {
          label: 'Agile cloud & devops',
          url: 'https://google.com'
        }
      ]
    },
    {
      label: 'Careers',
      url: 'google.com'
    },
  ]
}

export const Default = Template.bind({})
Default.args = defaultArgs
