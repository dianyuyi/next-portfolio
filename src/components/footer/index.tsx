import React from 'react'

import { FooterContainer, Copyright } from './styled'
import SocialMedia from 'src/components/socialMedia'
import mediaList from 'src/utils/mediaData'

const Footer = (): JSX.Element => {
  return (
    <FooterContainer>
      <Copyright>© 2022 Loxi | All rights reserved.</Copyright>
      <SocialMedia iconColor="white" mediaList={mediaList}/>
    </FooterContainer>
  )
}

export default Footer
