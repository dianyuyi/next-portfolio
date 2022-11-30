import React from 'react'

import { IntroContainer } from 'src/components/containers/arts/art/styled'
import { IntroImg } from './styled'

const ImgWrapper = ({ art }: { art: Notion.PageContent }): JSX.Element => {
  return (
    <IntroContainer>
      <IntroImg src={art.cover} width={600} height={400} alt={art.title} priority={true} />
    </IntroContainer>
  )
}

export default ImgWrapper
