import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  Strong,
  InlineHeader,
  Em,
  ExternalLink,
  Img,
  CenteredCode
} from 'src/components/ContentTags'
import EmojiSeparator from 'src/components/EmojiSeparator'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import H from 'src/components/H'
import Emoji from 'src/components/Emoji'
import CustomEmoji from 'src/components/CustomEmoji'
import BubbleQuotes from 'src/components/BubbleQuotes'
import * as R from 'src/components/Runners'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>これが最後のページです！</>,
        content: (
          <>
            <P>
              これが最後のページです。ここまで読んでくださり、ありがとうございます！
            </P>
            <EmojiSeparator
              emojis={['🎉', '🤗', '🎉']}
              description={<>お疲れ様でした！</>}
            />
            <P>
              さて、前回の最後に、ラムダ村の村人は次のような質問をしました。
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        <Strong>弁当箱にできない計算はあるのかな？</Strong>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              この質問に答えるためには、「
              <Strong>
                そもそも弁当箱というアイデアはどうやって生まれたのか
              </Strong>
              」という質問にまず答える必要があります。
            </P>
            <EmojiSeparator
              emojis={['❓', '🍱', '❓']}
              description={
                <>
                  そもそも、弁当箱というアイデアは
                  <br />
                  どうやって生まれたのか？
                </>
              }
            />
            <P>
              そのためには、
              <Strong>ラムダ村の世界ではなく、現実世界の歴史</Strong>
              を知る必要があります。
            </P>
            <EmojiSeparator
              emojis={['📜', '🧐', '📚']}
              description={<>現実世界の歴史を知る必要がある</>}
            />
            <P>
              というわけで、これから現実世界の話をしますが、お付き合いいただけると嬉しいです。ラムダ村の話からはいったん離れますが、このページの最後で戻ってきます。
            </P>
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <InlineHeader>ちなみに:</InlineHeader>{' '}
                これからコンピュータやコンピュータサイエンスの歴史について非常に手短に語りますが、
                <Em>
                  わかりやすさや簡潔さを優先するために、正確性をあえて犠牲にしたり、さまざまな出来事を省いたりしています
                </Em>
                。
              </P>
              <P>
                コンピュータ史に詳しい方のなかには、怒り心頭に発する方が出てくるかもしれません。雑な歴史の紹介であることをお許しください。
              </P>
            </>
          )
        }
      },
      {
        title: <>そもそもコンピュータとは何か</>,
        content: (
          <>
            <P>
              この記事のタイトルは「
              <InlineHeader>
                <Em>コンピュータ</Em>サイエンスと魔法のYコンビネータ
              </InlineHeader>
              」ですが、はじめに、「
              <Strong>そもそもコンピュータとは何か</Strong>
              」という質問について考えてみましょう。
            </P>
            <EmojiSeparator
              emojis={['🤔', '💻', '❓']}
              description={<>そもそもコンピュータとは何か？</>}
            />
            <P>
              「コンピュータ」というとパソコンやタブレット、スマホ、ロボットを思い浮かべる方が多いかもしれません。
            </P>
            <EmojiSeparator emojis={['💻', '📱', '🤖']} />
            <P>
              しかし、コンピュータは本質的には「<Strong>計算機</Strong>
              」なのです。
            </P>
            <EmojiSeparator
              emojis={['➕', '✖️', '💻', '➖', '➗']}
              description={
                <>
                  コンピュータは本質的には「<Strong>計算機</Strong>」
                </>
              }
            />
            <P>
              コンピュータを使えば情報を瞬時に検索できたり、美しいCGを描いたりすることができます。最近はAIを使って顔認証や会話ができるようになりました。
            </P>
            <P>
              <Em>
                こういった便利な機能は、
                コンピュータが大量の計算を瞬時に行えるからこそ実現されているのです。
              </Em>
              だから、コンピュータは「<Strong>計算機</Strong>」なのですね。
            </P>
            <EmojiSeparator
              emojis={['🔢', '🔢', '💻', '🔢', '🔢']}
              description={<>コンピュータは、大量の計算を行える計算機</>}
            />
          </>
        )
      },
      {
        title: <>計算機の歴史</>,
        content: (
          <>
            <P>
              コンピュータは計算機であるからこそ、
              <Strong>コンピュータの歴史はすなわち、計算機の歴史</Strong>
              なのです。
            </P>
            <P>
              歴史を振り返ると、たとえば昔の日本では、中国から伝わった
              <InlineHeader>そろばん</InlineHeader> <Emoji>🧮</Emoji>{' '}
              が計算機の主役でしたね。
            </P>
            <EmojiSeparator
              emojis={['🧮', '🏯', '🧮']}
              description={
                <>
                  昔の日本で「計算機」といえば
                  <br />
                  そろばんだった
                </>
              }
            />
            <P>
              一方、海の向こうのアメリカでは、1890年に「
              <InlineHeader>タビュレーティングマシン</InlineHeader>
              」という計算機が台頭しました。
            </P>
            <P>
              <Img
                src="/static/images/Hollerith_census_machine_at_the_Computer_History_Museum.jpg"
                alt="Hollerith_census_machine_at_the_Computer_History_Museum"
                size="medium"
                caption={
                  <>
                    シリコンバレーのコンピュータ歴史博物館に展示されているタビュレーティングマシン(
                    <ExternalLink href="https://commons.wikimedia.org/wiki/File:Hollerith_census_machine_at_the_Computer_History_Museum.jpg">
                      撮影: Anton Chiang, CC BY 2.0
                    </ExternalLink>
                    )
                  </>
                }
              />
            </P>
            <P>
              <Em>
                タビュレーティングマシンは、アメリカの国勢調査、すなわち国全体のアンケート調査を集計するために使われた計算機でした。
              </Em>
              パンチカードと呼ばれるマークシートのような紙に空いた穴を読み取って計算することで、大量のデータをすばやく集計できたのです。
              <Em>現代のエクセルのようなもの</Em>ですね。
            </P>
            <EmojiSeparator
              emojis={['📈', '📊', '📉']}
              description={
                <>
                  アメリカでは「タビュレーティングマシン」
                  <br />
                  という計算機が国勢調査で使われた
                </>
              }
            />
            <P>
              ちなみに、
              <Em>
                この計算機の発明者であるホレリスは、IBMの前身となる会社を創業しました。
              </Em>
              IBMはさらに強力な計算機を開発し続け、1960年代に世界一のコンピュータ企業になったのです。
            </P>
          </>
        )
      },
      {
        title: <>計算機「科学」のはじまり</>,
        content: (
          <>
            <P>
              上記の「タビュレーティングマシン」を皮切りに、計算機は20世紀に入ってどんどん進化していき、アナログだったものが電子化され、今の「コンピュータ」と呼ばれるような機械になっていきました。
            </P>
            <EmojiSeparator
              emojis={['✨', '💻', '✨']}
              description={<>計算機は20世紀にどんどん進化した</>}
            />
            <P>
              一方同時期に、<Strong>計算機について科学する学問</Strong>である、
              「<InlineHeader>コンピュータサイエンス = 計算機科学</InlineHeader>
              」
              も生まれ、進化していきました。コンピュータサイエンスの研究者たちは、「
              <Em>
                計算機の作り方や使い方をどう工夫すれば、より効率的に問題を解けるのか
              </Em>
              」といった問いに取り組んだのです。
            </P>
            <EmojiSeparator
              emojis={['💻', '🤔', '💻']}
              description={
                <>
                  <InlineHeader>コンピュータサイエンス: </InlineHeader>
                  <br />
                  計算機の作り方や使い方をどう工夫
                  <br />
                  すれば、より効率的に問題を解けるのか
                </>
              }
            />
            <P>
              この<Em>コンピュータサイエンスの礎を築いた</Em>
              と言われているのが、英国の数学者である
              <InlineHeader>アラン・チューリング</InlineHeader>
              と、米国の数学者である
              <InlineHeader>アロンゾ・チャーチ</InlineHeader>
              です。ふたりの研究が、学問としてのコンピュータサイエンスの大本になっているのです。
            </P>
            <EmojiSeparator
              emojis={['🧑🏻', '🧓🏻']}
              description={
                <>
                  <InlineHeader>アラン・チューリング</InlineHeader>と<br />
                  <InlineHeader>アロンゾ・チャーチ</InlineHeader>による
                  <br />
                  研究が、コンピュータサイエンスの礎となった
                </>
              }
            />
          </>
        )
      },
      {
        title: <>空想上の計算機</>,
        content: (
          <>
            <P>
              <Em>
                チューリングとチャーチは1930年代に、とある難しい論理の問題に別々に取り組んでいました。
              </Em>
              それがどんな問題かを説明するのは非常に難しいので省略しますが、ふたりが
              <Strong>その問題をどのようにして解いたか</Strong>
              が興味深かったのです。
            </P>
            <EmojiSeparator
              emojis={['🧑🏻', '❓', '🧓🏻']}
              description={
                <>
                  <InlineHeader>チューリング</InlineHeader>と
                  <InlineHeader>チャーチ</InlineHeader>は、
                  <br />
                  とある論理の問題に別々に取り組んでいた
                </>
              }
            />
            <P>
              その問題を解くために、ふたりはそれぞれ別々の「
              <Strong>空想上の計算機</Strong>
              」を頭の中で考案しました。「
              <InlineHeader>空想上の計算機</InlineHeader>
              」とはすなわち、
              <Em>
                実際には(少なくとも1930年代の当時は)存在しないけど、もし存在したとしたら非常に複雑な計算ができる、
                <Strong>仮想上の計算機</Strong>
              </Em>
              のことです。
            </P>
            <P>
              「<Strong>もし仮にそんな計算機がこの世に存在したら…</Strong>
              」と仮定したうえで理論を展開することで、先述の難しい論理の問題を解くことができたのです。
            </P>
            <EmojiSeparator emojis={['🧑🏻', '💭', '💻']} noBottomMargin />
            <EmojiSeparator
              emojis={['🧓🏻', '💭', '💻']}
              noTopMargin
              description={
                <>
                  問題を解くために、ふたりはそれぞれ
                  <br />「<Strong>空想上の計算機</Strong>」を頭の中で設計した。
                  <br />「<Em>もしこういった計算機が存在したら…</Em>」と
                  <br />
                  仮定した上で理論を展開して問題を解いた
                </>
              }
            />
            <P>
              実は、この時にふたりが別々に考案した、当時の技術では作ることができない「
              <Strong>空想上の計算機</Strong>
              」が、
              <Em>
                その後のコンピュータの開発や、プログラミング言語の開発、ひいてはコンピュータサイエンスそのものに大きな影響を与えました。
              </Em>
            </P>
            <P>
              イギリスの数学者のチューリングは「
              <InlineHeader>チューリングマシン</InlineHeader>
              」という空想上の計算機を考案しました。ここでは詳しく説明しませんが、
              <Em>
                このチューリングマシンの仕組みはシンプルながら、現代のコンピュータの仕組みと非常に似ており、20世紀のコンピュータの発展に大きな影響を与えたのです。
              </Em>
            </P>
            <EmojiSeparator
              emojis={['🧑🏻', '💭', '💻']}
              description={
                <>
                  チューリングは、「
                  <InlineHeader>チューリングマシン</InlineHeader>」
                  <br />
                  という、現代のコンピュータに似ている
                  <br />
                  空想上の計算機を頭の中で考えた
                </>
              }
            />
            <P>
              一方、ほぼ時を同じくして、アメリカの数学者のチャーチは「
              <Strong>ラムダ計算</Strong>
              」という空想上の計算機を考案しました。では、この「
              <Strong>ラムダ計算</Strong>
              」とはどんな仕組みだったのでしょうか。
            </P>
            <EmojiSeparator
              emojis={['🧓🏻', '💭', '💻']}
              description={
                <>
                  チャーチは、「
                  <InlineHeader>ラムダ計算</InlineHeader>」という
                  <br />
                  空想上の計算機を頭の中で考えた
                </>
              }
            />
            <P>
              <Em>
                実は、みなさんはすでに「
                <Strong>ラムダ計算</Strong>
                」がどんな仕組みかを知っています。
              </Em>
              そう、
              <Strong>
                <Emoji>🍱</Emoji> 弁当箱のことです。
              </Strong>
            </P>
            <EmojiSeparator
              emojis={['🧓🏻', '💭', '🍱']}
              description={
                <>
                  チャーチが考えた空想上の計算機
                  <br />「<InlineHeader>ラムダ計算</InlineHeader>
                  」は、<Strong>弁当箱と仕組みが同じ</Strong>
                </>
              }
            />
          </>
        )
      },
      {
        title: <>ラムダ計算と弁当箱</>,
        content: (
          <>
            <P>
              チャーチが考えた空想上の計算機「<Strong>ラムダ計算</Strong>
              」は、<Em>見た目は弁当箱とは違いますが、仕組みは同じ</Em>でした。
            </P>
            <P>
              たとえば、こちらが「<InlineHeader>ラムダ計算</InlineHeader>
              」の記述式です。「<Strong>λ</Strong>」の記号はギリシャ文字で「
              <Strong>ラムダ</Strong>
              」と呼ぶことから、「ラムダ計算」と呼ばれています。
            </P>
            <CenteredCode size="md">λA.B C</CenteredCode>
            <P>
              上のラムダ計算の記述式は、以下の弁当箱とまったく同じことを表しています。
            </P>
            <R.Kzkg>
              上のラムダ計算の記述式は、
              <br />
              この弁当箱とまったく同じ
            </R.Kzkg>
            <P>
              上の弁当箱は、
              <H args={{ name: 'play' }} /> すると <Emoji>🅱️</Emoji>{' '}
              になります。
              <H args={{ name: 'pressFastForward' }} />
            </P>
            <R.Unxf></R.Unxf>
            <P>
              <Em>
                それと同じで、先ほどの「ラムダ計算」の記述式も、
                <H args={{ name: 'play' }} /> すると
                <Strong>B</Strong>が残るのです。
              </Em>
            </P>
            <CenteredCode size="md">λA.B C</CenteredCode>
            <ExpressionRunnerSeparator />
            <CenteredCode size="md">B</CenteredCode>
            <P>
              もちろん、もっと複雑なラムダ計算の記述式もあります。たとえば、こちらをご覧ください。この記述式は、何を表しているか分かりますか？
            </P>
            <CenteredCode size="sm">λA.(λB.A(B B))(λB.A(B B))</CenteredCode>
            <P>
              答えを言うと、上の記述式は
              <Strong>Yコンビネータを表している</Strong>
              のです。つまり、下の弁当箱とまったく同じです。
            </P>
            <R.Rjho>
              上のラムダ計算の記述式は、
              <br />「<Strong>Yコンビネータ</Strong>」の弁当箱と同じ
            </R.Rjho>
            <P>
              つまり本稿では、
              <Strong>実はみなさんにラムダ計算を教えていたのです。</Strong>
              <Em>
                ラムダ計算の記述式は見た目が複雑なので、
                <H args={{ name: 'bentoBoxPuzzle' }} />
                という形で教えることで、とっつきやすくしていた
              </Em>
              というわけですね。
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="lambda" />,
                <CustomEmoji type="singleArrow" />,
                <Emoji>🍱</Emoji>
              ]}
              description={
                <>
                  本稿では、実はラムダ計算を教えていた。
                  <br />
                  ラムダ計算の記述式は見た目が複雑なので、
                  <br />
                  <H args={{ name: 'bentoBoxPuzzle' }} />
                  という形で教える
                  <br />
                  ことで、とっつきやすくしていた。
                </>
              }
            />
          </>
        )
      },
      {
        title: <>村人の質問に戻ると…</>,
        content: (
          <>
            <P>ここで、ラムダ村の村人の質問に戻りましょう。</P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>弁当箱にできない計算はあるのかな？</P>
                    </>
                  )
                }
              ]}
            />
            <P>
              先ほど、「<Strong>弁当箱とラムダ計算は同じ</Strong>
              」という話をしましたね。つまり、上の質問は以下のように置き換えることができます。
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        <Strong>ラムダ計算にできない計算</Strong>はあるのかな？
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>では、ラムダ計算にできない計算はあるのでしょうか？</P>
            <P>
              結論から言うと、
              <Strong>
                ラムダ計算は、現在使われているコンピュータが行うことができるすべての計算を行うことができます。
              </Strong>
              あなたのパソコンやスマホができる計算はすべて、ラムダ計算にでもできるということです。
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="lambda" />,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>💻</Emoji>
              ]}
              description={
                <>
                  ラムダ計算は、現代のコンピュータが行える
                  <br />
                  すべての計算を行うことができる
                </>
              }
            />
            <P>
              ということはつまり、
              <Strong>
                弁当箱も、現代のコンピュータが行えるすべての計算を行うことができる
              </Strong>
              というわけですね。
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>💻</Emoji>
              ]}
              description={
                <>
                  弁当箱も、現代のコンピュータが行える
                  <br />
                  すべての計算を行うことができる
                </>
              }
            />
            <P>
              チャーチが考案した「ラムダ計算」は、少なくとも当時は空想上の計算機でした。
              <Em>
                当時は今のようなコンピュータも、プログラミング言語もありませんでしたから、ラムダ計算の記述式を書いても、自動で実行することはできませんでした。
              </Em>
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>🧓🏻</Emoji>,
                <Emoji>💭</Emoji>,
                <CustomEmoji type="lambda" />
              ]}
              description={
                <>
                  「<InlineHeader>ラムダ計算</InlineHeader>」はあくまで空想上の
                  <br />
                  計算機。実際には存在しなかった
                </>
              }
            />
            <P>
              しかし、「
              <Strong>
                これから先にどんなに強力な計算機が登場しても、その計算機が行える計算ならば、ラムダ計算でも『理論上は』行うことができる
              </Strong>
              」と、
              <Em>1930年代に証明された</Em>
              のです。
            </P>
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <InlineHeader>ちなみに:</InlineHeader>{' '}
                チャーチが考案したラムダ計算だけでなく、チューリングが考案した空想上の計算機「チューリングマシン」も、ラムダ計算と同じく、現代のコンピュータが行えるすべての計算を行うことができると証明されました。
              </P>
            </>
          )
        }
      },
      {
        title: <>ラムダ計算の影響</>,
        content: (
          <>
            <P>
              先ほど説明したように、ラムダ計算はもともと、ある論理の問題を解くためにチャーチが考案したものでした。しかし、ラムダ計算もまた、
              <Em>コンピュータサイエンスの発展に大きな影響を与えた</Em>のです。
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>✨</Emoji>,
                <CustomEmoji type="lambda" />,
                <Emoji>✨</Emoji>
              ]}
              description={
                <>
                  ラムダ計算は、コンピュータサイエンスの
                  <br />
                  発展に大きな影響を与えた
                </>
              }
            />
            <P>
              特に、ラムダ計算は
              <Strong>後に開発されたプログラミング言語</Strong>
              に影響を与えました。現存するプログラミング言語の多くには、ラムダ計算の名残が残っています。
            </P>
            <P>
              たとえば、執筆時点で世界で最も使われているプログラミング言語のひとつで、特にAI開発で人気の
              <Strong>Python (パイソン)</Strong>
              という言語があります。ちなみにパイソンとは大蛇のことで、Python言語のロゴにもヘビの絵が描かれています。
            </P>
            <EmojiSeparator
              emojis={['🐍', '🐍', '🐍']}
              description={<>Python言語</>}
            />
            <P>
              このPython言語にも、「<Strong>lambda</Strong>{' '}
              (ラムダ)」という機能があります。たとえば、以下のPython言語のコードをご覧ください。
            </P>
            <CenteredCode size="sm">(lambda A: 'B')('C')</CenteredCode>
            <P>
              上のコードは、先ほどの以下のラムダ計算と全く同じ処理をします。
            </P>
            <CenteredCode size="md">λA.B C</CenteredCode>
            <P>
              先ほどのラムダ計算では、結果は「B」になりました。同じように、上のPythonのコードも、実行すると結果は「B」になります。
            </P>
            <CenteredCode size="sm">(lambda A: 'B')('C')</CenteredCode>
            <ExpressionRunnerSeparator />
            <CenteredCode size="sm">'B'</CenteredCode>
            <P>
              まとめると、
              <Em>
                Python言語のような現在人気のプログラミング言語も、1930年代に考えられたラムダ計算の影響を受けている
              </Em>
              のです。
            </P>
          </>
        )
      },
      {
        title: <>工夫すること</>,
        content: (
          <>
            <P>
              そろそろ終わりが近づいてきましたが、最後に「
              <InlineHeader>コンピュータサイエンス = 計算機科学</InlineHeader>
              」についてもう一言だけお話をさせてください。
            </P>
            <P>
              それは、
              <Em>
                「<Strong>計算機を工夫すること</Strong>
                」が、コンピュータサイエンスではとても大事なこと
              </Em>
              、というお話です。
            </P>
            <P>
              今回紹介したラムダ計算、すなわち弁当箱は、
              <Em>仕組みはとてもシンプルです</Em>
              。弁当箱の基本の法則は、初級その3〜5で紹介したように、そんなに複雑なものではありませんよね。
            </P>
            <R.Zzxj>弁当箱の基本の法則は非常にシンプル</R.Zzxj>
            <ExpressionRunnerSeparator />
            <R.Keck />
            <ExpressionRunnerSeparator />
            <R.Qoms />
            <ExpressionRunnerSeparator />
            <R.Mhgm />
            <ExpressionRunnerSeparator />
            <R.Osqo />
            <P>
              しかし、こんなシンプルな弁当箱でも、現代のコンピュータが行えるすべての計算を行うことができるのです。
              <Strong>
                それができる理由は、弁当箱を工夫すれば、四則演算や、条件分岐や、繰り返しを行うことができるからです。
              </Strong>
            </P>
            <EmojiSeparator
              emojis={['➕', '✖️', '🍱', '↕️', '🔁']}
              description={
                <>
                  弁当箱を工夫すれば、四則演算や、
                  <br />
                  条件分岐や、繰り返しを行うことができる
                </>
              }
            />
            <P>
              たとえば今回紹介した通り、Yコンビネータの弁当箱を使えば、繰り返しを行うことができますよね。他にも工夫次第で、さまざまな計算を行うことができます。
            </P>
            <R.Rjho>
              「<Strong>Yコンビネータ</Strong>」の弁当箱を使えば
              <br />
              繰り返しを行うことができる
            </R.Rjho>
            <P>
              コンピュータサイエンスは、「
              <Em>
                計算機(コンピュータ)の作り方や使い方をどう工夫すれば、より効率的に問題を解けるのか
              </Em>
              」について考える学問です。
            </P>
            <P>
              そして、
              <Strong>
                シンプルでも工夫次第で複雑な計算ができる弁当箱に、コンピュータサイエンスのエッセンスが詰まっている
              </Strong>
              と思うのです。
            </P>
            <EmojiSeparator
              emojis={['✨', '🍱', '✨']}
              description={
                <>
                  シンプルでも工夫次第で
                  <br />
                  複雑な計算ができる弁当箱に、
                  <br />
                  コンピュータサイエンスのエッセンスが
                  <br />
                  詰まっている
                </>
              }
            />
          </>
        )
      },
      {
        title: <>コンピュータサイエンスの他の分野でも同じ</>,
        content: (
          <>
            <P>
              今回は時間の都合で、たくさんあるコンピュータサイエンスの題材のうち、ラムダ計算(弁当箱)しか紹介できませんでした。
            </P>
            <P>
              とはいえ、コンピュータサイエンスの他の分野を学ぶときも、やることは弁当箱のときと同じです。なぜならどの分野でも、弁当箱のように「
              <Em>
                計算機(コンピュータ)を<Strong>工夫して</Strong>
                、問題を解く」ことが大事になってくるからです。
              </Em>
            </P>
            <P>
              たとえば、「
              <Em>
                コンピュータを<Strong>どう工夫して</Strong>
                使えば、美しいCGや、人工知能や、仮想通貨が作れるだろう？
              </Em>
              」といった感じですね。
            </P>
            <EmojiSeparator
              emojis={['✨', '🤖', '💰']}
              description={
                <>
                  コンピュータをどう工夫して使えば、
                  <br />
                  美しいCGや、人工知能や、
                  <br />
                  仮想通貨が作れるだろう？
                </>
              }
            />
            <P>
              長くなりましたが、本稿を読んで、「
              <Em>コンピュータサイエンスの他の分野も学んでみたい</Em>
              」と思ってくだされば嬉しいです。
            </P>
          </>
        )
      },
      {
        type: 'summary',
        title: <>まとめ</>,
        content: (
          <>
            <P>
              本稿で学んだことを箇条書きでまとめると、以下のようになります。
            </P>
          </>
        )
      },
      {
        title: <>その後: チューリング</>,
        content: (
          <>
            <P>最後に、「その後」の話をしましょう。</P>
            <P>
              まず、先述した数学者のふたりのうちのひとりで、空想上の計算機「
              <InlineHeader>チューリングマシン</InlineHeader>」を考案した
              <Strong>アラン・チューリング</Strong>
              。彼はチューリングマシンを考案したのち、イギリスからアメリカに渡り、
              <Em>ラムダ計算を考案したチャーチのもとで学びました。</Em>
            </P>
            <EmojiSeparator
              emojis={['🧑🏻', '🎓', '🧓🏻']}
              description={
                <>
                  <InlineHeader>チューリングマシン</InlineHeader>を考案した
                  <br />
                  <Strong>アラン・チューリング</Strong>は、
                  <br />
                  <InlineHeader>ラムダ計算</InlineHeader>を考案した
                  <br />
                  <Strong>チャーチ</Strong>に弟子入りした
                </>
              }
            />
            <P>
              その後チューリングはイギリスに戻り、第2次世界大戦でドイツ軍の暗号通信「エニグマ」を解読しました。その後、彼は人工知能の分野でも先駆的な役割を果たし、「人工知能の父」とも呼ばれるようになりました。
            </P>
            <EmojiSeparator
              emojis={['✨', '🧑🏻', '✨']}
              description={<>チューリングは「人工知能の父」に</>}
            />
            <P>
              英国の数学者だったチューリングは同性愛者で、当時は同性愛行為が違法だったため、若い男性との性的関係を持ったことが発覚し有罪になりました。彼は薬品投与による「化学的去勢」を受け続け、42歳になる直前に毒物を服用して亡くなってしまいました。
            </P>
            <P>
              チューリングが亡くなってから55年後の2009年、英政府はチューリングに対する迫害を謝罪し、2013年には亡きチューリングに恩赦が与えられました。
            </P>
            <P>
              <Em>
                そしてこの記事の執筆中、2019年7月15日に、イギリスの新しい50ポンド紙幣の肖像にチューリングが採用されることになったのです。
              </Em>
              その50ポンド紙幣には、彼が考えた空想上の計算機「チューリングマシン」のイラストが載っています。(参考:{' '}
              <ExternalLink href="https://www.bbc.com/japanese/48991921">
                BBC
              </ExternalLink>
              )
            </P>
          </>
        )
      },
      {
        title: <>その後: ラムダ村</>,
        content: (
          <>
            <P>ではその後、ラムダ村はどうなったかというと…</P>
            <P>
              <InlineHeader>村人たち</InlineHeader>
              は、何でも計算できる弁当箱を村の外の人たちに売りさばき、大金持ちになろうと頑張っています。
            </P>
            <EmojiSeparator
              emojis={['🍱', '💰', '🤑', '💰', '🍱']}
              description={<>弁当箱を売りさばいて稼ぐぞ！</>}
            />
            <P>
              <InlineHeader>悪魔</InlineHeader>
              は暇になったので、日々<InlineHeader>ミニオン</InlineHeader>
              に新しい芸を覚えさせようとしていますが、なかなかうまくいっていません。
            </P>
            <EmojiSeparator
              emojis={['😈', '🐶', '❓']}
              description={
                <>
                  ミニオン、「おすわり」しなさい！
                  <br />
                  何度言ったらわかるんだ！
                </>
              }
            />
            <P>
              そして、年頃になった<InlineHeader>サヤちゃん</InlineHeader>
              は、好きなアーティストのコンサートにもっと参戦したいからと言って、ラムダ村を出ていきました。
            </P>
            <EmojiSeparator
              emojis={['👧🏻', '❤️', '👨‍🎤']}
              description={<>今日も自担が尊い〜</>}
            />
            <P>
              以上でおしまいです！ここまでお付き合いくださり、本当にありがとうございました。
            </P>
          </>
        )
      }
    ]}
  />
)
