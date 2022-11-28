import React from 'react'

import { MainTitleContainer, MainTitle, TitleBg } from './styled'

const Title = ({ title }: { title: string }) => {
  return (
    <MainTitleContainer>
      <MainTitle>{title}</MainTitle>
      {/* <TitleBg /> */}
    </MainTitleContainer>
  )
}

export default Title
