import { Em, P } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import HomeLink from 'src/components/HomeLink'
import { yc } from 'src/lib/pathHelpers'
import t from 'src/lib/titles'

export default () => (
  <>
    <P>
      <Em>CSmoji</Em>
      では、
      <Em>絵文字</Em>を使った<Em>コンピューターサイエンス(CS)</Em>
      のオンライン教科書を無料で配布しています。<Emoji>🆓</Emoji>
    </P>
    <P>
      <Em>コードは一切出てきません。</Em>
      プログラミング未経験の方でも、プログラミング的な思考方法を身につけることができます。
      <Emoji>😉</Emoji>
    </P>
    <P>
      教科書第1弾はこちらから見れます！ →{' '}
      <HomeLink linkProps={{ href: yc() }}>{t('ycTitle')}</HomeLink>{' '}
    </P>
  </>
)
