import React, { ReactHTMLElement } from 'react'
import Image from 'next/image'

import {
  AboutContainer,
  CircleClip,
  IntroContext,
  IntroInner,
  Text,
  ResumeBar,
  ResumeBtn,
} from './styled'

const AboutPage = ({ t }: { t: (arg0: string) => string }) => {
  const resumeLinks = [
    {
      language: 'EN',
      url: 'https://www.cakeresume.com/xi-lo',
    },
    {
      language: 'TW',
      url: 'https://www.cakeresume.com/xi-lo-tw',
    },
  ] as Global.ResumeLinks

  const ResumeUrl = (e: React.MouseEvent, url: string) => {
    e.preventDefault()
    window.open(url, '_blank')
  }
  return (
    <AboutContainer>
      <CircleClip>
        <Image
          src="/assets/photo_fix.webp"
          alt="person-img"
          width={128}
          height={128}
          priority={true}
        />
      </CircleClip>
      <IntroContext>
        <IntroInner>
          <Text>{t(`article.about_article_part1`)}</Text>
          <Text>{t(`article.about_article_part2`)}</Text>
        </IntroInner>
      </IntroContext>
      <ResumeBar>
        {resumeLinks.map((link) => (
          <ResumeBtn
            key={link.language}
            onClick={(e) => ResumeUrl(e, link.url)}
          >{`》Resume(${link.language})`}</ResumeBtn>
        ))}
      </ResumeBar>
    </AboutContainer>
  )
}

export default AboutPage
