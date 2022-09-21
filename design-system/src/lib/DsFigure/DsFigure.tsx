import React from 'react'
import styled from '@emotion/styled'

export type DsFigureProps = {
  src: string
  alt: string
  caption?: string
  isCover?: boolean
}

const StyledFigure = styled.figure`
  height: 100%;
`

const StyledImage = styled.img<{ isCover: boolean }>`
  display: block;
  height: ${(props) => (props.isCover ? '100%' : 'auto')};
  object-fit: ${(props) => (props.isCover ? 'cover' : 'contain')};
  width: 100%;
`

export const DsFigure = ({
  src = '',
  alt = '',
  caption = '',
  isCover = false
}: DsFigureProps) => {
  const cloudinarySrc = src?.split('/upload')

  if (!cloudinarySrc || cloudinarySrc.length <= 1) {
    return null
  }

  const optimizedSrc = `${cloudinarySrc[0]}/upload/w_auto,q_auto${cloudinarySrc[1]}`

  return (
    <span className='ds-figure'>
      <StyledFigure>
        <StyledImage isCover={isCover} src={optimizedSrc} alt={alt} />
      </StyledFigure>
      {caption && <figcaption className='ds-small-body'>{caption}</figcaption>}
    </span>
  )
}