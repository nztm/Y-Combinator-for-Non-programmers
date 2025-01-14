/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { maxWidths, fontSizes, colors, spaces } from 'src/lib/theme'

export const Img = ({
  size,
  alt,
  caption,
  ...props
}: JSX.IntrinsicElements['img'] & {
  size?: 'small' | 'medium'
  caption?: React.ReactNode
}) => (
  <>
    <img
      {...props}
      alt={alt}
      css={
        size
          ? css`
              max-width: ${size === 'small' ? 7 : 15}em;
              width: 100%;
              margin: ${spaces(1.5)} auto ${caption ? 0 : spaces(1.5)};
              display: block;
            `
          : css`
              max-width: 100%;
            `
      }
    />
    {caption && (
      <span
        css={css`
          margin: ${spaces(0.5)} auto ${spaces(1.5)};
          max-width: ${maxWidths('xs')};
          display: block;
          text-align: center;
          color: ${colors('grey700')};
          font-size: ${fontSizes(0.85)};
        `}
      >
        {caption}
      </span>
    )}
  </>
)

export default Img
