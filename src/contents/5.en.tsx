import React from 'react'
import BottomRightBadge from 'src/components/BottomRightBadge'
import BubbleQuotes from 'src/components/BubbleQuotes'
import {
  Bold,
  Highlight,
  HighlightBold,
  Hr,
  Italic,
  Ol,
  OlLi,
  P,
  Ul,
  UlLi
} from 'src/components/ContentTags'
import CustomEmoji from 'src/components/CustomEmoji'
import Emoji from 'src/components/Emoji'
import EmojiForLetter from 'src/components/EmojiForLetter'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EmojiWithText from 'src/components/EmojiWithText'
import EpisodeCardList from 'src/components/EpisodeCardList'
import H from 'src/components/H'
import InlineBackground from 'src/components/InlineBackground'
import InlinePrioritiesLabel from 'src/components/InlinePrioritiesLabel'
import NextLessonButton from 'src/components/NextLessonButton'
import * as R from 'src/components/Runners'
import TopLeftBadgeWrapper from 'src/components/TopLeftBadgeWrapper'
import YesNoButtons from 'src/components/YesNoButtons'
import {
  InstructionFour,
  InstructionThree,
  InstructionTwo
} from 'src/contents/4.en'

const WillReturnQuote = ({ covered }: { covered?: true }) => (
  <>
    <Ul>
      <UlLi>
        <Highlight>
          On the <Bold>intermediate levels</Bold>, which will start from the
          next page, I’ll give you a <Italic>very difficult question</Italic>.
        </Highlight>
      </UlLi>
      <UlLi>
        You’ll be able to solve it by applying the rules we cover
        {covered && <>ed</>} on this page.
      </UlLi>
    </Ul>
    <P>
      <Highlight>
        I’ll return your mathboxes if you solve it.{' '}
        <CustomEmoji type="mathBox" />
      </Highlight>
    </P>
  </>
)

const AdditionalRule1Summary = () => (
  <>
    <Highlight>
      If there are multiple pairs of{' '}
      <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s,{' '}
      <Italic>start with the leftmost</Italic> pair.
    </Highlight>
  </>
)

const AdditionalRule1NotesSummary = () => (
  <>
    <Highlight>
      If there’s no pair of <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s
      on the left edge,{' '}
      <Italic>
        start with the inner pair of{' '}
        <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s.
      </Italic>
    </Highlight>
  </>
)

export const ThreeRowRules = () => (
  <>
    <Ol>
      <OlLi>
        <Highlight>
          <Bold>Start</Bold> with the pair of{' '}
          <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s.
        </Highlight>
      </OlLi>
      <OlLi>
        <Highlight>
          <Bold>Label</Bold> the middle item on the bottom row as{' '}
          <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />, and
          ignore it.
        </Highlight>
      </OlLi>
      <OlLi>
        <Highlight>
          After finishing the pair of{' '}
          <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s, the pair of{' '}
          <InlinePrioritiesLabel>2</InlinePrioritiesLabel>’s becomes{' '}
          <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s.{' '}
          <Bold>Then, repeat</Bold>.
        </Highlight>
      </OlLi>
    </Ol>
  </>
)

export const Beginner5Rules = () => (
  <>
    <P>
      <Bold>Additional Rule 1:</Bold> <AdditionalRule1Summary />
    </P>
    <R.Hykj>
      <H args={{ name: 'startWithLeftMostOneCaption' }} />
    </R.Hykj>
    <P>
      <Bold>Note:</Bold> <AdditionalRule1NotesSummary />
    </P>
    <R.Myjz>
      If there’s no pair of <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s
      on the left edge,
      <br />
      start with the inner pair of{' '}
      <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s.
    </R.Myjz>
    <Hr />
    <P>
      <Bold>Additional Rule 2:</Bold>{' '}
      <Highlight>
        If you can’t start with <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
        ’s because there’s only one item on the bottom row,{' '}
        <Italic>
          start with the pair of{' '}
          <InlinePrioritiesLabel>2</InlinePrioritiesLabel>
          ’s.
        </Italic>
      </Highlight>
    </P>
    <R.Zemy>
      <H args={{ name: 'startWithTwoCaption' }} />
    </R.Zemy>
  </>
)

const WillReturn = ({ covered }: { covered?: true }) => (
  <>
    <EmojiSeparator
      emojis={['❓', '😈', '❓']}
      noBottomMargin
      description={
        <>
          On the upcoming intermediate levels,
          <br />I will give you a <Italic>difficult</Italic> question.
          <br />
          It can be solved by applying the rules
          <br />
          we cover{covered && <>ed</>} on this page.
        </>
      }
    />
    <EmojiSeparator
      noTopMargin
      nodes={[
        <Emoji>✨</Emoji>,
        <CustomEmoji type="mathBox" />,
        <Emoji>✨</Emoji>
      ]}
      description={
        <>
          If you can solve it,
          <br />
          you’ll get your mathboxes back
        </>
      }
    />
  </>
)

export default () => (
  <EpisodeCardList
    cards={[
      {
        type: 'summary',
        title: <>This is the final beginner level</>,
        content: (
          <>
            <P>
              This is the final page of the beginner levels. Thank you for
              following along so far.
            </P>
            <P>
              <Emoji>⚠️</Emoji> <Bold>Warning:</Bold>{' '}
              <H
                args={{
                  name: 'lunchBoxPuzzle',
                  capitalize: true,
                  postfix: 's'
                }}
              />{' '}
              on this page are <Italic>much harder</Italic> than before. But I
              think you’ll still be able to solve them. Good luck!
            </P>
            <EmojiSeparator
              emojis={['⚠️', '🍱', '⚠️']}
              description={<>The puzzles are hard, but you can do it!</>}
            />
          </>
        )
      },
      {
        title: <>Lunchboxes with 3 Rows </>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        From now on, you’ll be solving much harder puzzles like
                        this one:
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Cvtc>
              <H args={{ name: 'lunchBoxPuzzle', capitalize: true }} /> with{' '}
              <Italic>3 rows</Italic>
            </R.Cvtc>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        Hmm… previously, we’ve only dealt with lunchboxes with 2
                        rows.
                      </P>
                      <P>
                        <Highlight>
                          But <Italic>this one has 3 rows</Italic> vertically.
                        </Highlight>
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        Also,{' '}
                        <Highlight>
                          there are 3 items on the bottom row
                        </Highlight>
                        : <EmojiWithText letter="a" />, a{' '}
                        <EmojiWithText letter="b" />, and another{' '}
                        <EmojiWithText letter="a" />.
                      </P>
                      <P>
                        None of the lunchboxes we saw on the last page had 3
                        items in one row.
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        Right. Also, did you realize that{' '}
                        <Highlight>
                          there are numbers like{' '}
                          <InlinePrioritiesLabel>1</InlinePrioritiesLabel> and{' '}
                          <InlinePrioritiesLabel>2</InlinePrioritiesLabel> on
                          the left edge?
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Cvtc>
              There are numbers like{' '}
              <InlinePrioritiesLabel>1</InlinePrioritiesLabel> and{' '}
              <InlinePrioritiesLabel>2</InlinePrioritiesLabel>
              <br />
              on the left edge
            </R.Cvtc>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>That’s true…</P>
                      <P>How should we solve puzzles like this?</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>I’ll show you.</P>
                      <Ol>
                        <OlLi>
                          <Bold>First:</Bold>{' '}
                          <Highlight>
                            I’ll explain how to solve lunchbox puzzles with 3
                            rows.
                          </Highlight>
                        </OlLi>
                        <OlLi>
                          <Bold>Then:</Bold>{' '}
                          <Highlight>
                            I will give you{' '}
                            <H
                              args={{
                                name: 'yesNoQuiz',
                                postfix: 'zes',
                                lowerCase: true
                              }}
                            />{' '}
                            to solve.
                          </Highlight>
                        </OlLi>
                      </Ol>
                    </>
                  )
                },
                {
                  type: 'brave',
                  children: (
                    <>
                      <P>Ok, sounds good.</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: (
          <>
            First, focus on the pair of{' '}
            <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s
          </>
        ),
        content: (
          <>
            <P>
              <Bold>The first step</Bold> in solving{' '}
              <H args={{ name: 'lunchBoxPuzzle', indefinite: true }} /> with 3
              rows is to{' '}
              <Highlight>
                focus on the pair of{' '}
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s.
              </Highlight>
            </P>
            <EmojiSeparator
              nodes={[
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>,
                <Emoji>🍱</Emoji>,
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
              ]}
              description={
                <>
                  Focus on the pair of{' '}
                  <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s
                </>
              }
            />
            <P>
              <Bold>More specifically:</Bold> You need to{' '}
              <Highlight>
                take a look at the sections that have a{' '}
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel> on their{' '}
                <Bold>top-left</Bold> corner or <Bold>bottom-left</Bold> corner.
              </Highlight>
            </P>
            <P>
              Let’s see what that means. <H args={{ name: 'pressNext' }} />
            </P>
            <R.Aaov />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        The pair of{' '}
                        <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
                        ’s became pink{' '}
                        <InlinePrioritiesLabel revert>1</InlinePrioritiesLabel>
                        ’s.
                      </P>
                      <P>
                        Also, the top row now has a darker color{' '}
                        <InlineBackground bgColor={'indigo50'} />.
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>Right. This means: </P>
                      <Ul>
                        <UlLi>
                          <Highlight>
                            <Bold>Focus</Bold> on{' '}
                            <Italic>the bottom two rows</Italic>, which
                            correspond to the pair of{' '}
                            <InlinePrioritiesLabel revert>
                              1
                            </InlinePrioritiesLabel>
                            ’s,
                          </Highlight>{' '}
                          and
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            <Bold>Ignore</Bold> the <Italic>top row</Italic> for
                            now.
                          </Highlight>
                        </UlLi>
                      </Ul>
                    </>
                  )
                }
              ]}
            />
            <R.Bcgp>
              <Bold>Focus</Bold> on <Italic>the bottom two rows</Italic>, and
              <br />
              <Bold>Ignore</Bold> the <Italic>top row</Italic> for now
            </R.Bcgp>
          </>
        )
      },
      {
        title: (
          <>
            <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcBound" /> and{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
          </>
        ),
        content: (
          <>
            <P>
              <Bold>Next:</Bold> <Highlight>we add the labels.</Highlight>{' '}
              <H args={{ name: 'pressNext' }} />
            </P>
            <R.Qxob />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        In addition to{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="callArg"
                        />{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcArg"
                        />
                        , and{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcBound"
                        />
                        …
                      </P>
                      <P>
                        <Highlight>
                          <Italic>
                            There’s a new label{' '}
                            <BottomRightBadge
                              inline
                              bottomRightBadgeType="funcUnbound"
                            />{' '}
                            for the <EmojiWithText letter="b" />.
                          </Italic>
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Pbhg>
              There’s a new label{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              <br />
              for the <EmojiWithText letter="b" />
            </R.Pbhg>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Bold>Yes, this is new:</Bold>{' '}
                        <Highlight>
                          None of{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="callArg"
                          />
                          ,{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcArg"
                          />
                          , or{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcBound"
                          />{' '}
                          apply to the <Bold>middle item</Bold> on the bottom
                          row.
                        </Highlight>
                      </P>
                      <P>
                        <Highlight>
                          In that case, we add the label{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcUnbound"
                          />{' '}
                          (for “<Bold>M</Bold>iddle”) to it.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />,
                <CustomEmoji type="singleArrow" />,
                <EmojiForLetter letter="b" />
              ]}
              description={
                <>
                  Add{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />{' '}
                  to the middle item
                  <br />
                  on the bottom row
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        I see. Then what do we do with the{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcUnbound"
                        />
                        ’s?
                      </P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: (
          <>
            Ignore{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
            ’s
          </>
        ),
        content: (
          <>
            <P>
              <Bold>Answer:</Bold>{' '}
              <Highlight>
                You can <Bold>ignore</Bold>{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                ’s for now.
              </Highlight>
            </P>
            <EmojiSeparator
              nodes={[
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />,
                <Emoji>🙄</Emoji>,
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              ]}
              description={
                <>
                  Ignore{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                  ’s for now
                </>
              }
            />
            <P>
              <Bold>Why?</Bold> Take a look at the next steps:
            </P>
            <Ul>
              <UlLi>
                <Bold>Match:</Bold>{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
                <Emoji>✅</Emoji>
              </UlLi>
              <UlLi>
                <Bold>Copy:</Bold>{' '}
                <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
                <Emoji>↘️</Emoji>{' '}
                <TopLeftBadgeWrapper topLeftBadgeType="match">
                  <BottomRightBadge inline bottomRightBadgeType="funcBound" />
                </TopLeftBadgeWrapper>
              </UlLi>
              <UlLi>
                <Bold>Remove:</Bold> <Emoji>💥</Emoji>{' '}
                <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />
              </UlLi>
            </Ul>
            <P>
              <Bold>
                None of them involves{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              </Bold>
              .{' '}
              <Highlight>
                So, while we do these next steps, you can <Bold>ignore</Bold>{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                ’s.
              </Highlight>
            </P>
            <R.Pbhg>
              <Bold>Ignore</Bold> the <EmojiWithText letter="b" /> labeled as{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              <br />
              for the next several steps
            </R.Pbhg>
            <BubbleQuotes
              quotes={[
                {
                  type: 'smile',
                  children: (
                    <>
                      <P>Got it. Let’s continue then.</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: (
          <>
            Finish the pair of{' '}
            <InlinePrioritiesLabel revert>1</InlinePrioritiesLabel>’s
          </>
        ),
        content: (
          <>
            <P>
              <Bold>Next:</Bold>{' '}
              <Highlight>
                We’ll finish the section that belongs to the pair of{' '}
                <InlinePrioritiesLabel revert>1</InlinePrioritiesLabel>’s
              </Highlight>
              .
            </P>
            <EmojiSeparator
              nodes={[
                <InlinePrioritiesLabel revert>1</InlinePrioritiesLabel>,
                <Emoji>🍱</Emoji>,
                <InlinePrioritiesLabel revert>1</InlinePrioritiesLabel>
              ]}
              description={
                <>
                  Finish the pair of{' '}
                  <InlinePrioritiesLabel revert>1</InlinePrioritiesLabel>’s
                </>
              }
            />
            <P>This will be a review of the last page.</P>
            <P>
              <Bold>First:</Bold> <InstructionTwo />{' '}
              <H args={{ name: 'pressNext' }} />
            </P>
            <R.Wwtl />
            <P>
              <Bold>Next:</Bold> <InstructionThree />
            </P>
            <R.Ltpe />
            <P>
              <Bold>Finally:</Bold> <InstructionFour />
            </P>
            <R.Apuz />
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        See, <Italic>none of the above steps involved</Italic>{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcUnbound"
                        />
                        , right?
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        I see—that’s why we can ignore{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcUnbound"
                        />{' '}
                        for now.
                      </P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: (
          <>
            <InlinePrioritiesLabel revert>1</InlinePrioritiesLabel>’s disappear,
            and <InlinePrioritiesLabel>2</InlinePrioritiesLabel>’s become{' '}
            <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s
          </>
        ),
        content: (
          <>
            <P>
              Let’s keep going! <H args={{ name: 'pressNext' }} />
            </P>
            <R.Uwma />
            <Ul>
              <UlLi>
                <BottomRightBadge inline bottomRightBadgeType="callArg" /> and{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcArg" /> are
                removed,
              </UlLi>
              <UlLi>
                <Highlight>
                  The pair of{' '}
                  <InlinePrioritiesLabel revert>1</InlinePrioritiesLabel>’s are
                  also removed, and…
                </Highlight>
              </UlLi>
              <UlLi>
                <Highlight>
                  The pair of <InlinePrioritiesLabel>2</InlinePrioritiesLabel>’s
                  became the <Italic>new</Italic> pair of{' '}
                  <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s.
                </Highlight>
              </UlLi>
            </Ul>
            <EmojiSeparator
              nodes={[
                <InlinePrioritiesLabel>2</InlinePrioritiesLabel>,
                <CustomEmoji type="singleArrow" />,
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
              ]}
            />
          </>
        )
      },
      {
        title: <>Finish the remaining part</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>We now have a simpler lunchbox.</P>
                    </>
                  )
                }
              ]}
            />
            <R.Hbbv>We now have a simpler lunchbox</R.Hbbv>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>Yes. Also, notice that:</P>
                      <Ul>
                        <UlLi>
                          The <EmojiWithText letter="b" /> was labeled as{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcUnbound"
                          />{' '}
                          earlier…
                        </UlLi>
                        <UlLi>
                          But{' '}
                          <Highlight>
                            it is now labeled as{' '}
                            <BottomRightBadge
                              inline
                              bottomRightBadgeType="funcArg"
                            />
                          </Highlight>{' '}
                          because it’s on the “<Bold>L</Bold>eft” now.
                        </UlLi>
                      </Ul>
                    </>
                  )
                }
              ]}
            />
            <R.Sgnp>
              The <EmojiWithText letter="b" /> is now labeled as{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcArg" />
            </R.Sgnp>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        Let’s keep going to the end.{' '}
                        <H args={{ name: 'pressRun' }} />
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              <H args={{ name: 'pressRun', mentionRightArrow: true }} />
            </P>
            <R.Kvso />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        We’re left with a <EmojiWithText letter="c" />.
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>That’s it! Were you able to follow?</P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>Hmm… I might need to look at it one more time.</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>Ok, let’s do a review just in case.</P>
                      <P>
                        We’ll run it from the beginning to the end using the{' '}
                        <H args={{ name: 'run' }} /> button.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              <H args={{ name: 'pressRun', mentionRightArrow: true }} />
            </P>
            <R.Beiz />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        <Bold>To summarize:</Bold>
                      </P>
                      <ThreeRowRules />
                      <P>Is this right?</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        Perfect.{' '}
                        <Highlight>
                          Let’s do a{' '}
                          <Bold>
                            <H args={{ name: 'yesNoQuiz', lowerCase: true }} />
                          </Bold>{' '}
                          to check your understanding.
                        </Highlight>
                      </P>
                    </>
                  )
                },
                {
                  type: 'brave',
                  children: (
                    <>
                      <P>Alright, bring it on!</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        type: 'yesNoQuiz',
        title: (
          <>
            <H args={{ name: 'yesNoQuiz' }} />
          </>
        ),
        content: (
          <>
            <P>
              <H args={{ name: 'lookAtThisLunchBox' }} />:
            </P>
            <R.Dkiy />
            <P>
              <H args={{ name: 'whatHappensAtTheEndQuestion' }} />
            </P>
            <R.Yiri />
            <YesNoButtons answer="yes" />
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'theAnswerIs', isYes: true }} />
          </>
        ),
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        <H
                          args={{
                            name: 'theAnswerIs',
                            isYes: true,
                            sentence: true
                          }}
                        />
                        . We should be left with a bowl of{' '}
                        <EmojiWithText letter="h" /> at the end.
                      </P>
                      <P>
                        Let’s <H args={{ name: 'run', lowerCase: true }} /> it
                        to check!
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              <H args={{ name: 'pressRun', mentionRightArrow: true }} />
            </P>
            <R.Hdxc />
            <BubbleQuotes
              quotes={[
                {
                  type: 'happy',
                  children: (
                    <>
                      <P>
                        We’re left with the <EmojiWithText letter="h" />. So{' '}
                        <H
                          args={{
                            name: 'theAnswerIs',
                            isYes: true,
                            lowerCase: true
                          }}
                        />
                        .
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>Hmm… good job!</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>Two Additional Rules</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'wink',
                  children: (
                    <>
                      <P>
                        So… <Italic>did we win?</Italic> Can you return
                        mathboxes to us now? <CustomEmoji type="mathBox" />
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Bold>Not yet.</Bold> I still haven’t given you
                        questions regarding the{' '}
                        <HighlightBold>additional rules</HighlightBold> of a
                        lunchbox.
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        <Bold>The additional rules?</Bold> What are you talking
                        about?
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>Well, take a look at the following lunchbox:</P>
                    </>
                  )
                }
              ]}
            />
            <R.Laea>
              There are two pairs of{' '}
              <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s
            </R.Laea>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        Hmm… this is new.{' '}
                        <Highlight>
                          There are two pairs of{' '}
                          <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s
                        </Highlight>
                        .
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>Next, how about this one?</P>
                    </>
                  )
                }
              ]}
            />
            <R.Gtdu>
              There’s only ONE item (a <EmojiWithText letter="b" />)<br />
              on the bottom row
            </R.Gtdu>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        This one looks new too.{' '}
                        <Highlight>
                          There’s only ONE item (a <EmojiWithText letter="b" />)
                          on the bottom row.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>You need to know about the additional rules</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        In order to solve puzzles like the above, you need to
                        know about the <Bold>additional rules</Bold> of a
                        lunchbox.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              emojis={['❓', '🍱', '❓']}
              description={
                <>
                  You need know the <Bold>additional rules</Bold>
                  <br />
                  to solve puzzles like the above
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        There are <Bold>two additional rules</Bold> you need to
                        know.
                      </P>
                      <P>
                        After explaining them, I’ll give you more{' '}
                        <H
                          args={{
                            name: 'yesNoQuiz',
                            postfix: 'zes',
                            lowerCase: true
                          }}
                        />
                        .
                      </P>
                    </>
                  )
                },
                {
                  type: 'crying',
                  children: (
                    <>
                      <P>
                        What, <Italic>more quizzes</Italic>? When will you
                        return the mathboxes to us?{' '}
                        <CustomEmoji type="mathBox" />
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>Well, here’s the deal…</P>
                      <WillReturnQuote />
                    </>
                  )
                }
              ]}
            />
            <WillReturn />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        Really? So we’re pretty close to getting our mathboxes
                        back.
                      </P>
                    </>
                  )
                },
                {
                  type: 'brave',
                  children: (
                    <>
                      <P>
                        <Bold>In that case:</Bold> Let’s finish the rest of this
                        page quickly so we can move on to the intermediate
                        levels.
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        Alright, I will explain the{' '}
                        <Bold>additional rules</Bold> then.
                      </P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: (
          <>
            Additional Rule 1: Start with the leftmost pair of{' '}
            <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s
          </>
        ),
        content: (
          <>
            <P>
              Take a look at this lunchbox, which has two pairs of{' '}
              <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
              ’s:
            </P>
            <R.Laea>
              There are two pairs of{' '}
              <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s
            </R.Laea>
            <P>
              <Bold>Additional Rule 1:</Bold>{' '}
              <Highlight>
                If there are multiple pairs of{' '}
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s,{' '}
                <Italic>start with the leftmost</Italic> pair.
              </Highlight>
            </P>
            <R.Aezk>
              Start with the <Italic>leftmost</Italic> pair
            </R.Aezk>
            <Hr />
            <P>
              <Emoji>🤔</Emoji> <Bold>Now, you might be wondering:</Bold>{' '}
              <Highlight>What labels do we use?</Highlight>
            </P>
            <EmojiSeparator
              nodes={[
                <BottomRightBadge inline bottomRightBadgeType="callArg" />,
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />,
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />,
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              ]}
              description={<>What labels do we use?</>}
            />
            <P>
              <Bold>First:</Bold> The top <EmojiWithText letter="a" /> will be
              labeled as{' '}
              <BottomRightBadge inline bottomRightBadgeType="callArg" />.
            </P>
            <R.Igrl />
            <P>
              <Bold>Second:</Bold> The bottom-left <EmojiWithText letter="b" />{' '}
              will be labeled as{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcArg" />.
            </P>
            <R.Uppk />
            <P>
              <Bold>Third:</Bold> The right <EmojiWithText letter="b" /> and the
              right <EmojiWithText letter="c" /> will be labeled as{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcBound" />.
            </P>
            <R.Qfbk />
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Bold>Note:</Bold>{' '}
                        <Highlight>
                          Any item that <Italic>touches</Italic> the{' '}
                          <Bold>right edge</Bold> of the lunchbox will be
                          labeled as{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcBound"
                          />
                          .
                        </Highlight>
                      </P>
                      <P>
                        <Bold>Therefore:</Bold> The right{' '}
                        <EmojiWithText letter="b" /> will be labeled as{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcBound"
                        />
                        , even though it <Italic>looks like</Italic> it’s in the
                        middle.
                      </P>
                      <R.Zynf>
                        The right <EmojiWithText letter="b" /> will be{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcBound"
                        />
                        <br />
                        because it touches the right edge
                      </R.Zynf>
                    </>
                  )
                }
              ]}
            />
            <P>
              <Bold>Finally:</Bold> The remaining <EmojiWithText letter="c" />{' '}
              will be labeled as{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />.
            </P>
            <R.Yfwd />
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Highlight>
                          If none of{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="callArg"
                          />
                          ,{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcArg"
                          />
                          , or{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcBound"
                          />{' '}
                          applies, then we use{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcUnbound"
                          />
                          .
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <Hr />
            <P>
              Now, the <EmojiWithText letter="b" postfix="es" /> match:
            </P>
            <R.Dtzu />
            <P>
              And the <EmojiWithText letter="a" /> gets copied:
            </P>
            <R.Vilr />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>Hmm… it’s pretty difficult.</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        The rest is simple though. Let’s{' '}
                        <H args={{ name: 'run', lowerCase: true }} /> it from
                        here to the end.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              <H args={{ name: 'pressRun' }} />
            </P>
            <R.Izgz />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        We’re left with <EmojiWithText letter="a" />.
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>Yes. Hope you were following along.</P>
                      <P>
                        Let’s do a{' '}
                        <H args={{ name: 'yesNoQuiz', lowerCase: true }} /> now.
                      </P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        type: 'yesNoQuiz',
        title: (
          <>
            <H args={{ name: 'yesNoQuiz' }} />
          </>
        ),
        content: (
          <>
            <P>
              <H args={{ name: 'lookAtThisLunchBox' }} />:
            </P>
            <R.Wcer />
            <P>
              <H args={{ name: 'whatHappensAtTheEndQuestion' }} />
            </P>
            <R.Mqvu />
            <YesNoButtons answer="no" />
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'theAnswerIs', isYes: false }} />
          </>
        ),
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        <H
                          args={{
                            name: 'theAnswerIs',
                            isYes: false,
                            sentence: true
                          }}
                        />
                        . We should be left with <EmojiWithText letter="d" />{' '}
                        instead of <EmojiWithText letter="a" />.
                      </P>
                      <P>
                        Let’s <H args={{ name: 'run', lowerCase: true }} /> it
                        to check.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              <H args={{ name: 'pressRun', mentionRightArrow: true }} />
            </P>
            <R.Thkn />
            <BubbleQuotes
              quotes={[
                {
                  type: 'happy',
                  children: (
                    <>
                      <P>
                        We’re left with <EmojiWithText letter="d" /> instead of{' '}
                        <EmojiWithText letter="a" />. So{' '}
                        <H
                          args={{
                            name: 'theAnswerIs',
                            isYes: false,
                            lowerCase: true
                          }}
                        />
                        !
                      </P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        type: 'sideNote',
        title: (
          <>
            Side Note: What if there’s no pair of{' '}
            <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s on the left edge?
          </>
        ),
        content: (
          <>
            <P>
              <Bold>Side Note:</Bold> Take a look at the following lunchbox.
            </P>
            <Ul>
              <UlLi>
                It’s similar to the one that was used for the quiz, except…
              </UlLi>
              <UlLi>
                <Highlight>
                  There’s no pair of{' '}
                  <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s on the left
                  edge.
                </Highlight>
              </UlLi>
            </Ul>
            <R.Dhzf>
              There’s no pair of{' '}
              <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s
              <br />
              on the left edge
            </R.Dhzf>
            <P>
              <Bold>In this case:</Bold>{' '}
              <Highlight>
                We just start with the inner pair of{' '}
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s.
              </Highlight>
            </P>
            <R.Mhyv>
              Start with the inner pair of{' '}
              <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s
            </R.Mhyv>
            <P>
              The rest is simple. <H args={{ name: 'pressRun' }} />
            </P>
            <R.Ayok />
            <P>
              <Bold>Summary:</Bold> <AdditionalRule1NotesSummary />
            </P>
          </>
        )
      },
      {
        title: (
          <>
            Additional Rule 2: Start with the pair of{' '}
            <InlinePrioritiesLabel>2</InlinePrioritiesLabel>’s if necessary
          </>
        ),
        content: (
          <>
            <P>
              <Bold>Next:</Bold> Take a look at this lunchbox:
            </P>
            <R.Gtdu>
              There’s only one item (a <EmojiWithText letter="b" />)<br />
              on the bottom row
            </R.Gtdu>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        Notice that{' '}
                        <Highlight>
                          there’s only one item (a <EmojiWithText letter="b" />)
                          on the bottom row
                        </Highlight>
                        .
                      </P>
                      <P>
                        What happens if we start with the pair of{' '}
                        <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s?
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        If we start with the pair of{' '}
                        <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s,{' '}
                        <Highlight>
                          <Italic>which label</Italic> (out of{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcArg"
                          />{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcBound"
                          />{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcUnbound"
                          />
                          ) should we use for the <EmojiWithText letter="b" />?
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Jmmp>
              Which label (out of{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />)
              <br />
              should we use for the <EmojiWithText letter="b" />?
            </R.Jmmp>
            <P>
              <Bold>Answer:</Bold> <Italic>None of them would work</Italic>.{' '}
              <Highlight>
                If there’s only one item on the bottom row, you can’t use any of
                the labels.
              </Highlight>
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>❌</Emoji>,
                <EmojiForLetter letter="b" />,
                <Emoji>❌</Emoji>
              ]}
              description={
                <>
                  Can’t use any of the labels for the
                  <br />
                  <EmojiWithText letter="b" />, because
                  <br />
                  it’s the only item on the bottom row
                </>
              }
            />
            <P>
              <Bold>Therefore:</Bold>{' '}
              <Highlight>
                In this scenario,{' '}
                <Italic>
                  you can’t start with the pair of{' '}
                  <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s.
                </Italic>
              </Highlight>
            </P>
            <R.Roko>
              Can’t start with the pair of{' '}
              <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s
            </R.Roko>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>Then what should we do?</P>
                    </>
                  )
                }
              ]}
            />
            <P>
              <Bold>Answer:</Bold>{' '}
              <Highlight>
                If you can’t start with the pair of{' '}
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s,{' '}
                <Italic>
                  start with the pair of{' '}
                  <InlinePrioritiesLabel>2</InlinePrioritiesLabel>’s.
                </Italic>
              </Highlight>
            </P>
            <R.Dqey>
              Start with the pair of{' '}
              <InlinePrioritiesLabel>2</InlinePrioritiesLabel>’s.
            </R.Dqey>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>I see…</P>
                      <Ul>
                        <UlLi>
                          If you start with the pair of{' '}
                          <InlinePrioritiesLabel>2</InlinePrioritiesLabel>’s,
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            We can label the <EmojiWithText letter="c" /> on the
                            top as{' '}
                            <BottomRightBadge
                              inline
                              bottomRightBadgeType="callArg"
                            />
                            , and…
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            There are two items (<EmojiWithText letter="a" />)
                            on the bottom, which can be labeled as{' '}
                            <BottomRightBadge
                              inline
                              bottomRightBadgeType="funcArg"
                            />{' '}
                            and{' '}
                            <BottomRightBadge
                              inline
                              bottomRightBadgeType="funcBound"
                            />
                            .
                          </Highlight>
                        </UlLi>
                      </Ul>
                      <R.Oork>
                        Adding labels:{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="callArg"
                        />{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcArg"
                        />{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcBound"
                        />
                      </R.Oork>
                    </>
                  )
                }
              ]}
            />
            <P>
              The rest is simple. <H args={{ name: 'pressRun' }} />
            </P>
            <R.Diis />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        We’re left with a <EmojiWithText letter="c" /> and a{' '}
                        <EmojiWithText letter="b" />.
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        Yes. We can’t take any more steps, so that’s where we
                        stop.
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>I see…</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        Alright, it’s time for another{' '}
                        <H args={{ name: 'yesNoQuiz' }} />.
                      </P>
                      <P>This will be the last quiz for this page.</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        type: 'yesNoQuiz',
        title: (
          <>
            <H args={{ name: 'yesNoQuiz' }} />
          </>
        ),
        content: (
          <>
            <P>
              <H args={{ name: 'lookAtThisLunchBox' }} />:
            </P>
            <R.Fclo />
            <P>
              <H args={{ name: 'whatHappensAtTheEndQuestion' }} />
            </P>
            <R.Rgta />
            <YesNoButtons answer="yes" />
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'theAnswerIs', isYes: true }} />
          </>
        ),
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        <H
                          args={{
                            name: 'theAnswerIs',
                            isYes: true,
                            sentence: true
                          }}
                        />
                        . I think we should be left with{' '}
                        <EmojiWithText letter="d" /> and a{' '}
                        <EmojiWithText letter="b" />.
                      </P>
                      <P>
                        Let’s <H args={{ name: 'run', lowerCase: true }} /> it
                        to check.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              <H args={{ name: 'pressRun', mentionRightArrow: true }} />
            </P>
            <R.Cuwg />
            <BubbleQuotes
              quotes={[
                {
                  type: 'happy',
                  children: (
                    <>
                      <P>
                        We’re left with <EmojiWithText letter="d" /> and a{' '}
                        <EmojiWithText letter="b" />. So{' '}
                        <H
                          args={{
                            name: 'theAnswerIs',
                            isYes: true,
                            lowerCase: true
                          }}
                        />
                        .
                      </P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        type: 'summary',
        title: (
          <>
            <H args={{ name: 'summary' }} />
          </>
        ),
        content: (
          <>
            <P>
              <Bold>
                Here’s how to solve a lunchbox puzzle with at least 3 rows.
              </Bold>
            </P>
            <ThreeRowRules />
            <R.Vdhd>Lunchbox with 3 rows</R.Vdhd>
            <Hr />
            <Beginner5Rules />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>Hmm… I don’t think I can memorize them all…</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Bold>Don’t worry:</Bold> You don’t need to memorize
                        them.
                      </P>
                      <P>
                        <Highlight>
                          You just need to know that these rules exist, and you
                          should be fine.
                        </Highlight>
                      </P>
                    </>
                  )
                },
                {
                  type: 'smile',
                  children: (
                    <>
                      <P>Ok, got it.</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>That’s it for the beginner levels!</>,
        content: (
          <>
            <EmojiSeparator emojis={['🎉', '🤗', '🎉']} />
            <BubbleQuotes
              quotes={[
                {
                  type: 'celebrate',
                  children: (
                    <>
                      <P>
                        I solved all of the{' '}
                        <H
                          args={{
                            name: 'yesNoQuiz',
                            postfix: 'zes',
                            lowerCase: true
                          }}
                        />{' '}
                        so far!
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Bold>Good for you!</Bold> And you’ve just completed the
                        beginner levels.
                      </P>
                    </>
                  )
                },
                {
                  type: 'celebrate',
                  children: (
                    <>
                      <P>Yay!</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Bold>Next up: Intermediate levels.</Bold> As I
                        mentioned earlier:
                      </P>
                      <WillReturnQuote covered />
                    </>
                  )
                }
              ]}
            />
            <WillReturn covered />
            <BubbleQuotes
              quotes={[
                {
                  type: 'brave',
                  children: (
                    <>
                      <P>Alright then. Let’s proceed to the next page!</P>
                    </>
                  )
                }
              ]}
            />
            <NextLessonButton />
          </>
        )
      }
    ]}
  />
)
