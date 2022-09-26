import React from 'react'
import styled from '@emotion/styled'
import { buildSrcSet, SanityImageProps } from '../../utils/buildSrcSet'

export type FigureProps = {
  caption?: string
  image: SanityImageProps
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

export const Figure = ({
  image,
  isCover = false
}: FigureProps) => {
  return (
    <span className='ds-figure'>
      <StyledFigure>
        <StyledImage isCover={isCover} src={buildSrcSet(image)}  />
      </StyledFigure>
    </span>
  )
}