import React from 'react'

import styled from '@emotion/styled'
import { mq, theme } from '../../theme'
import { Figure } from '../Figure'
import { LinkProps } from '../Link'
import { SanityImageProps } from '../../utils/buildSrcSet'

export interface MediaModuleProps {
  cta?: React.ReactElement<LinkProps>
  heading: string
  subcopy: React.ReactNode
  variant: 'Media Left' | 'Media Right'
  image?: SanityImageProps
}

const StyledWrapper = styled.div(
  ({ variant, image }: { variant: string; image: any }) => {
    return mq({
      alignItems: ['', '', image ? 'center' : ''],
      display: ['', '', image ? 'flex' : ''],
      gap: ['', '', image ? '2rem' : ''],
      flexDirection: [
        '',
        image && variant === 'Media Right' ? 'row-reverse' : 'row'
      ]
    })
  }
)

const StyledTextColumn = styled.div(() =>
  mq({
    [':not(:only-child)']: {
      width: ['', '', '50%']
    }
  })
)

const StyledCtaContainer = styled.div`
  margin-top: ${theme.spacing.medium};
`

const StyledMediaColumn = styled.div(() =>
  mq({
    marginBottom: ['1.5rem', '1.5rem', '0'],
    width: ['', '', '50%']
  })
)

export function MediaModule({
  cta,
  heading,
  image,
  subcopy,
  variant
}: MediaModuleProps) {
  return (
    <StyledWrapper
      className='ds-section-spacing'
      image={image}
      variant={variant}
    >
      {image && (
        <StyledMediaColumn>
          <Figure image={image} />
        </StyledMediaColumn>
      )}
      <StyledTextColumn>
        <h2>{heading}</h2>
        {subcopy}
        {cta && <StyledCtaContainer>{cta}</StyledCtaContainer>}
      </StyledTextColumn>
    </StyledWrapper>
  )
}

export default MediaModule
