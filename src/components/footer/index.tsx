import React from 'react'

import { FooterContainer, Copyright } from './styled'
import SocialMedia from 'src/components/socialMedia'

const Footer = ({ mediaList }: { mediaList: Layout.MediaList }): JSX.Element => {
  return (
    <FooterContainer>
      <Copyright>© 2022 Loxi | All rights reserved.</Copyright>
      <SocialMedia mediaList={mediaList} />
    </FooterContainer>
  )
}

export default Footer
