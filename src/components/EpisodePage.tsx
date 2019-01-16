/** @jsx jsx */
import { css, Global, jsx } from '@emotion/core'
export const jsxBabelFix = jsx
import Head from 'next/head'
import React from 'react'
import Container from 'src/components/Container'
import Content, { ContentProps } from 'src/components/Content'
import { InternalLink } from 'src/components/ContentTags'
import EpisodeHeroContext from 'src/components/EpisodeHeroContext'
import Page from 'src/components/Page'
import episodeTitlePrefix from 'src/lib/episodeTitlePrefixAndColor'
import h from 'src/lib/h'
import numEpisodes from 'src/lib/numEpisodes'
import pathHelpers from 'src/lib/pathHelpers'
import { colors, fontSizes, spaces } from 'src/lib/theme'

export interface EpisodePageProps {
  lessonName: keyof typeof pathHelpers
  lessonTitle: string
  episodeTitle?: React.ReactNode
  episodeTitleString?: React.ReactNode
  episodeNumber?: number
  episodeName?: string
  contentName: ContentProps['name']
}

const navigationLinkClasses = css`
  text-decoration: none;
  color: ${colors('indigo300')};
  font-weight: bold;
  font-size: ${fontSizes(0.7)};
`

const EpisodePage: React.FC<EpisodePageProps> = ({
  lessonTitle,
  lessonName,
  episodeTitle,
  episodeTitleString,
  episodeNumber,
  contentName
}) => (
  <Page>
    <Head>
      <title key="title">
        {lessonTitle}
        {episodeTitleString && ` | ${episodeTitleString}`} | CSmoji
      </title>
    </Head>
    <Global
      styles={css`
        html,
        body {
          background-color: ${colors('indigo100')};
        }
      `}
    />
    <Container size="sm">
      <div
        css={css`
          display: flex;
          align-items: center;
          padding: ${spaces(0.5)} ${spaces(0.5)} ${spaces(0.5)};
          border-bottom: 1px solid ${colors('indigo50')};
          margin: 0 ${spaces('-0.5')} ${spaces(0.5)} ${spaces('-0.5')};
        `}
      >
        <div
          css={css`
            width: 32%;
            text-align: left;
          `}
        >
          {episodeNumber && episodeNumber >= 1 && (
            <InternalLink
              href={pathHelpers[lessonName](
                episodeNumber === 1 ? undefined : episodeNumber - 1
              )}
              css={navigationLinkClasses}
            >
              ←{' '}
              {episodeNumber === 1
                ? h('introductionPageLink')
                : episodeTitlePrefix(episodeNumber - 1, lessonName, true)
                    .prefix}
            </InternalLink>
          )}
        </div>
        <div
          css={css`
            width: 36%;
            text-align: center;
          `}
        >
          {/* <InternalLink
            href={pathHelpers[lessonName]('toc')}
            css={navigationLinkClasses}
          >
            {h('indexPageLink')}
          </InternalLink> */}
        </div>
        <div
          css={css`
            width: 32%;
            text-align: right;
          `}
        >
          {(episodeNumber || 0) < numEpisodes(lessonName) && (
            <InternalLink
              href={pathHelpers[lessonName]((episodeNumber || 0) + 1)}
              css={navigationLinkClasses}
            >
              {
                episodeTitlePrefix((episodeNumber || 0) + 1, lessonName, true)
                  .prefix
              }{' '}
              →
            </InternalLink>
          )}
        </div>
      </div>
      <EpisodeHeroContext.Provider
        value={{
          lessonName,
          lessonTitle,
          episodeTitle,
          episodeNumber
        }}
      >
        <Content name={contentName} />
      </EpisodeHeroContext.Provider>
    </Container>
  </Page>
)

export default EpisodePage
