import { colors, darken, lighten } from 'csscomp'

const black = lighten('#000', .5);
const white = darken('#fff', .5);
const PRIMARY = white
const SECONDARY = '#E90064'

const SUCCESS = '#59CE8F'

const sc = '#ff5500'
const sptfy = '#1ed760'

export const scGradient = `-webkit-linear-gradient(${darken(sc, 0)} 50%, ${darken(sc, 10)})`
export const sptfyGradient = `-webkit-linear-gradient(${darken(sptfy, 0)} 50%, ${darken(sptfy, 10)})`

export const THEME = {
  rootFontSizes: ['10px', '14px', '16px'],
  fonts: {
    base: "'Cabin', sans-serif",
    title: "'Cabin', sans-serif",
    logo: "'Teko', sans-serif",
  },
  colors: {
    black: lighten('#000', .5),
    white: darken('#fff', .5),
    primaryDark: darken(PRIMARY, .5),
    primaryLight: lighten(PRIMARY, 1),
    secondary: SECONDARY,
    secondaryDark: darken(SECONDARY, 1),
    secondaryLight: lighten(SECONDARY, 1.5),
    background: colors.grey['90'],
    color: white,
    success: SUCCESS,
    sc,
    sptfy,
    scGradient,
    sptfyGradient,
  },
  components: {
    Input: {
      default: {
        px: 0,
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        borderWidth: '1px',
        borderRadius: 0,
        color: 'white',
        paddingY: 'm',
        fontSize: '2rem'
      }
    }
  },
}
