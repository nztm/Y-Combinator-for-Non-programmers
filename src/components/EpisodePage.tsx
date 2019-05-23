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
  const title = `${lessonTitle}${
    episodeTitleString
      ? ` ${episodeEmojis[episodeNumber as keyof typeof episodeEmojis].join(
          ''
        )} ${episodeTitleString}`
      : ''
  }`
  const [modalVisible, setModalVisible] = useState(false)
  const hideModal = () => setModalVisible(false)
  const showModal = () => setModalVisible(true)
  return (
    <Page>
      <Head>
        <title key="title">{title}</title>
        <meta property="og:title" content={title} />
      </Head>
      {modalVisible && <TocModal hideModal={hideModal} />}
      <Container size="sm">
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
        <EpisodeContext.Provider
          value={{
            lessonTitle,
            episodeTitle,
            episodeNumber
          }}
        >
          {notFound ? <NotFoundCardList /> : <Content name={contentName} />}
        </EpisodeContext.Provider>
        <EpisodePageFooter />
      </Container>
    </Page>
  )
}

EpisodePage.defaultProps = {
  notFound: false
}

export default EpisodePage
