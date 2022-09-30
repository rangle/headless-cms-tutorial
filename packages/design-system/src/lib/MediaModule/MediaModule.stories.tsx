import React from 'react'
import { Story, Meta } from '@storybook/react'
import { MediaModule, MediaModuleProps } from './MediaModule'
import { Link } from '../Link'
import styled from 'styled-components'
import { mq, theme } from '../../theme'

export default {
  title: 'Components/MediaModule',
  viewMode: 'docs',
  component: MediaModule
} as Meta

const StyledDsContainer = styled.div(() =>
  mq({
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '1156px',
    padding: ['0 24px', '0 32px', '0 32px', '0']
  })
)

const Template: Story<MediaModuleProps> = (args) => (
  <div className='radius'>
    <StyledDsContainer>
      <MediaModule {...args} />
    </StyledDsContainer>
  </div>
)

const defaultArgs: MediaModuleProps = {
  heading:
    'The four non-negotiable attributes of digital experience platform success',
  subcopy:
    'Digital experiences are where customers communicate what they want, how they want it. Managing these experiences is where digital-first companies win or lose.',
  variant: 'Media Left',
  image: {
    asset: {
      _ref: "image-d7133120bee18e763d3ada7b03ce40c24157f508-917x1218-jpg"
    }
  },
  cta: (
    <Link
      label='Read more'
      url='/careers'
      variant='Primary Button'
      frameworkLinkTag=''
    />
  )
}

const noMediaArgs: MediaModuleProps = {
  heading:
    'The four non-negotiable attributes of digital experience platform success',
  subcopy:
    'Digital experiences are where customers communicate what they want, how they want it. Managing these experiences is where digital-first companies win or lose.',
  variant: 'Media Left',
  cta: (
    <Link
      label='Read more'
      url='/careers'
      variant='Primary Button'
      frameworkLinkTag=''
    />
  )
}

export const Default = Template.bind({})
Default.args = defaultArgs

export const NoMedia = Template.bind({})
NoMedia.args = noMediaArgs
