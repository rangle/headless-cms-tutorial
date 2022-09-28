import React from 'react'
import styled from '@emotion/styled'
import { theme, mq } from '../../theme'

export type LinkProps = {
  // This is always mandatory when used in a framework. It is to enable internal linking.
  frameworkLinkTag: any
  label: string
  url: string
  variant:
  | 'Primary Button'
  | 'Secondary Button'
  | 'Small Link'
  | 'Medium Link'
  | 'Large Link'
  | 'Inline Link'
  direction?: 'Left' | 'Right'
}

export const Link = ({
  label = '',
  url = '',
  variant = 'Primary Button',
  frameworkLinkTag,
  direction = 'Right'
}: LinkProps) => {
  const isMailTo = (url: string) => /^mailto?/i.test(url)
  const isHttp = (url: string) => /^http?/i.test(url)
  const isAnchor: boolean = /^#/i.test(url)
  const isExternal: boolean = isHttp(url) || isMailTo(url)
  const CTAComponent: any =
    !frameworkLinkTag || isExternal ? 'a' : frameworkLinkTag

  const StyledLink = styled(CTAComponent)(() => {
    return mq({
      textDecoration: 'none',
      display: 'inline'
    })
  })

  const StyledDsWrapper = styled.span(() => {
    type ButtonStyles = {
      fontWeight: string | Number
      lineHeight: string | Number
      color: string
      backgroundColor: string
      padding: string[] | string
      transition: string
      border: string
      textDecoration: string
      [key: string]: any
    }
    let translate: string
    if (isExternal) {
      translate = `translateX(${direction === 'Left' ? '-2px' : '2px'
        }) translateY(-1px)`
    } else if (isAnchor) {
      translate = 'translateY(2px)'
    } else {
      translate = `translateX(${direction === 'Left' ? '-2px' : '2px'})`
    }
    const buttonStyles: ButtonStyles = {
      cursor: 'pointer',
      fontWeight: 500,
      lineHeight: 1.3,
      display: 'inline-block',
      color: theme.colors.grayscale.dark,
      backgroundColor: 'transparent',
      padding: 'auto',
      transition: theme.transitions.durations.medium,
      textDecoration: 'none',
      '.ds-bg-dark &': { color: theme.colors.grayscale.white },
      '& .ds-link-arrow': {
        transition: `transform ${theme.transitions.durations.fast}`
      },
      ':hover': {
        backgroundColor: 'transparent',
        color: theme.colors.redscale.darker,
        '& .ds-link-arrow': {
          transform: translate
        }
      },
      border: '0'
    }
    switch (variant) {
      case 'Primary Button':
        buttonStyles.color = theme.colors.grayscale.white
        buttonStyles.fontWeight = 400
        buttonStyles.backgroundColor = theme.colors.redscale.darker
        buttonStyles.padding = theme.spacing.xSmall
        buttonStyles[':hover']['backgroundColor'] = theme.colors.grayscale.white
        break
      case 'Secondary Button':
        buttonStyles.border = `1px solid ${theme.colors.grayscale.white}`
        buttonStyles.fontWeight = 400
        buttonStyles.padding = theme.spacing.xSmall
        buttonStyles[':hover']['backgroundColor'] = theme.colors.redscale.darker
        buttonStyles[':hover']['color'] = theme.colors.grayscale.white
        buttonStyles[':hover'][
          'border'
        ] = `solid 1px ${theme.colors.grayscale.white}`
        break
      case 'Large Link':
        buttonStyles.fontSize = [
          '1.125rem',
          '1.125rem',
          '1.25rem',
          '1.25rem',
        ]
        buttonStyles.display = 'inline'
        break
      case 'Medium Link':
        buttonStyles.fontSize = [
          '0.875rem',
          '0.875rem',
          '1rem',
        ]
        buttonStyles.display = 'inline'
        break
      case 'Small Link':
        buttonStyles.fontSize = [
          '0.75rem',
          '0.75rem',
          '0.875rem'
        ]
        buttonStyles.display = 'inline'
        break
      case 'Inline Link':
        buttonStyles.fontSize = 'inherit'
        buttonStyles.fontWeight = 'inherit'
        buttonStyles.lineHeight = 'inherit'
        buttonStyles.textDecoration = isExternal ? 'underline' : 'none'
        buttonStyles.display = 'inline'
        break
    }

    return mq({
      ...buttonStyles
    })
  })

  const internalProps = {
    href: url.startsWith('/') || isAnchor ? url : `/${url}`
  }

  const externalProps = {
    href: url.length > 0 ? url : null,
    target: isMailTo(url) ? '_self' : '_blank'
  }

  const LeftLinkArrow = () => {
    let arrow = '←'
    if (isExternal) {
      arrow = '↖'
    } else if (isAnchor) {
      arrow = '↓'
    }
    return (
      <span className='ds-link-arrow'>
        {arrow}
        <>&nbsp;</>
      </span>
    )
  }

  const RightLinkArrow = () => {
    let arrow = '→'
    if (isExternal) {
      arrow = '↗'
    } else if (isAnchor) {
      arrow = '↓'
    }
    return (
      <span className='ds-link-arrow'>
        <>&nbsp;</>
        {arrow}
      </span>
    )
  }

  return (
    <StyledLink
      {...(CTAComponent === 'a' ? externalProps : internalProps)}
      data-on='click'
      data-event-category='CTA'
      data-event-action='click'
      data-event-label={url}
    >
      <StyledDsWrapper className='ds-link'>
        {direction === 'Left' ? (
          <>
            <LeftLinkArrow />
            {label}
          </>
        ) : (
          <>
            {label}
            <RightLinkArrow />
          </>
        )}
      </StyledDsWrapper>
    </StyledLink>
  )
}
export default Link
