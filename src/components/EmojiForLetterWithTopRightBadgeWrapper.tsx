/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { zIndices } from 'src/lib/theme'
import TopRightBadge, {
  TopRightBadgeProps
} from 'src/components/Yc/TopRightBadge'

interface EmojiForLetterWithBottomRightBadgeWrapperProps {
  topRightBadgeType: TopRightBadgeProps['topRightBadgeType']
  children: React.ReactNode
}

const EmojiForLetterWithTopRightBadgeWrapper = ({
  topRightBadgeType,
  children
}: EmojiForLetterWithBottomRightBadgeWrapperProps) => {
  return (
    <span
      css={css`
        position: relative;
        margin-right: 0.15em;
      `}
    >
      <span
        css={[
          css`
            position: absolute;
            top: -0.15em;
            font-size: 1.3em;
            z-index: ${zIndices('badge')};
            right: -0.15em;
          `
        ]}
      >
        <TopRightBadge topRightBadgeType={topRightBadgeType} />
      </span>
      {children}
    </span>
  )
}

export default EmojiForLetterWithTopRightBadgeWrapper
