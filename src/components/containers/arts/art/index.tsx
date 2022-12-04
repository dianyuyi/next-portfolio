import React from 'react'

import ImgWrapper from './imgWrapper'
import IntroWrapper from './introWrapper'
import { ArtHolder } from 'src/components/containers/arts/holder'
import { IntroWorkWrapper } from './styled'

const ArtPage = ({
  art,
  isLoading,
}: {
  art: Notion.PageContent
  isLoading: Global.Loading
}): JSX.Element => {
  return (
    <IntroWorkWrapper>
      {art && Object.keys(art).length > 0 ? (
        <>
          <ImgWrapper art={art} />
          <IntroWrapper art={art} />
        </>
      ) : (
        <ArtHolder isLoading={isLoading} />
      )}
    </IntroWorkWrapper>
  )
}

export default ArtPage
