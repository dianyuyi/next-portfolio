import React from 'react'

import { FillImage } from 'src/components/image'

import { MainBg, HeroContainer, HeroBg, HeroContent, HeroH1 } from './styled'

const HomePage = ({ t }: { t: (arg0: string) => string }) => {
  return (
    <MainBg>
      <HeroContainer>
        <HeroBg>
          <FillImage
            src="/assets/hero_loxi_sign.webp"
            alt="loxi"
            width="120vw"
            height="120vh"
            priority={true}
            style={{
              objectFit: 'cover',
              top: '-80px',
            }}
          />
        </HeroBg>
        <HeroContent>
          <HeroH1>{t(`title.hero_title_01`)}</HeroH1>
          <HeroH1>{t(`title.hero_title_02`)}</HeroH1>
        </HeroContent>
      </HeroContainer>
    </MainBg>
  )
}

export default HomePage
