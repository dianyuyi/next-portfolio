import React from 'react'
import Image from 'next/image'

import { ErrorContainer, ErrorTitle, ErrorImgWrapper, ErrorBackLink } from './styled'

const AboutPage = ({ t }: { t: (arg0: string) => string }) => {
  return (
    <ErrorContainer>
      <ErrorTitle>{t('error_msg')}</ErrorTitle>
      <ErrorImgWrapper>
        <Image src="/assets/error_symbol.png" width={320} height={320} alt="error-image" />
      </ErrorImgWrapper>
      <ErrorBackLink href="/">
        <p>{t('error_back')}</p>
      </ErrorBackLink>
    </ErrorContainer>
  )
}

export default AboutPage
