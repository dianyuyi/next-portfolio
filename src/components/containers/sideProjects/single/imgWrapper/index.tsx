import React from 'react'

import { IntroContainer } from 'src/components/containers/sideProjects/single/styled'
import { IntroImg } from './styled'

const ImgWrapper = ({ sideProject }: { sideProject: Notion.PageContent }): JSX.Element => {
  return (
    <IntroContainer>
      <IntroImg
        src={sideProject.cover}
        width={600}
        height={400}
        alt={sideProject.title}
        priority={true}
      />
    </IntroContainer>
  )
}

export default ImgWrapper
