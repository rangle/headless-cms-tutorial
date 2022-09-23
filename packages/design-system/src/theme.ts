import facepaint from 'facepaint'

export const theme = {
  colors: {
    grayscale: {
      darker: '#262626',
      dark: '#4D4D4D',
      medium: '#737373',
      light: '#D9D9D9',
      lighter: '#FAFAFA',
      white: '#FFFFFF'
    },
    redscale: {
      darker: '#D44527',
      dark: '#F65836',
      medium: '#F67055',
      light: '#F7856E',
      lighter: '#FAAE9E'
    }
  },
  mediaQuery: {
    mobile: '360px',
    tablet: '768px',
    desktop: '1440px'
  },
  spacing: {
    // ['default, '@360px', '@768px', '@1440px']
    xxxSmall: ['0.25rem', '0.25rem', '0.25rem', '0.25rem'],
    xxSmall: ['0.5rem', '0.5rem', '0.5rem', '0.5rem'],
    xSmall: ['0.75rem', '0.75rem', '0.75rem', '1rem'],
    small: ['1.25rem', '1.25rem', '1.25rem', '1.5rem'],
    medium: ['1.5rem', '1.5rem', '1.5rem', '2rem'],
    large: ['2rem', '2rem', '2rem', '2.5rem'],
    xLarge: ['3rem', '3rem', '3rem', '4rem'],
    xxLarge: ['4rem', '4rem', '4rem', '6rem'],
    xxxLarge: ['6rem', '6rem', '6rem', '8rem']
  },
  transitions: {
    durations: {
      slow: '0.75s',
      medium: '0.5s',
      fast: '0.15s'
    }
  }
}

export const mq = facepaint(
  Object.values(theme.mediaQuery).map((mq) => `@media(min-width: ${mq})`)
)
