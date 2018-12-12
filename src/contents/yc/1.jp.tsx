import React from 'react'
import { Em, H3, Hr, Ol, OlLi, P, Strong } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EpisodeInfo from 'src/components/EpisodeInfo'
import SideNoteSection from 'src/components/SideNoteSection'
import { episode1 } from 'src/components/Yc/AllExpressionRunners'
import BottomRightBadge from 'src/components/Yc/BottomRightBadge'
import TopRightBadge from 'src/components/Yc/TopRightBadge'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import h from 'src/lib/h'

const Step1 = () => (
  <>
    それぞれの料理に
    <BottomRightBadge inline bottomRightBadgeType="callArg" />、
    <BottomRightBadge inline bottomRightBadgeType="funcArg" />、
    <BottomRightBadge inline bottomRightBadgeType="funcBound" />
    の印をつける
  </>
)

const Step2 = () => (
  <>
    <BottomRightBadge inline bottomRightBadgeType="funcArg" />と
    <BottomRightBadge inline bottomRightBadgeType="funcBound" />
    がマッチするかチェック
  </>
)

const Step3 = () => (
  <>
    マッチした
    <TopRightBadge inline topRightBadgeType="match" />{' '}
    <BottomRightBadge inline bottomRightBadgeType="funcBound" />が
    <BottomRightBadge inline bottomRightBadgeType="callArg" />
    と同じ料理になる
  </>
)

const Step4 = () => (
  <>
    <BottomRightBadge inline bottomRightBadgeType="callArg" />と
    <BottomRightBadge inline bottomRightBadgeType="funcArg" />
    が消える
  </>
)

const FourSteps = () => (
  <>
    <P>
      {h('ycBentoBox')}
      のパズルには
      <Strong>4つのステップ</Strong>
      があります:
    </P>
    <Ol>
      <OlLi>
        <Em>
          <Step1 />
        </Em>
      </OlLi>
      <OlLi>
        <Em>
          <Step2 />
        </Em>
      </OlLi>
      <OlLi>
        <Em>
          <Step3 />
        </Em>
      </OlLi>
      <OlLi>
        <Em>
          <Step4 />
        </Em>
      </OlLi>
    </Ol>
  </>
)

export default () => {
  let i = 0
  return (
    <>
      <P>
        「あなたの知らないYコンビネーター」の
        <Strong>初級その1</Strong>
        へようこそ！ <Emoji>👋</Emoji>
      </P>
      <P>
        今回は、
        <Em>これから何度も行うパズルの基本ルール</Em>
        を紹介します。
      </P>
      <EpisodeInfo
        readingTime={6}
        difficultyNum={3}
        difficultyText="はじめてのことが多いので、少々難しいかもしれません。"
        funNum={1}
        funText="基本ルールを紹介するので、少々つまらないかも。でも、後から面白くなるので、めげずに読み進めてください！"
      />
      <Hr />
      <H3>不思議な弁当箱</H3>
      <P>
        まずはじめに、
        <Strong>{h('ycBentoBox')}</Strong>
        について解説します。
      </P>
      <EmojiSeparator emojis={['🍱', '🤔', '🍱']} />
      <P>
        下の図が、
        <Strong>{h('ycBentoBox')}</Strong>
        です。実際の弁当箱のように、四角の中に何個かマスがあり、それぞれのマスの中に料理が入っています。
      </P>
      {episode1[i++]()}
      <P>
        上のマスにはサンドイッチ <Emoji size="mdlg">🥪</Emoji>{' '}
        があり、下の左右のマスには寿司 <Emoji size="mdlg">🍣</Emoji>{' '}
        が入っています。
      </P>
      <P>
        もうひとつ、
        {h('ycBentoBox')}
        の例を紹介しましょう:
      </P>
      {episode1[i++]()}
      <P>
        上のマスにはチキン <Emoji size="mdlg">🍗</Emoji>
        、下の左右のマスにはハンバーガー <Emoji size="mdlg">🍔</Emoji>{' '}
        が入っています。
      </P>
      <P>
        これらの
        {h('ycBentoBox')}
        は実はパズルになっています。そのルールを紹介しましょう。
      </P>
      <H3>4つのステップ</H3>
      <FourSteps />
      <P>
        複雑に聞こえるかもしれませんが、慣れたら簡単です。早速やってみましょう！
      </P>
      <EmojiSeparator emojis={['🔢', '🍱', '🔢']} />
      <H3>
        ステップ1: <Step1 />
      </H3>
      <P>
        まず、
        {h('ycBentoBox')}
        の中にある料理に印をつけるところからはじめましょう。
      </P>
      <P>
        <Em>
          <Strong>上段</Strong>
          にあるサンドイッチ <Emoji size="mdlg">🥪</Emoji> には、
          <BottomRightBadge inline bottomRightBadgeType="callArg" />
          の印をつけます。
        </Em>
      </P>
      {episode1[i++]()}
      <P>
        <Em>
          <Strong>下段の左</Strong>
          にある寿司 <Emoji size="mdlg">🍣</Emoji> には、
          <BottomRightBadge inline bottomRightBadgeType="funcArg" />
          の印をつけます。
        </Em>
      </P>
      {episode1[i++]()}
      <P>
        最後に、
        <Em>
          <Strong>下段の右</Strong>
          にある寿司 <Emoji size="mdlg">🍣</Emoji> には、
          <BottomRightBadge inline bottomRightBadgeType="funcBound" />
          の印をつけます。
        </Em>
      </P>
      {episode1[i++]()}
      <SideNoteSection
        heading={'復習問題: ステップ1'}
        color="pink"
        noPaddingBottom
      >
        <P>
          <Strong>質問:</Strong>{' '}
          <Em>
            次の
            {h('ycBentoBox')}
            にある料理にはそれぞれどんな印がつくでしょう？
          </Em>
        </P>
        {episode1[i++]()}
        <P>
          <Strong>答え:</Strong>{' '}
          <Em>
            チキン <Emoji size="mdlg">🍗</Emoji> には{' '}
            <BottomRightBadge inline bottomRightBadgeType="callArg" />
            、バーガー <Emoji size="mdlg">🍔</Emoji> には{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcArg" /> と
            <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
            の印がつきます。
          </Em>
        </P>
        {episode1[i++]()}
      </SideNoteSection>
      <H3>
        ステップ2: <Step2 />
      </H3>
      <P>
        次に、
        <Em>
          <BottomRightBadge inline bottomRightBadgeType="funcArg" /> と{' '}
          <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
          両方にある料理を探します。
        </Em>
      </P>
      {episode1[i++]()}
      <P>
        <Em>
          <BottomRightBadge inline bottomRightBadgeType="funcArg" /> と{' '}
          <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
          それぞれに同じ料理があると、「
          <Strong>マッチ</Strong>{' '}
          <TopRightBadge inline topRightBadgeType="match" />
          」です！
        </Em>
      </P>
      {episode1[i++]()}
      <P>
        上の
        {h('ycBentoBox')}
        の場合、寿司 <Emoji size="mdlg">🍣</Emoji> が
        <BottomRightBadge inline bottomRightBadgeType="funcArg" /> と
        <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
        それぞれにあるので、 「
        <Strong>
          マッチ <TopRightBadge inline topRightBadgeType="match" />
        </Strong>
        」ということになります。
      </P>
      <SideNoteSection
        heading={'復習問題: ステップ2'}
        color="pink"
        noPaddingBottom
      >
        <P>
          <Strong>質問:</Strong>{' '}
          <Em>下の{h('ycBentoBox')}にはマッチした料理があるでしょうか？</Em>
        </P>
        {episode1[i++]()}
        <P>
          <Strong>答え:</Strong>{' '}
          <Em>
            あります。バーガー <Emoji size="mdlg">🍔</Emoji> がマッチしています{' '}
            <TopRightBadge inline topRightBadgeType="match" />。
          </Em>
        </P>
        {episode1[i++]()}
      </SideNoteSection>
      <H3>
        ステップ3: <Step3 />
      </H3>
      <P>
        次に、
        <Em>
          <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
          の料理と、さきほどマッチ{' '}
          <TopRightBadge inline topRightBadgeType="match" /> した{' '}
          <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
          の料理に注目します。
        </Em>
      </P>
      {episode1[i++]()}
      <P>
        <Strong>このステップでは、</Strong>{' '}
        <Em>
          マッチ <TopRightBadge inline topRightBadgeType="match" /> した{' '}
          <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
          の料理が、
          <BottomRightBadge inline bottomRightBadgeType="callArg" /> と
          <Strong>同じ料理</Strong>になります。
        </Em>
      </P>
      {episode1[i++]()}
      <P>
        このとき、 <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
        の料理に <TopRightBadge inline topRightBadgeType="betaReduced" />{' '}
        という印が表示されます。
      </P>
      <SideNoteSection
        heading={'復習問題: ステップ3'}
        color="pink"
        noPaddingBottom
      >
        <P>
          <Strong>質問:</Strong>{' '}
          <Em>下の{h('ycBentoBox')}は、次のステップでどうなるでしょう？</Em>
        </P>
        {episode1[i++]()}
        <P>
          <Strong>答え:</Strong>{' '}
          <Em>
            マッチ <TopRightBadge inline topRightBadgeType="match" /> した{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
            のハンバーガー <Emoji size="mdlg">🍔</Emoji> が、チキン{' '}
            <Emoji size="mdlg">🍗</Emoji> になります{' '}
            <TopRightBadge inline topRightBadgeType="betaReduced" />。
          </Em>
        </P>
        {episode1[i++]()}
      </SideNoteSection>
      <H3>
        ステップ4 (これが最後): <Step4 />
      </H3>
      <P>
        これが最後のステップです！ステップ3のあと、{h('ycBentoBox')}
        はこうなっています:
      </P>
      {episode1[i++]()}
      <P>
        このステップでは、
        <Em>
          <BottomRightBadge inline bottomRightBadgeType="callArg" /> と{' '}
          <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
          が消えます。
        </Em>
      </P>
      {episode1[i++]()}
      <P>
        つまり、残るのはサンドイッチ <Emoji size="mdlg">🥪</Emoji>{' '}
        だけになります。
      </P>
      {episode1[i++]()}
      <P>
        <Strong>ちなみに:</Strong> このステップで、{' '}
        <Em>
          <BottomRightBadge inline bottomRightBadgeType="funcBound" /> の印
        </Em>
        も外れます。
      </P>
      <P>
        <Strong>
          これで終了 <Emoji>🏁</Emoji> です！
        </Strong>
        以上が、{h('ycBentoBox')}の4つのステップでした。
      </P>
      <SideNoteSection
        heading={'復習問題: ステップ4'}
        color="pink"
        noPaddingBottom
      >
        <P>
          <Strong>質問:</Strong>{' '}
          <Em>下の{h('ycBentoBox')}は、次のステップでどうなるでしょう？</Em>
        </P>
        {episode1[i++]()}
        <P>
          <Strong>答え:</Strong>{' '}
          <Em>
            <BottomRightBadge inline bottomRightBadgeType="callArg" /> と{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
            が消えるので…
          </Em>
        </P>
        {episode1[i++]()}
        <P>
          最終的にはチキン <Emoji size="mdlg">🍗</Emoji> だけになります。
        </P>
        {episode1[i++]()}
      </SideNoteSection>
      <P>
        全部のステップを説明し終えたところで、きちんと覚えるために
        <Em>もう一度最初からやってみましょう。</Em>
      </P>
      <H3>もう一度おさらい</H3>
      <P>
        実際に手を動かして見れるように、{' '}
        <Em>
          {h('ycBentoBox')}に「{h('ycPrevious')}」と「{h('ycNext')}」
          ボタンを追加しました。
        </Em>
      </P>
      <EmojiSeparator emojis={['⬅️', '🍱', '➡️']} />
      <P>
        次の{h('ycBentoBox')}の下にある、「{h('ycNext')}」ボタンを「
        {h('ycDone')}」 になるまで何度も押してみてください。
      </P>
      {episode1[i++]()}
      <P>
        もう一つの{h('ycBentoBox')}でもやってみましょう。こちらでも、
        {h('ycTryUntilDone')}.
      </P>
      {episode1[i++]()}
      <P>ここまでは理解できたでしょうか？</P>
      <SideNoteSection heading={'これまでのまとめ'} color="yellow">
        <FourSteps />
      </SideNoteSection>
      <H3>Challenge Quiz</H3>
      <P>
        At the end of each episode, we give you a{' '}
        <Strong>challenge quiz</Strong>.{' '}
        <Em>
          You should try, but they’re hard, so don’t worry if you have no idea.
        </Em>
      </P>
      <P>
        <Strong>Here’s the quiz:</Strong> What do you think will happen to the
        following {h('ycBentoBox')} after taking all the steps?
      </P>
      {episode1[i++]()}
      <P>
        <Strong>Hint:</Strong> Here are the labels.{' '}
        <Em>
          Notice that <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
          and <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
          <Strong>do not match</Strong>.
        </Em>{' '}
        What do you think happens then? Try guessing!
      </P>
      {episode1[i++]()}
      <P>Click on the button below to see the answer!</P>
      <YcNextLessonButton nextEpisodeNumber={2} />
    </>
  )
}
