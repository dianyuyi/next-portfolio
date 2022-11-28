import React from 'react'

import { IntroContainer } from 'src/components/containers/sideProjects/single/styled'
import { IntroImg } from './styled'

const ImgWrapper = ({ workProject }: { workProject: Notion.PageContent }): JSX.Element => {
  return (
    <IntroContainer>
      <IntroImg
        src={workProject.cover}
        width={600}
        height={400}
        alt={workProject.title}
        priority={true}
      />
    </IntroContainer>
  )
}

export default ImgWrapper
