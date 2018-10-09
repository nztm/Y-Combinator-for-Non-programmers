import { css } from 'emotion'
import React from 'react'
import { colors, fontSizes, lineHeights, spaces } from 'src/lib/theme'

const InlinePrioritiesLabel: React.SFC<{ children: React.ReactNode }> = ({
  children
}) => (
  <span
    className={css`
      display: inline-block;
      vertical-align: text-bottom;
      padding: 0 ${spaces(0.25)};
      color: ${colors('indigo300')};
      font-size: ${fontSizes(0.75)};
      font-weight: bold;
      line-height: ${lineHeights(1.3)};
      border: 2px solid ${colors('indigo300')};
      background: #fff;
    `}
  >
    {children}
  </span>
)

export default InlinePrioritiesLabel
