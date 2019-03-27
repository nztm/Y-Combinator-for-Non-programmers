import React, { useState } from 'react'
import Card from 'src/components/Card'
import { CardProps } from 'src/components/Card'
import { EpisodeCardType } from 'src/components/EpisodeCardList'
import CardActionContext from 'src/components/CardActionContext'
import useCardScroll from 'src/hooks/useCardScroll'

interface CardWrapperProps {
  slideNumber?: number
  slideCount?: number
  isLast?: boolean
  children: React.ReactNode
  preview?: React.ReactNode
  type?: EpisodeCardType['type']
  title?: React.ReactNode
  setLastVisibleCardIndex: () => void
}

export type CardAction = 'default' | 'yesSelected' | 'noSelected'

export type CardActionResult = 'default' | 'correct' | 'incorrect'

const cardActionToColor = (
  cardActionResult: CardActionResult
): CardProps['color'] | undefined =>
  ({
    default: undefined,
    correct: 'green' as 'green',
    incorrect: 'orange' as 'orange'
  }[cardActionResult])

const typeToColor = (type: EpisodeCardType['type']): CardProps['color'] =>
  type
    ? {
        yesNoQuiz: 'blue' as 'blue',
        sideNote: 'brown' as 'brown',
        warning: 'yellow' as 'yellow'
      }[type]
    : 'white'

const CardWrapper = ({
  slideNumber,
  slideCount,
  isLast,
  children,
  preview,
  type,
  setLastVisibleCardIndex,
  title
}: CardWrapperProps) => {
  const [cardActionTaken, setCardActionTaken] = useState<CardAction>('default')
  const [cardActionResult, setCardActionResult] = useState<CardActionResult>(
    'default'
  )
  const takeCardAction = (cardAction: CardAction) => {
    setCardActionTaken(cardAction)
    setLastVisibleCardIndex()
  }
  const domRef = useCardScroll<HTMLDivElement>(cardActionTaken)
  return (
    <CardActionContext.Provider
      value={{
        takeCardAction,
        cardActionTaken,
        setCardActionResult,
        cardActionResult
      }}
    >
      <div ref={domRef}>
        <Card
          {...{
            slideNumber,
            slideCount,
            isLast,
            preview,
            children,
            cardActionTaken,
            title
          }}
          color={cardActionToColor(cardActionResult) || typeToColor(type)}
        />
      </div>
    </CardActionContext.Provider>
  )
}

export default CardWrapper
