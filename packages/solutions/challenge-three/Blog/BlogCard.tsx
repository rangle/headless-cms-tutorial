import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import { mq, theme } from '../../theme'
import { Figure } from '../Figure'
import { SanityImageProps } from '../../utils/buildSrcSet'

export interface DsBlogCardProps {
  title?: string
  frameworkLinkTag?: any
  image?: SanityImageProps
  description?: string,
  slug?: string
}

const StyledDsBlogCard: any = styled.a(
  () =>
    mq({
      display: 'flex',
      flexDirection: 'column',
      flexGrow: '1',
      width: '100%',
      cursor: 'pointer',
      textDecoration: 'none',
      color: theme.colors.grayscale.dark,
      borderRadius: '3px',
      border: `1px solid ${theme.colors.grayscale.light}`,
      ':hover': {
        boxShadow: `0 0 11px ${theme.colors.grayscale.light}`
      },
      '.blog-card-image-container': {
        maxHeight: '134px',
        height: '100%',
        overflow: 'hidden'
      }
    })
)

const StyledDsBodyContainer = styled.div(() =>
  mq({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  })
)

export function DsBlogCard({
  title,
  frameworkLinkTag,
  image,
  description,
  slug = ''
}: DsBlogCardProps) {
  const isHttp = /^http?/i.test(slug)
  const Wrapper: any = !frameworkLinkTag || isHttp ? Fragment : frameworkLinkTag

  return (
    <Wrapper href={slug} passHref className='ds-blog-card'>
      <StyledDsBlogCard
        href={slug}
        target={isHttp ? '_blank' : '_self'}
      >
        <div className='blog-card-image-container'>
          {image?.src && (
            <Figure isCover={true} src={image.src} alt={image.alt} />
          )}
        </div>
        <StyledDsBodyContainer>
          <div>
            <div>
              <h4>{title}</h4>
              <p>{description}</p>
            </div>
          </div>
        </StyledDsBodyContainer>
      </StyledDsBlogCard>
    </Wrapper>
  )
}

export default DsBlogCard
