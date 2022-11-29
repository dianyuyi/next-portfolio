import React from 'react'
import Image from 'next/image'

import { GrMail } from 'react-icons/gr'
import ListTitle from 'src/components/title'
import {
  AboutContainer,
  CircleClip,
  IntroContext,
  IntroInner,
  Text,
  ContactBar,
  IconWrapper,
  ResumeBar,
  ResumeBtn,
} from './styled'
import { NextLink } from 'src/components/link'

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
    <>
      <ListTitle title={t('menu.about')} />
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
            <Text>{t(`about.about_article_01`)}</Text>
            <Text>{t(`about.about_article_02`)}</Text>
            <Text>{t(`about.about_article_03`)}</Text>
            <ContactBar>
              <IconWrapper>
                <GrMail />
              </IconWrapper>
              <NextLink href="mailto:dianyuyi@gmail.com">dianyuyi@gmail.com</NextLink>
            </ContactBar>
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
    </>
  )
}

export default AboutPage
