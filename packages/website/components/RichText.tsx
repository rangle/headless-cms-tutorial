import React from 'react'
import {
  PortableText,
  PortableTextBlockComponent,
  PortableTextComponents,
  PortableTextMarkComponent,
  PortableTextTypeComponent
} from '@portabletext/react'
import { PortableTextBlock } from '@portabletext/types'
import NextLink from 'next/link'
import { Figure, Quote, Link } from '../../design-system/dist'
import { SanityImageProps } from '../../design-system/src/utils/buildSrcSet';

export interface RichTextProps {
  value: PortableTextBlock[]
}

export const LargeBody: PortableTextBlockComponent = ({ children }) => {
  return <p className='ds-large-body'>{children}</p>
}

export const SmallBody: PortableTextBlockComponent = ({ children }) => {
  return <p className='ds-small-body'>{children}</p>
}

export interface FigureType {
  _type: 'figure'
  image: SanityImageProps
}

export const RTFigure: PortableTextTypeComponent<FigureType> = ({ value }) => {
  return <Figure image={value.image} />
}

export const RTCodeHighlight: PortableTextMarkComponent = ({ text }) => {
  return (
    <span className='ds-code-highlight'>{text}</span>
  )
}

interface LinkMark {
  _type: 'link'
  href: string
}

export const RTLink: PortableTextMarkComponent<LinkMark> = ({ text, value }) => {
  return (
    <Link
      frameworkLinkTag={NextLink}
      label={text}
      url={value?.href || ''}
      variant='Inline Link'
    />
  )
}

export interface QuoteType {
  _type: 'quote'
  attribution: string
  quotation: string
  image: {
    src: string
    alt: string
  }
}

export const RTQuote: PortableTextTypeComponent<QuoteType> = ({ value }) => {
  return (
    <Quote
      attribution={value.attribution}
      quotation={value.quotation}
      image={value.image}
    />
  )
}

const customComponents: PortableTextComponents = {
  block: {
    largeBody: LargeBody,
    smallBody: SmallBody
  },
  marks: {
    codeHighlight: RTCodeHighlight,
    inlineLink: RTLink
  },
  types: {
    figure: RTFigure,
    quote: RTQuote,
  }
}

export const RichText = ({ value }: RichTextProps) => {
  return (
    <div>
      <PortableText value={value} components={customComponents} />
    </div>
  )
}

export default RichText
