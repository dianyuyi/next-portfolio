import React from 'react'

import { FooterContainer, Copyright } from './styled'
import SocialMedia from 'src/components/socialMedia'

interface Props {
  mediaList: Layout.MediaList | null
}

const Footer = ({ mediaList }: Props): JSX.Element => {
  return (
    <FooterContainer>
      <Copyright>© 2022 Loxi | All rights reserved.</Copyright>
      <SocialMedia color="white" mediaList={mediaList} />
    </FooterContainer>
  )
}

export default Footer
