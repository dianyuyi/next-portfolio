import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'

import { setLanguageCode } from 'src/redux/client/languageCodeSlice'
import { useAppDispatch } from 'src/redux/store'
import { useDimensions } from 'src/hook/useDimensions'

import {
  SideNav,
  SideBg,
  SideNavList,
  SideNavBtn,
  SideNavListItem,
  SideNavLink,
  SideNavLngBtn,
} from './styled'
import sideData from './sideData'

const SideNavbar = () => {
  const [isSideOpen, setIsSideOpen] = React.useState(false)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  const languageCode = useSelector(
    (state: Store.RootState) => state.client.languageCodeSlice.languageCode
  )

  const { t, i18n } = useTranslation()
  const dispatch = useAppDispatch()
  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code)
    dispatch(setLanguageCode(code))
  }

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
    <SideNav
      initial={false}
      animate={isSideOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <SideBg variants={sideData.sideBar} />
      <SideNavList variants={sideData.navigation} className={`${isSideOpen ? '' : 'preventClick'}`}>
        {sideData.menuItem.menu.links.map((link: Nav.Link, idx: number) => (
          <SideNavListItem
            key={idx}
            onClick={() => setIsSideOpen(!isSideOpen)}
            variants={sideData.menuItem.variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <SideNavLink href={link.href}>{link.name}</SideNavLink>
          </SideNavListItem>
        ))}
        {sideData.menuItem.menu.languages.map((language: Nav.Language, idx: number) => (
          <SideNavListItem
            key={idx}
            onClick={() => setIsSideOpen(!isSideOpen)}
            variants={sideData.menuItem.variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <SideNavLngBtn
              className={`${languageCode === language.name ? 'active' : ''}`}
              onClick={() => changeLanguage(language.code)}
            >
              {t(`${language.name}`)}
            </SideNavLngBtn>
          </SideNavListItem>
        ))}
      </SideNavList>
      <SideNavBtn onClick={() => setIsSideOpen(!isSideOpen)}>
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
      </SideNavBtn>
    </SideNav>
  )
}

export default SideNavbar
