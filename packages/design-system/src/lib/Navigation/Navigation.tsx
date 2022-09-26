import React, { createRef, useEffect, useMemo, useRef, useState } from 'react'
import styled from '@emotion/styled'
import { Figure } from '../Figure'
import { mq, theme } from '../../theme'
import { SanityImageProps } from '../../utils/buildSrcSet'

export interface NavigationProps {
  contactLabel: string
  frameworkLinkTag: any
  image: SanityImageProps
  navigationItems: NavigationItem[]
}

interface NavigationItem {
  label: string
  url?: string
  submenu?: Submenu[]
}
interface Submenu {
  label: string
  url: string
}

const navigationHeight: string = '5rem'
const StyledNav = styled.nav(() =>
  mq({
    backgroundColor: theme.colors.grayscale.white,
    borderBottom: `1px solid ${theme.colors.grayscale.light}`,
    position: 'fixed',
    top: 0,
    transition: theme.transitions.durations.fast,
    width: '100%',
    zIndex: 100
  })
)

const StyledNavWrapper = styled.div(() =>
  mq({
    alignItems: ['start', 'start', 'center'],
    display: 'flex',
    flexDirection: ['column', 'column', 'row'],
    height: ['auto', 'auto', navigationHeight],
    justifyContent: 'space-between',
    width: '100%',
    a: {
      textDecoration: 'none'
    },
    '.ds-navigation-link': {
      marginBottom: '0 !important',
      color: theme.colors.grayscale.darker,
      fontWeight: '500 !important',
      '&.ds-submenu': {
        ':hover': {
          color: theme.colors.redscale.darker
        },
        transition: theme.transitions.durations.fast
      }
    }
  })
)

const StyledNavItems = styled.div(
  ({ isMobileNavOpened }: { isMobileNavOpened: boolean }) =>
    mq({
      alignItems: ['start', 'start', 'center'],
      display: 'inherit',
      flexDirection: ['column', 'column', 'row'],
      gap: theme.spacing.medium,
      marginBottom: isMobileNavOpened
        ? [theme.spacing.small, theme.spacing.small, 0]
        : 0,
      maxHeight: isMobileNavOpened ? ['100vh', '100vh', navigationHeight] : 0,
      overflow: ['hidden', 'hidden', 'visible'],
      transition: theme.transitions.durations.medium
    })
)

const StyledLogoContainer = styled.div(() =>
  mq({
    alignItems: 'center',
    display: 'flex',
    height: navigationHeight,
    justifyContent: 'space-between',
    width: ['100%', '100%', 'auto']
  })
)

const StyledNavItem = styled.div(() =>
  mq({
    position: 'relative'
  })
)

const StyledNavItemWrapper = styled.span(
  () =>
    mq({
      alignItems: 'center',
      borderBottom: [0, 0, `${theme.colors.grayscale.white} 2px solid`],
      cursor: 'pointer',
      display: 'flex',
      gap: '0.5rem',
      ':hover': {
        borderBottom: [0, 0, `${theme.colors.grayscale.darker} 2px solid`]
      }
    })
)

const StyledContact = styled.div(() =>
  mq({
    border: `1px solid ${theme.colors.grayscale.darker}`,
    cursor: 'pointer',
    display: ['none', 'none', 'flex'],
    marginBottom: '0 !important',
    padding: theme.spacing.xSmall,
    transition: theme.transitions.durations.medium,
    whiteSpace: 'nowrap',
    ':hover': {
      '*': {
        color: theme.colors.grayscale.white
      },
      backgroundColor: theme.colors.redscale.darker,
      borderColor: theme.colors.redscale.darker
    }
  })
)

const SubmenuIcon = (props: any) => (
  <svg
    width={11}
    height={5}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='m.5 5 5-5 5 5H.5Z' fill='#D44527' />
  </svg>
)

const HamburgerIcon = (props: any) => (
  <svg width={100} height={100} {...props}>
    <path
      className='ds-hamburger-line ds-hamburger-line1'
      d='M20 29h60s14.499-.183 14.533 37.711c.01 11.27-3.567 14.96-9.274 14.958C79.552 81.668 75 74.999 75 74.999L25 25'
    />
    <path className='ds-hamburger-line ds-hamburger-line2' d='M20 50h60' />
    <path
      className='ds-hamburger-line ds-hamburger-line3'
      d='M20 71h60s14.499.183 14.533-37.711c.01-11.27-3.567-14.96-9.274-14.958-5.707.001-10.259 6.67-10.259 6.67L25 75'
    />
  </svg>
)

const StyledHamburgerIcon = styled(HamburgerIcon)(() => {
  return mq({
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    display: ['flex', 'flex', 'none'],
    marginRight: '-1.5rem',
    padding: 0,
    transform: 'scale(0.4)',
    '.ds-hamburger-line': {
      fill: 'none',
      stroke: theme.colors.grayscale.darker,
      strokeWidth: 6,
      transition:
        'stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1)'
    },
    '.ds-hamburger-line1': {
      strokeDasharray: '60 207',
      strokeWidth: 6
    },
    '.ds-hamburger-line2': {
      strokeDasharray: '60 60',
      strokeWidth: 6
    },
    '.ds-hamburger-line3': {
      strokeDasharray: '60 207',
      strokeWidth: 6
    },
    '&.ds-opened-hamburger > .ds-hamburger-line1': {
      strokeDasharray: '90 207',
      strokeDashoffset: -134,
      strokeWidth: 6
    },
    '&.ds-opened-hamburger > .ds-hamburger-line2': {
      strokeDasharray: '1 60',
      strokeDashoffset: -30,
      strokeWidth: 6
    },
    '&.ds-opened-hamburger > .ds-hamburger-line3': {
      strokeDasharray: '90 207',
      strokeDashoffset: -134,
      strokeWidth: 6
    }
  })
})

const StyledButton = styled.button(() =>
  mq({
    border: 0,
    backgroundColor: 'transparent',
    cursor: 'pointer',
    padding: 0
  })
)

const StyledSpacing = styled.div(() =>
  mq({
    marginBottom: navigationHeight
  })
)

export function Navigation({
  contactLabel,
  frameworkLinkTag,
  image,
  navigationItems
}: NavigationProps) {
  // States
  const [isMobileNavOpened, setIsMobileNavOpened] = useState<boolean>(false)
  const [lastScrollY, setLastScrollY] = useState<number>(0)

  // Refs
  const navigationRef = useRef<HTMLDivElement>(null)
  const navigationItemsRef = useRef<HTMLDivElement>(null)
  const submenuRefs = useRef<HTMLUListElement[]>([])
  submenuRefs.current = navigationItems.map(
    (_, i) => submenuRefs.current[i] ?? createRef()
  )

  const Link: any = frameworkLinkTag ? frameworkLinkTag : 'a'

  // Track window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobileNavOpened(false)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [navigationItemsRef])

  // Track Scroll to hide/show navbar
  useEffect(() => {
    const toggleNavBarVisibility = () => {
      if (navigationRef.current) {
        const tabletSize = Number(theme.mediaQuery.tablet.replace('px', ''))
        if (
          window.scrollY > 100 &&
          window.scrollY > lastScrollY &&
          lastScrollY != 0 &&
          window.innerWidth >= tabletSize
        ) {
          navigationRef.current.style.top = `-${navigationHeight}`
        } else if (window.scrollY < lastScrollY) {
          navigationRef.current.style.top = '0px'
        }
      }
      setLastScrollY(window.scrollY)
    }
    window.addEventListener('scroll', toggleNavBarVisibility)
    return () => {
      window.removeEventListener('scroll', toggleNavBarVisibility)
    }
  }, [lastScrollY])

  // Get Nav Item Heading Logic
  const getNavItemHeading = (navItem: NavigationItem) => {
    return (
      <Link href={navItem.url} passHref>
        <a className='ds-small-body ds-navigation-link'>{navItem.label}</a>
      </Link>
    )
  }

  console.log({image})

  return (
    <>
      <StyledNav ref={navigationRef} className='ds-navigation'>
        <StyledNavWrapper>
          {/* Logo Container -- For mobile it will appear Hamburger Icon */}
          <StyledLogoContainer>
            <Link href='/' passhref>
              <a>
                <Figure image={image} />
              </a>
            </Link>
            <StyledHamburgerIcon
              className={`${isMobileNavOpened ? 'ds-opened-hamburger' : ''}`}
              onClick={() => setIsMobileNavOpened(!isMobileNavOpened)}
            />
          </StyledLogoContainer>

          {/* Navigation Items, they are all centered */}
          <StyledNavItems
            isMobileNavOpened={isMobileNavOpened}
            ref={navigationItemsRef}
          >
            {navigationItems.map((navItem) => {
              return (
                <StyledNavItem
                  key={`NavItem-${navItem.label}`}
                >
                  <StyledNavItemWrapper>
                    {getNavItemHeading(navItem)}
                  </StyledNavItemWrapper>
                </StyledNavItem>
              )
            })}
          </StyledNavItems>

          {/* Contact us -- For Mobile, this button is not going to appear */}
          <StyledContact>
            <Link href='/contact-us' passHref>
              <a className='ds-small-body ds-navigation-link'>{contactLabel}</a>
            </Link>
          </StyledContact>
        </StyledNavWrapper>
      </StyledNav>
      <StyledSpacing />
    </>
  )
}
export default Navigation
