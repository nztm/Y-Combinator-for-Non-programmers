import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  HighlightBold,
  Highlight,
  Hr,
  Bold
} from 'src/components/ContentTags'
import BottomRightBadge from 'src/components/BottomRightBadge'
import TopLeftBadgeWrapper from 'src/components/TopLeftBadgeWrapper'
import BubbleQuotes from 'src/components/BubbleQuotes'
import EmojiSeparator from 'src/components/EmojiSeparator'
import CustomEmoji from 'src/components/CustomEmoji'
import Emoji from 'src/components/Emoji'
import EmojiWithText from 'src/components/EmojiWithText'
import EmojiForLetter from 'src/components/EmojiForLetter'
import * as R from 'src/components/Runners'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import H from 'src/components/H'
import NextLessonButton from 'src/components/NextLessonButton'
import InlineRunButtonShowAllSteps from 'src/components/InlineRunButtonShowAllSteps'

export const BasicRules = ({
  includeFuncUnbound
}: {
  includeFuncUnbound?: boolean
}) => (
  <>
    <P>
      1. <Bold>印をつける:</Bold>{' '}
      <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
      <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
      {includeFuncUnbound && (
        <>
          <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />{' '}
        </>
      )}
      <BottomRightBadge inline bottomRightBadgeType="funcBound" />
    </P>
    <R.Zzxj>
      <Bold>印をつける:</Bold>{' '}
      <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
      <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
      {includeFuncUnbound && (
        <>
          <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />{' '}
        </>
      )}
      <BottomRightBadge inline bottomRightBadgeType="funcBound" />
    </R.Zzxj>
    <P>
      2. <Bold>一致チェック:</Bold>{' '}
      <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
      <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
      <Emoji>✅</Emoji>
    </P>
    <R.Keck>
      <Bold>一致チェック:</Bold>{' '}
      <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
      <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
      <Emoji>✅</Emoji>
    </R.Keck>
    <P>
      3. <Bold>コピーする:</Bold>{' '}
      <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
      <Emoji>↘️</Emoji>{' '}
      <TopLeftBadgeWrapper topLeftBadgeType="match">
        <BottomRightBadge inline bottomRightBadgeType="funcBound" />
      </TopLeftBadgeWrapper>
    </P>
    <R.Qoms>
      <Bold>コピーする:</Bold>{' '}
      <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
      <Emoji>↘️</Emoji>{' '}
      <TopLeftBadgeWrapper topLeftBadgeType="match">
        <BottomRightBadge inline bottomRightBadgeType="funcBound" />
      </TopLeftBadgeWrapper>
    </R.Qoms>
    <P>
      4. <Bold>消す:</Bold> <Emoji>💥</Emoji>{' '}
      <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
      <BottomRightBadge inline bottomRightBadgeType="funcArg" />
    </P>
    <R.Mhgm>
      <Bold>消す:</Bold> <Emoji>💥</Emoji>{' '}
      <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
      <BottomRightBadge inline bottomRightBadgeType="funcArg" />
    </R.Mhgm>
    <ExpressionRunnerSeparator />
    <R.Osqo />
  </>
)

export const Unmatched = () => (
  <>
    <P>
      <BottomRightBadge inline bottomRightBadgeType="funcArg" /> と{' '}
      <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
      が一致しなかった場合、
      <HighlightBold>
        コピーはせずに、ただ{' '}
        <BottomRightBadge inline bottomRightBadgeType="callArg" /> と{' '}
        <BottomRightBadge inline bottomRightBadgeType="funcArg" /> を消す
      </HighlightBold>
      。
    </P>
    <R.Jwzh>
      <BottomRightBadge inline bottomRightBadgeType="funcArg" /> と{' '}
      <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
      が一致しなかった場合…
    </R.Jwzh>
    <ExpressionRunnerSeparator />
    <R.Knhw>
      コピーはせずに、ただ{' '}
      <BottomRightBadge inline bottomRightBadgeType="callArg" /> と
      <BottomRightBadge inline bottomRightBadgeType="funcArg" /> を消す
    </R.Knhw>
  </>
)

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>法則が分かった！</>,
        content: (
          <>
            <EmojiSeparator
              emojis={['🍱', '😁', '🍱']}
              description={<>分かったぞ！</>}
            />
            <P>
              どうやら、ラムダ村の村人たちは
              <H args={{ name: 'lunchBoxPuzzle' }} />
              の法則を見抜いたようです！
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'happy',
                  children: (
                    <>
                      <P>
                        <HighlightBold>
                          やった、法則が分かったぞ！
                        </HighlightBold>
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        なんと…本当に分かったというなら、説明してみることだな！
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
        title: <>下のふたつの料理が同じの場合</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'smile',
                  children: (
                    <>
                      <P>
                        じゃあ説明しよう。まず、
                        <HighlightBold>
                          下のふたつの料理を比べてみる
                        </HighlightBold>
                        。
                      </P>
                      <P>
                        <Highlight>
                          もし下のふたつの料理が
                          <HighlightBold>同じ</HighlightBold>なら、
                          <H args={{ name: 'run' }} />
                          したときに<HighlightBold>上にある</HighlightBold>
                          料理が残る
                        </Highlight>
                        んだ。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Vmkg>
              下の料理が同じ (両方とも <EmojiWithText letter="a" />)
            </R.Vmkg>
            <ExpressionRunnerSeparator />
            <R.Osqo>
              上にあった
              <EmojiWithText letter="b" /> が残る
            </R.Osqo>
            <Hr />
            <R.Wtup>
              下の料理が同じ (両方とも <EmojiWithText letter="f" />)
            </R.Wtup>
            <ExpressionRunnerSeparator />
            <R.Weoz>
              上にあった
              <EmojiWithText letter="g" /> と
              <EmojiWithText letter="o" /> が残る
            </R.Weoz>
            <BubbleQuotes
              quotes={[
                {
                  type: 'smile',
                  children: (
                    <>
                      <P>
                        そして、以下が <H args={{ name: 'yesNoQuiz' }} />
                        の1問目の答えだ。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Dogu>
              下の料理が同じ (両方とも
              <EmojiWithText letter="k" />)
            </R.Dogu>
            <ExpressionRunnerSeparator />
            <R.Vvjn>
              上にあった <EmojiWithText letter="l" /> が残る
            </R.Vvjn>
          </>
        )
      },
      {
        title: <>下のふたつの料理が異なる場合</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'smile',
                  children: (
                    <>
                      <P>
                        次に、
                        <HighlightBold>
                          下のふたつの料理が異なる場合
                        </HighlightBold>
                        。
                      </P>
                      <P>
                        <Highlight>
                          この場合は、
                          <H args={{ name: 'run' }} />
                          したときに<HighlightBold>右下にある</HighlightBold>
                          料理が残る
                        </Highlight>
                        んだ。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Nplf>
              下の料理が異なる (<EmojiForLetter letter="c" /> と{' '}
              <EmojiForLetter letter="d" />)
            </R.Nplf>
            <ExpressionRunnerSeparator />
            <R.Bgfl>
              右下にあった <EmojiWithText letter="d" /> が残る
            </R.Bgfl>
            <Hr />
            <R.Immq>
              下の料理が異なる (<EmojiForLetter letter="h" /> と{' '}
              <EmojiForLetter letter="i" />)
            </R.Immq>
            <ExpressionRunnerSeparator />
            <R.Cpkp>
              右下にあった <EmojiWithText letter="i" /> が残る
            </R.Cpkp>
            <BubbleQuotes
              quotes={[
                {
                  type: 'smile',
                  children: (
                    <>
                      <P>
                        そして、以下が <H args={{ name: 'yesNoQuiz' }} />
                        の2問目の答えだ。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Cowm>
              下の料理が異なる (<EmojiForLetter letter="k" /> と{' '}
              <EmojiForLetter letter="m" />)
            </R.Cowm>
            <ExpressionRunnerSeparator />
            <R.Ozxi>
              右下にあった <EmojiWithText letter="m" /> が残る
            </R.Ozxi>
            <BubbleQuotes
              quotes={[
                {
                  type: 'happy',
                  children: (
                    <>
                      <P>どうだ、これが正解だろう！</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>正解！</>,
        content: (
          <>
            <EmojiSeparator
              emojis={['🎉', '😈', '🎉']}
              description={<>その通り！</>}
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <HighlightBold>正解、まさにその通りだ！</HighlightBold>{' '}
                        <Emoji>🎉</Emoji> <Emoji>🎉</Emoji> <Emoji>🎉</Emoji>
                      </P>
                      <P>
                        今まで勉強を怠けてきたわりには、なかなかやるじゃないか。
                      </P>
                    </>
                  )
                },
                {
                  type: 'celebrate',
                  children: (
                    <>
                      <P>やった！やった！</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Highlight>だが、喜ぶのはまだ早い。</Highlight>
                      </P>
                    </>
                  )
                },
                {
                  type: 'scared',
                  children: (
                    <>
                      <P>えー、なんで？</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        次に進む前に、
                        <Highlight>
                          <H args={{ name: 'lunchBoxPuzzle' }} />
                          の法則を明確にする必要があるからな。
                        </Highlight>
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>法則を明確にする？どういうこと？</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>法則を明確にする</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        先ほどお前が言った、
                        <Highlight>
                          「下のふたつの料理を比べて、同じなら上が残る。違うなら右下が残る」というのは
                          <HighlightBold>明確さに欠ける。</HighlightBold>
                        </Highlight>
                      </P>
                      <P>
                        これから先に登場するさらに複雑なパズルを解くには、法則としては不十分なんだ。
                      </P>
                    </>
                  )
                },
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>えー、そうなのか…</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        さらに複雑なパズルを解くには、もっと法則をハッキリさせる、すなわち明確化する必要があるんだ。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              emojis={['✅', '🍱', '✅']}
              description={
                <>
                  もっと法則を明確にしないと
                  <br />
                  複雑なパズルを解けない
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
                        <Highlight>
                          というわけで、これから
                          <H args={{ name: 'lunchBoxPuzzle' }} />の
                          <HighlightBold>明確な法則</HighlightBold>を紹介する。
                        </Highlight>
                        それを理解した上で、さらに複雑なパズルを解いてもらおう。
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        うーん、よくわからないけど、とりあえずその明確な法則とやらを聞いてみよう。
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
            <H args={{ name: 'lunchBoxPuzzle' }} />
            の明確な法則
          </>
        ),
        type: 'summary',
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        では、
                        <H args={{ name: 'lunchBoxPuzzle' }} />
                        の明確な法則をまとめてみよう。全部で
                        <Highlight>4つのステップ</Highlight>があるぞ。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <BasicRules />
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>では、それぞれのステップについて解説していくぞ。</P>
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
            1. 印をつける{' '}
            <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcBound" />
          </>
        ),
        content: (
          <>
            <P>
              それぞれのステップについて、 こちらの
              <H args={{ name: 'lunchBoxPuzzle' }} />
              を使って説明していきます。
            </P>
            <R.Ilpo />
            <P>
              まず、
              <HighlightBold>
                上の料理には{' '}
                <BottomRightBadge inline bottomRightBadgeType="callArg" />
                、左の料理には{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />
                、右の料理には{' '}
                <BottomRightBadge
                  inline
                  bottomRightBadgeType="funcBound"
                />{' '}
                の印をつけます。
              </HighlightBold>
            </P>
            <EmojiSeparator
              nodes={[
                <BottomRightBadge inline bottomRightBadgeType="callArg" />,
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />,
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />
              ]}
              description={
                <>
                  <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
                  の印をつける
                </>
              }
            />
            <P>
              <H args={{ name: 'pressNext' }} />
            </P>
            <R.Ozbe />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        <EmojiWithText letter="b" />に{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="callArg"
                        />{' '}
                        の印が、下の
                        <EmojiWithText letter="a" />
                        ふたつにそれぞれ{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcArg"
                        />{' '}
                        と{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcBound"
                        />{' '}
                        の印がついた！
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
            2. 一致チェック{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
            <Emoji>✅</Emoji>
          </>
        ),
        content: (
          <>
            <P>
              続いて、
              <HighlightBold>
                <BottomRightBadge inline bottomRightBadgeType="funcArg" /> と{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
                が一致するかチェックし、一致した料理には、
                <Emoji>✅</Emoji> を付けます。
              </HighlightBold>
            </P>
            <EmojiSeparator
              nodes={[
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />,
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />,
                <Emoji>✅</Emoji>
              ]}
              description={
                <>
                  <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
                  が一致したら <Emoji>✅</Emoji> をつける
                </>
              }
            />
            <P>
              <H args={{ name: 'pressNext' }} />
            </P>
            <R.Rqjo />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcArg"
                        />{' '}
                        と{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcBound"
                        />{' '}
                        の<EmojiWithText letter="a" /> に <Emoji>✅</Emoji>{' '}
                        がついた！
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
            3. <Bold>コピーする:</Bold>{' '}
            <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
            <Emoji>↘️</Emoji>{' '}
            <TopLeftBadgeWrapper topLeftBadgeType="match">
              <BottomRightBadge inline bottomRightBadgeType="funcBound" />
            </TopLeftBadgeWrapper>
          </>
        ),
        content: (
          <>
            <P>
              続いて、
              <HighlightBold>
                <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
                の料理を、一致した{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
                の部分にコピーします。
              </HighlightBold>
            </P>
            <EmojiSeparator
              nodes={[
                <BottomRightBadge inline bottomRightBadgeType="callArg" />,
                <Emoji>↘️</Emoji>,
                <TopLeftBadgeWrapper topLeftBadgeType="match">
                  <BottomRightBadge inline bottomRightBadgeType="funcBound" />
                </TopLeftBadgeWrapper>
              ]}
              description={
                <>
                  <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
                  を一致した{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
                  にコピー
                </>
              }
            />
            <P>
              <H args={{ name: 'pressNext' }} />
            </P>
            <R.Evqx />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="callArg"
                        />
                        の
                        <EmojiWithText letter="b" />が
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcBound"
                        />
                        の部分にコピーされた！
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
            4. <Bold>消す:</Bold> <Emoji>💥</Emoji>{' '}
            <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcArg" />
          </>
        ),
        content: (
          <>
            <P>
              最後に、
              <HighlightBold>
                <BottomRightBadge inline bottomRightBadgeType="callArg" /> と{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
                が消えます。
              </HighlightBold>
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>💥</Emoji>,
                <BottomRightBadge inline bottomRightBadgeType="callArg" />,
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />
              ]}
              description={
                <>
                  <BottomRightBadge inline bottomRightBadgeType="callArg" /> と{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
                  が消える
                </>
              }
            />
            <P>
              <H args={{ name: 'pressNext' }} />
            </P>
            <R.Msiw />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="callArg"
                        />{' '}
                        と{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcArg"
                        />{' '}
                        が <Emoji>💥</Emoji> になった！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              そして、最終的に
              <EmojiWithText letter="b" /> だけになります。
              <H args={{ name: 'pressNext' }} />
            </P>
            <R.Kbnn />
            <P>以上です！</P>
          </>
        )
      },
      {
        title: <>上にふたつの料理がある場合</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        では、たとえば下の例のように、
                        <HighlightBold>
                          上にふたつの料理がある場合
                        </HighlightBold>
                        はどうなるんだろう？
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Rakk>
              上にふたつの料理がある
              <br />(<EmojiWithText letter="g" /> と
              <EmojiWithText letter="o" />)
            </R.Rakk>
            <P>
              この場合、上にある
              <EmojiWithText letter="g" /> と
              <EmojiWithText letter="o" /> には
              <HighlightBold>
                両方とも{' '}
                <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
                の印がつきます。
              </HighlightBold>
            </P>
            <R.Ycxr>
              両方とも{' '}
              <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
              の印がつく
            </R.Ycxr>
            <P>
              そして、
              <EmojiWithText letter="f" /> が一致したあとに…
            </P>
            <R.Dkdt />
            <P>
              <EmojiWithText letter="g" /> と
              <EmojiWithText letter="o" /> が
              <HighlightBold>両方ともコピーされます。</HighlightBold>
            </P>
            <R.Sxnt />
            <P>
              最後に、
              <BottomRightBadge inline bottomRightBadgeType="callArg" /> と{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcArg" /> が消え…
            </P>
            <R.Issq />
            <P>
              <EmojiWithText letter="g" /> と <EmojiWithText letter="o" />{' '}
              が残るのです。
            </P>
            <R.Weoz />
          </>
        )
      },
      {
        title: <>全てのステップを見てみましょう</>,
        content: (
          <>
            <P>
              では、最初から最後まで全てのステップを見てみましょう。こちらの「
              <HighlightBold>全ステップを表示</HighlightBold>
              」できるボタンを使って
              <H args={{ name: 'run' }} />{' '}
              すると、各ステップを自動で見ることができます。
            </P>
            <InlineRunButtonShowAllSteps>
              このボタンを使うと…
            </InlineRunButtonShowAllSteps>
            <ExpressionRunnerSeparator />
            <EmojiSeparator
              size="mdsm"
              nodes={[
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="singleArrow" />,
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="singleArrow" />,
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="singleArrow" />,
                <Emoji>🍱</Emoji>
              ]}
              description={<>各ステップを自動で見ることができる</>}
            />
            <P>
              こちらは、上にひとつの料理がある例です。
              <H args={{ name: 'pressRun', mentionRightArrow: true }} />
            </P>
            <R.Wunw />
            <P>
              こちらは、上にふたつの料理がある例です。
              <H args={{ name: 'pressRun' }} />
            </P>
            <R.Hluq />
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
            <P>というわけで、ここまでをまとめてみましょう。</P>
            <BasicRules />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>なるほど、そういう仕組みになっていたのか！</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        うむ。そして、
                        <Highlight>
                          こうやってルールを明確にすれば、パズルが複雑になっても応用が効く
                        </Highlight>
                        んだ。
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
        title: <>一致しなかったら？</>,
        content: (
          <>
            <EmojiSeparator
              nodes={[
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />,
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />,
                <Emoji>❌</Emoji>
              ]}
              description={
                <>
                  <BottomRightBadge inline bottomRightBadgeType="funcArg" /> と{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
                  が一致しなかったら？
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
                        では、
                        <HighlightBold>
                          もし{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcArg"
                          />{' '}
                          と{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcBound"
                          />{' '}
                          が一致しなかったらどうするの？
                        </HighlightBold>
                      </P>
                      <P>
                        たとえば下の弁当箱の場合は、
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcArg"
                        />{' '}
                        と{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcBound"
                        />{' '}
                        が一致しないよね。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              <H args={{ name: 'pressNext' }} />
            </P>
            <R.Sgfj />
          </>
        )
      },
      {
        title: (
          <>
            コピーはせず、
            <BottomRightBadge inline bottomRightBadgeType="callArg" /> と{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
            を消すだけ
          </>
        ),
        content: (
          <>
            <P>
              <BottomRightBadge inline bottomRightBadgeType="funcArg" /> と{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
              が一致しない場合は、
              <HighlightBold>
                コピーはせずに、ただ{' '}
                <BottomRightBadge inline bottomRightBadgeType="callArg" /> と{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
                を消します。
              </HighlightBold>
            </P>
            <P>
              <H args={{ name: 'pressNext' }} />
            </P>
            <R.Gwtp />
            <P>
              この場合は、最終的に
              <EmojiWithText letter="d" />
              だけになります。
              <H args={{ name: 'pressNext' }} />
            </P>
            <R.Grla />
          </>
        )
      },
      {
        title: <>全てのステップを見てみましょう</>,
        content: (
          <>
            <P>
              復習のために、
              <BottomRightBadge inline bottomRightBadgeType="funcArg" /> と{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
              が一致しなかった場合も、最初から最後まで全てのステップを見てみましょう。
            </P>
            <EmojiSeparator
              size="mdsm"
              nodes={[
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="singleArrow" />,
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="singleArrow" />,
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="singleArrow" />,
                <Emoji>🍱</Emoji>
              ]}
              description={<>全ステップを見てみましょう！</>}
            />
            <P>
              こちらは、上にひとつの料理がある例です。
              <H args={{ name: 'pressRun', mentionRightArrow: true }} />
            </P>
            <R.Jbam />
            <P>
              こちらは、上にふたつの料理がある例です。
              <H args={{ name: 'pressRun' }} />
            </P>
            <R.Zuus />
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'summary' }} />: 一致しなかった場合
          </>
        ),
        type: 'summary',
        content: (
          <>
            <Unmatched />
          </>
        )
      },
      {
        title: <>以上です！</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        以上が、
                        <H args={{ name: 'lunchBoxPuzzle' }} />
                        の明確な法則だ。理解できたかな？
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>な、なんとか…でも、まだ覚えきれてないなあ。</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Highlight>
                          法則を覚えきれていなくても、次回また復習するので大丈夫だ。
                        </Highlight>
                      </P>
                    </>
                  )
                },
                {
                  type: 'relieved',
                  children: (
                    <>
                      <P>
                        ホッ、よかった… (悪魔って意外と優しいんじゃ？
                        <Emoji>🤔</Emoji>)
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Highlight>
                          次回では、もっと複雑なパズルを出題する。
                        </Highlight>
                        計算箱を返してほしかったら、解いてみせるんだな！
                      </P>
                    </>
                  )
                },
                {
                  type: 'brave',
                  children: (
                    <>
                      <P>望むところだ！</P>
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
