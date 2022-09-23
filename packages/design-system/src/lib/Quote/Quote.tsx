import React from 'react'
import styled from '@emotion/styled'
import { Figure } from '../Figure'
import { mq, theme } from '../../theme'

export interface QuoteProps {
  attribution: string
  quotation: string
  image: {
    src: string
    alt: string
  }
}

const StyledQuote = styled.div(() =>
  mq({
    display: 'flex',
    flexDirection: ['column', 'column', 'row'],
    gap: theme.spacing.xSmall
  })
)

const StyledImageContainer = styled.div(() =>
  mq({
    width: ['6rem', '6rem', '8rem', '9rem']
  })
)

const StyledBlockquote = styled.blockquote(() =>
  mq({
    display: 'flex',
    margin: [0, 0, theme.spacing.xxSmall],
  })
)

const StyledTextContainer = styled.div(() =>
  mq({
    display: 'inherit',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: theme.spacing.xxSmall,
    paddingBottom: theme.spacing.xxSmall,
    paddingTop: theme.spacing.xxSmall
  })
)

const StyledCite = styled.cite(() =>
  mq({
    color: theme.colors.grayscale.medium,
    '&:before': {
      color: theme.colors.redscale.dark,
      content: '"—"',
      paddingRight: theme.spacing.xxxSmall
    }
  })
)

const SvgOpenQuote = (props: any) => (
  <svg
    width={32}
    height={27}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 13.5H7L12.5 0H8L0 13.5V27h12V13.5Zm19 0h-5L31.5 0H27l-8 13.5V27h12V13.5Z"
    />
  </svg>
)

const StyledOpenQuote = styled(SvgOpenQuote)(() => {
  return mq({
    transform: ['scale(0.75)', 'scale(0.75)', 'scale(1)'],
  })
})

export function Quote({ attribution = '', quotation, image }: QuoteProps) {
  return (
    <StyledQuote className='ds-quote ds-section-spacing'>
      <div>
        <StyledImageContainer>
          {image &&
            <Figure src={image.src} alt={image.alt} />
          }
        </StyledImageContainer>
      </div>
      <StyledBlockquote>
        <div>
          <StyledOpenQuote />
        </div>
        <StyledTextContainer>
          <h4>{quotation}”</h4>
          {attribution &&
            <StyledCite>{attribution}</StyledCite>
          }
        </StyledTextContainer>
      </StyledBlockquote>
    </StyledQuote >
  )
}

export default Quote
