/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { Fragment } from 'react'
import Emoji from 'src/components/Emoji'
import { fontSizes, ns, spaces } from 'src/lib/theme'

interface EmojiSeparatorProps {
  emojis: string[]
  size: 'md' | 'lg'
  spacing: 'sm' | 'md'
  Component: React.ComponentType | string
}

const EmojiSeparator = ({
  emojis,
  size,
  spacing,
  Component
}: EmojiSeparatorProps) => (
  <Component
    css={css`
      text-align: center;
      margin: ${spacing === 'sm' ? spaces('-0.5') : spaces(0.5)} 0
        ${spacing === 'sm' ? 0 : spaces(0.75)};
      font-size: ${size === 'lg' ? fontSizes(3) : fontSizes(2)};
      ${ns} {
        font-size: ${size === 'lg' ? fontSizes(4) : fontSizes(2.5)};
      }
    `}
  >
    {emojis.map((emoji, index) => (
      <Fragment key={`${emoji}${index}`}>
        <Emoji>{emoji}</Emoji>{' '}
      </Fragment>
    ))}
  </Component>
)

EmojiSeparator.defaultProps = {
  size: 'md',
  spacing: 'md',
  Component: 'div'
}

export default EmojiSeparator
