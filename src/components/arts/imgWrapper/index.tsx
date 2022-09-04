import React from 'react'

import { IntroContainer } from '../commonStyle'
import { IntroImg } from './styled'

interface Props {
  art: SheetGlobal.Art | null
}

const ImgWrapper = ({ art }: Props): JSX.Element => {
  return (
    <IntroContainer key={art.id}>
      <IntroImg
        src={art.image_webp !== '' ? art.image_webp : art.image}
        width={600}
        height={600}
        alt={art.name_en}
      />
    </IntroContainer>
  )
}

export default ImgWrapper
