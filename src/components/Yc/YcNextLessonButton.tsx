import React from 'react'
import Emoji from 'src/components/Emoji'
import NextLessonButton from 'src/components/NextLessonButton'
import h, { allTranslations } from 'src/lib/h'
import { yc } from 'src/lib/pathHelpers'
import { remainingText } from 'src/lib/yc/numEpisodesForEachLevel'

type PrimaryTextType = 'quiz' | 'start' | 'nextPage'

interface YcNextLessonButtonProps {
  nextEpisodeNumber: number
  primaryTextType: PrimaryTextType
}

const primaryTextTypeToTranslationKey = (
  primaryTextType: PrimaryTextType
): keyof typeof allTranslations =>
  ({
    quiz: 'ycNextButtonCheckAnswerPrimaryText' as 'ycNextButtonCheckAnswerPrimaryText',
    start: 'ycNextButtonStartPrimaryText' as 'ycNextButtonStartPrimaryText',
    nextPage: 'ycNextButtonNextPagePrimaryText' as 'ycNextButtonNextPagePrimaryText'
  }[primaryTextType])

const YcNextLessonButton: React.FC<YcNextLessonButtonProps> & {
  defaultProps: Partial<YcNextLessonButtonProps>
} = ({ nextEpisodeNumber, primaryTextType }) => (
  <NextLessonButton
    href={yc(nextEpisodeNumber)}
    primaryText={<>{h(primaryTextTypeToTranslationKey(primaryTextType))}</>}
    secondaryText={
      <>
        {h('ycNextButtonSecondaryText', nextEpisodeNumber)} <Emoji>🙂</Emoji>
      </>
    }
    tertiaryText={nextEpisodeNumber > 1 && remainingText(nextEpisodeNumber)}
  />
)

YcNextLessonButton.defaultProps = {
  primaryTextType: 'quiz'
}

export default YcNextLessonButton
