import React from 'react'
import styled from '@emotion/styled'
import { mq } from '../../theme'
import { Link } from '../Link'

export interface DsFooterProps {
  email: string
  frameworkLinkTag?: any
  heading?: string
  menuList?: MenuList[]
  phone: string
  tagline: string
}

type MenuList = {
  label: string
  url: string
}

const StyledFooter = styled.footer(() =>
  mq({
    backgroundColor: '#262626',
    position: 'relative',
    paddingBottom: ['2rem', '2.5rem'],
    paddingTop: ['3rem', '4rem']
  })
)

const StyledContentContainer = styled.div(() =>
  mq({
    display: ['', '', 'flex'],
    gap: ['', '', '', '2rem'],
    marginBottom: ['2rem', '2rem', '2.5rem', '3.5rem']
  })
)

const StyledPrimaryColumnGroup = styled.div(() =>
  mq({
    display: ['', '', '', 'flex'],
    width: ['', '', '50%', '66.66%']
  })
)

const StyledPrimaryColumn = styled.div(() =>
  mq({
    width: ['', '', '', '50%'],
    marginBottom: ['2rem', '2rem', '2rem', '0']
  })
)

const StyledLinkContainer = styled.div(() =>
  mq({
    marginBottom: '0.75rem'
  })
)

const StyledLegalContainer = styled.div(() =>
  mq({
    display: ['', '', 'flex'],
    gap: ['', '', '2rem']
  })
)

export function DsFooter({
  email,
  frameworkLinkTag,
  heading,
  menuList,
  phone,
  tagline
}: DsFooterProps) {
  const getCurrentYear = () => {
    const date = new Date()
    return date.getFullYear()
  }

  return (
    <StyledFooter className='ds-footer ds-bg-dark'>
      <h2>{tagline}</h2>
      <StyledContentContainer>
        <StyledPrimaryColumnGroup>
          {heading && menuList && (
            <StyledPrimaryColumn>
              <p>{heading}</p>
              {menuList?.map((item) => (
                <StyledLinkContainer key={`${item.label}${item.url}`}>
                  <Link
                    frameworkLinkTag={frameworkLinkTag}
                    label={item.label}
                    url={item.url}
                    variant='Inline Link'
                  />
                </StyledLinkContainer>
              ))}
            </StyledPrimaryColumn>
          )}
        </StyledPrimaryColumnGroup>
      </StyledContentContainer>

      <StyledLegalContainer>
        <p className='ds-small-body'>
          © Rangle.io, {getCurrentYear()}. All Rights Reserved.
        </p>
        <p>{phone}</p>
        <p>{email}</p>
      </StyledLegalContainer>
    </StyledFooter>
  )
}
