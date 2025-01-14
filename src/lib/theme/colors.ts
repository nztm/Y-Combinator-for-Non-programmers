import {
  blue,
  deepOrange,
  grey,
  indigo,
  pink,
  green,
  yellow,
  brown,
  deepPurple,
  cyan,
  red,
  orange
} from '@material-ui/core/colors'
import Color from 'color'

// https://material.io/design/color/the-color-system.html
export const allColors = {
  grey100: grey[100],
  grey300: grey[300],
  grey600: grey[600],
  grey700: grey[700],
  grey800: grey[800],
  grey900: grey[900],
  deepPurple50: deepPurple[50],
  deepPurple100: deepPurple[100],
  deepPurple300: deepPurple[300],
  deepPurple700: deepPurple[700],
  indigo50: indigo[50],
  indigo100: indigo[100],
  indigo200: indigo[200],
  indigo300: indigo[300],
  grey50033: Color(grey[500])
    .alpha(0.33)
    .hsl()
    .string(),
  indigo30090: Color(indigo[300])
    .alpha(0.9)
    .hsl()
    .string(),
  indigo400: indigo[400],
  indigo500: indigo[500],
  brown50: brown[50],
  brown400: brown[400],
  pink50: pink[50],
  pink100: pink[100],
  pink400: pink[400],
  pink500: pink[500],
  pink600: pink[600],
  pink700: pink[700],
  transparent: 'transparent',
  white: 'white',
  white75: Color('#fff')
    .alpha(0.75)
    .hsl()
    .string(),
  green50: green[50],
  green300: green[300],
  green400: green[400],
  green600: green[600],
  green800: green[800],
  blue50: blue[50],
  blue100: blue[100],
  blue400: blue[400],
  blue600: blue[600],
  yellow100: yellow[100],
  yellow200: yellow[200],
  yellow300: yellow[300],
  yellow400: yellow[400],
  yellow900: yellow[900],
  deepOrange50: deepOrange[50],
  deepOrange400: deepOrange[400],
  deepOrange600: deepOrange[600],
  deepOrange800: deepOrange[800],
  cyan100: cyan[100],
  red100: red[100],
  orange100: orange[100],
  codeBg: '#f2f4ff',
  codeButtonBg: '#d9ddff'
}

const colors = (x: keyof typeof allColors) => allColors[x]

export default colors
