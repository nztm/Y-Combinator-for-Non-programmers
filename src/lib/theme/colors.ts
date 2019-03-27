import {
  blue,
  deepOrange,
  grey,
  indigo,
  pink,
  brown,
  green,
  yellow
} from '@material-ui/core/colors'
import Color from 'color'

// https://material.io/design/color/the-color-system.html
export const allColors = {
  grey150: '#f2f2f2',
  grey300: grey[300],
  grey500: grey[500],
  grey600: grey[600],
  grey700: grey[700],
  grey800: grey[800],
  grey900: grey[900],
  brown50: brown[50],
  brown100: brown[100],
  brown300: brown[300],
  brown600: brown[600],
  indigo50: indigo[50],
  indigo100: indigo[100],
  indigo300: indigo[300],
  indigo400: indigo[400],
  indigo500: indigo[500],
  pink50: pink[50],
  pink400: pink[400],
  pink500: pink[500],
  pink600: pink[600],
  transparent: 'transparent',
  white: 'white',
  white66: Color('#fff')
    .alpha(0.66)
    .hsl()
    .string(),
  green50: green[50],
  green400: green[400],
  green600: green[600],
  blue50: blue[50],
  blue100: blue[100],
  blue400: blue[400],
  blue600: blue[600],
  yellow50: yellow[50],
  yellow100: yellow[100],
  yellow900: yellow[900],
  deepOrange50: deepOrange[50],
  deepOrange400: deepOrange[400],
  deepOrange600: deepOrange[600],
  deepOrange800: deepOrange[800]
}

const colors = (x: keyof typeof allColors) => allColors[x]

export default colors
