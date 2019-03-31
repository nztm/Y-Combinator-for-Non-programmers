import React from 'react'
import CardWrapper from 'src/components/CardWrapper'
import EpisodePageInitialRenderWarning from 'src/components/EpisodePageInitialRenderWarning'
import EpisodeHero from 'src/components/EpisodeHero'
import { CardProps } from 'src/components/Card'
import useConditionalCards from 'src/hooks/useConditionalCards'
import H from 'src/components/H'

export interface EpisodeCardType {
  type?: 'yesNoQuiz' | 'sideNote' | 'warning' | 'meta'
  title?: React.ReactNode
  preview?: CardProps['preview']
  content: React.ReactNode
  footer?: CardProps['footer']
}

export type EpisodeCardListType = ReadonlyArray<EpisodeCardType>

const EpisodeCardList = ({ cards }: { cards: EpisodeCardListType }) => {
  const { lastVisibleCardIndex, setLastVisibleCardIndex } = useConditionalCards(
    cards
  )
  return (
    <>
      <EpisodePageInitialRenderWarning />
      <EpisodeHero />
      {cards.map(({ title, type, content, preview, footer }, index) =>
        index <= lastVisibleCardIndex ? (
          <CardWrapper
            slideNumber={index + 1}
            slideCount={cards.length}
            key={`card${index}`}
            type={type}
            isLast={index === lastVisibleCardIndex}
            title={
              type === 'sideNote' ? (
                <>
                  <H args={{ name: 'sideNotePrefix' }} />: {title}
                </>
              ) : (
                title
              )
            }
            setLastVisibleCardIndex={setLastVisibleCardIndex}
            preview={preview}
            footer={footer}
          >
            {content}
          </CardWrapper>
        ) : null
      )}
    </>
  )
}

export default EpisodeCardList