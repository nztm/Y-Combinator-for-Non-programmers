import { css, cx } from 'emotion'
import React from 'react'
import crossDarkSvg from 'src/images/cross-dark.url.svg'
import starDarkSvg from 'src/images/star-dark.url.svg'
import { colors } from 'src/lib/theme'
import { allColors } from 'src/lib/theme/colors'

interface InlineBackgroundProps {
  bgColor?: keyof typeof allColors
  bgPattern?: 'star' | 'cross'
  size?: 'md' | 'mdlg'
}

const bgPatternToSvg = (
  pattern: InlineBackgroundProps['bgPattern']
): string => {
  switch (pattern) {
    case 'star': {
      return starDarkSvg
    }
    case 'cross': {
      return crossDarkSvg
    }
  }
  throw new Error()
}

const InlineBackground: React.SFC<InlineBackgroundProps> = ({
  bgColor,
  bgPattern,
  size = 'md'
}) => (
  <span
    className={cx(
      css`
        display: inline-block;
        padding: ${size === 'mdlg' ? '0.6em' : '0.5em'};
        border: 2px solid ${colors('indigo300')};
        vertical-align: text-bottom;
      `,
      bgColor &&
        css`
          background-color: ${colors(bgColor)};
        `,
      bgPattern &&
        css`
          background-image: url(${bgPatternToSvg(bgPattern)});
          background-size: 1.5em 1.5em;
          background-position: center center;
        `
    )}
  />
)

export default InlineBackground