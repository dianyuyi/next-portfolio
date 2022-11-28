'use client'

import React, { useRef } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

import { useDimensions } from 'src/hook/useDimensions'

import {
  SideContainer,
  MotionBg,
  MotionListWrapper,
  ToggleButton,
  ListItem,
  ItemLink,
  LanguageWrapper,
  LanguageButton,
} from './styled'
import sideData from './sideData'

const SideNavbar = ({
  status,
  handleSideNav,
  languageCode,
  changeLanguage,
}: {
  status: boolean
  handleSideNav: () => void
  languageCode: string
  changeLanguage: (arg0: string) => void
}) => {
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)
  const router = useRouter()
  const { t } = useTranslation()

  const Path = (props: Nav.Toggle) => (
    <motion.path
      fill="transparent"
      strokeWidth="2"
      stroke="hsl(0, 0%, 18%)"
      strokeLinecap="round"
      {...props}
    />
  )
  return (
    <SideContainer
      initial={false}
      animate={status ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <MotionBg variants={sideData.sideBar} />
      <MotionListWrapper
        variants={sideData.navigation}
        className={`${status ? '' : 'preventClick'}`}
      >
        {sideData.menuItem.menu.links.map((link: Nav.Link, idx: number) => (
          <ListItem
            key={idx}
            onClick={() => handleSideNav()}
            variants={sideData.menuItem.variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            active={link.href !== '/' && router.asPath.includes(link.href) ? 'true' : 'false'}
          >
            <ItemLink href={link.href}>{t(`menu.${link.name}`)}</ItemLink>
          </ListItem>
        ))}
        <LanguageWrapper className={`${status ? '' : 'preventClick'}`}>
          {sideData.menuItem.menu.languages.map((language: Nav.Language, idx: number) => (
            <ListItem
              key={idx}
              variants={sideData.menuItem.variants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <LanguageButton
                className={`${languageCode === language.code ? 'active' : ''}`}
                onClick={() => changeLanguage(language.code)}
              >
                {t(`menu.${language.name}`)}
              </LanguageButton>
            </ListItem>
          ))}
        </LanguageWrapper>
      </MotionListWrapper>
      <ToggleButton onClick={() => handleSideNav()} aria-label="toggle-button">
        <svg width="23" height="23" viewBox="0 0 23 23">
          {sideData.menuToggle.map((toggle: Nav.Toggle, idx: number) => {
            return (
              <Path
                key={idx}
                d={toggle.d}
                variants={toggle.variants}
                transition={toggle.transition}
              />
            )
          })}
        </svg>
      </ToggleButton>
    </SideContainer>
  )
}

export default SideNavbar
