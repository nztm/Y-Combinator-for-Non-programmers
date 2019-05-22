/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Link from 'next/link'
import React from 'react'
import { colors } from 'src/lib/theme'

interface LinkContextProps {
  inLink: boolean
}

const linkContextDefault: LinkContextProps = {
  inLink: false
}

export const LinkContext = React.createContext<LinkContextProps>(
  linkContextDefault
)

export const commonLinkClass = css`
  &:hover,
  &:active {
    background-color: ${colors('indigo100')};
  }
`

export const ExternalLink = (props: JSX.IntrinsicElements['a']) => (
  <LinkContext.Provider value={{ inLink: true }}>
    <a {...props} css={commonLinkClass} />
  </LinkContext.Provider>
)

// NOTE: Can't use <ExternalLink> as a child of <Link> - the child of <Link> must be <a>
// NOTE: passHref is necessary if you use emotion
export const InternalLink = ({
  href,
  prefetch,
  ...props
}: JSX.IntrinsicElements['a'] & {
  prefetch: boolean
}) => (
  <LinkContext.Provider value={{ inLink: true }}>
    <Link href={href} passHref prefetch={prefetch}>
      <a {...props} css={commonLinkClass} />
    </Link>
  </LinkContext.Provider>
)

InternalLink.defaultProps = {
  prefetch: false
}
