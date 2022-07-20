import React from 'react'

import { FooterContainer, Copyright } from './styled'
import SocialMedia from 'src/components/socialMedia'

interface Props {
  mediaList: SheetGlobal.MediaList | null
}

const Footer = ({ mediaList }: Props): JSX.Element => {
  return (
    <FooterContainer>
      <Copyright>© 2022 Loxi | All rights reserved.</Copyright>
      <SocialMedia iconColor="white" mediaList={mediaList} />
    </FooterContainer>
  )
}

export default Footer
