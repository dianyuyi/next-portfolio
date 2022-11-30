import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { NextLink } from 'src/components/link'

import { AiFillCaretDown } from 'react-icons/ai'
import {
  StyledHeader,
  HeaderContainer,
  ContentBox,
  LogoContentBox,
  LogoWrapper,
  LinkItem,
  SelectWrapper,
  LanguageSelect,
  IconWrapper,
} from './styled'
import sideData from 'src/components/sidenav/sideData'

const Header = ({
  languageCode,
  changeLanguage,
}: {
  languageCode: string
  changeLanguage: (arg0: string) => void
}): JSX.Element => {
  const { menu } = sideData.menuItem
  const router = useRouter()
  const { t } = useTranslation()

  return (
    <StyledHeader>
      <HeaderContainer>
        <LogoContentBox>
          <NextLink href="/">
            <LogoWrapper>
              <Image
                src="/assets/logo_loxi.svg"
                alt="logo"
                width={32}
                height={20}
                priority={true}
              />
            </LogoWrapper>
          </NextLink>
        </LogoContentBox>
        <ContentBox>
          {menu.links.map((link: Nav.Link, idx: number) => (
            <LinkItem
              key={idx}
              active={link.href !== '/' && router.asPath.includes(link.href) ? 'true' : 'false'}
            >
              <NextLink href={link.href}>{t(`menu.${link.name}`)}</NextLink>
            </LinkItem>
          ))}

          <SelectWrapper>
            <LanguageSelect value={languageCode} onChange={(e) => changeLanguage(e.target.value)}>
              {menu.languages.map((language: Nav.Language, idx: number) => (
                <option key={idx} value={language.code}>
                  {t(`menu.${language.name}`)}
                </option>
              ))}
            </LanguageSelect>
            <IconWrapper>
              <AiFillCaretDown fill="#FFF" />
            </IconWrapper>
          </SelectWrapper>
        </ContentBox>
      </HeaderContainer>
    </StyledHeader>
  )
}

export default Header
