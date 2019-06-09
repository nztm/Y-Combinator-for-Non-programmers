/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Emoji, { EmojiProps } from 'src/components/Emoji'
import numberEmojiMapping, {
  numberEmojiMappingMultipleDigits
} from 'src/lib/numberEmojiMapping'

interface EmojiNumberProps {
  number: number
  size: EmojiProps['size']
}

const EmojiNumber = ({ number, size }: EmojiNumberProps) => {
  if (number < 10) {
    return <Emoji size={size}>{numberEmojiMapping[number]}</Emoji>
  } else {
    return (
      <span
        css={css`
          display: inline-block;
          padding-right: 0.1em;
          padding-left: 0.1em;
        `}
      >
        {numberEmojiMappingMultipleDigits[number].map((emoji, index) => (
          <Emoji
            size={size}
            key={`${emoji}-${index}`}
            cssOverrides={css`
              margin-right: -0.1em;
              margin-left: -0.1em;
            `}
          >
            {emoji}
          </Emoji>
        ))}
      </span>
    )
  }
}

EmojiNumber.defaultProps = {
  size: 'md'
}

export default EmojiNumber