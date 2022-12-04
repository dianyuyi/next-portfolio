import React from 'react'
import ImgWrapper from './imgWrapper'
import IntroWrapper from './introWrapper'
import { IntroWorkWrapper } from './styled'
import { SideHolder } from 'src/components/containers/sideProjects/holder'

const SidePage = ({
  sideProject,
  t,
  isLoading,
}: {
  sideProject: Notion.PageContent
  t: (arg0: string) => string
  isLoading: Global.Loading
}): JSX.Element => {
  return (
    <IntroWorkWrapper>
      {sideProject && Object.keys(sideProject).length > 0 ? (
        <>
          <ImgWrapper sideProject={sideProject} />
          <IntroWrapper sideProject={sideProject} />
        </>
      ) : (
        <SideHolder isLoading={isLoading} />
      )}
    </IntroWorkWrapper>
  )
}

export default SidePage
