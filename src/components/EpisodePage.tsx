/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { spaces } from 'src/lib/theme'
import Head from 'next/head'
import { useState } from 'react'
import Container from 'src/components/Container'
import Content, { ContentProps } from 'src/components/Content'
import EpisodePageHeader from 'src/components/EpisodePageHeader'
import EpisodePageFooter from 'src/components/EpisodePageFooter'
import EpisodeContext from 'src/components/EpisodeContext'
import Page from 'src/components/Page'
import TocModal from 'src/components/TocModal'
import episodeEmojis from 'src/lib/episodeEmojis'
import NotFoundCardList from 'src/components/NotFoundCardList'
import { ogUrl } from 'src/lib/meta'
import locale from 'src/lib/locale'

export interface EpisodePageProps {
  lessonTitle: string
  episodeTitle?: React.ReactNode
  episodeTitleString?: React.ReactNode
  episodeNumber: number
  notFound: boolean
  contentName: ContentProps['name']
}

const EpisodePage = ({
  lessonTitle,
  episodeTitle,
  episodeTitleString,
  episodeNumber,
  notFound,
  contentName
}: EpisodePageProps) => {
  const title = `${
    episodeEmojis[episodeNumber as keyof typeof episodeEmojis][1]
  }${locale === 'jp' ? '' : ' '}${lessonTitle}${
    episodeTitleString
      ? ` ${episodeEmojis[episodeNumber as keyof typeof episodeEmojis][0]} ${episodeTitleString} ${episodeEmojis[episodeNumber as keyof typeof episodeEmojis][2]}`
      : ''
  }`
  const [modalVisible, setModalVisible] = useState(false)
  const hideModal = () => setModalVisible(false)
  const showModal = () => setModalVisible(true)
  const url = ogUrl(episodeNumber)
  return (
    <Page>
      <Head>
        <title key="title">{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={lessonTitle} />
        <meta property="og:url" content={url} />
        <link rel="canonical" href={url} />
      </Head>
      {modalVisible && <TocModal hideModal={hideModal} />}
      {!notFound ? (
        <EpisodePageHeader
          showModal={showModal}
          episodeNumber={episodeNumber}
        />
      ) : (
        <div
          css={css`
            padding-top: ${spaces(1)};
          `}
        />
      )}
      <Container size="sm">
        <EpisodeContext.Provider
          value={{
            lessonTitle,
            episodeTitle,
            episodeNumber,
            showModal
          }}
        >
          {notFound ? <NotFoundCardList /> : <Content name={contentName} />}
        </EpisodeContext.Provider>
      </Container>
      {!notFound ? (
        <EpisodePageHeader
          showModal={showModal}
          episodeNumber={episodeNumber}
          isBottom
        />
      ) : (
        <div
          css={css`
            padding: ${spaces(3)} 0;
          `}
        ></div>
      )}
      <EpisodePageFooter />
    </Page>
  )
}

EpisodePage.defaultProps = {
  notFound: false
}

export default EpisodePage
