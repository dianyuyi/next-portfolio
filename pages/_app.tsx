import React, { FC } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { wrapper } from 'src/redux/store'
import { useSideNavSwitch } from 'src/hook'
import { useAppDispatch } from 'src/redux/store'
import { setLanguageCode } from 'src/redux/client/languageCodeSlice'

import '../public/css/font.css'
import 'src/i18n'
import GlobalStyles from 'src/styles/GlobalStyles'
import { theme } from 'src/styles/theme'
import Header from 'src/components/header'
import Sidenav from 'src/components/sidenav'

const App: FC<AppProps> = ({ Component, pageProps, router }) => {
  const { status, handleSideNav } = useSideNavSwitch(false)
  const { i18n } = useTranslation()
  const dispatch = useAppDispatch()

  const languageCode = useSelector(
    (state: Store.RootState) => state.client.languageCodeSlice.languageCode
  )

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code)
    dispatch(setLanguageCode(code))
  }

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/png" />
      </Head>
      <DefaultSeo
        titleTemplate="%s | Loxi's Portfolio"
        openGraph={{
          type: 'website',
          locale: 'zh_TW',
          description: '書墨與程式之海',
          site_name: `Loxi's Portfolio`,
          images: [],
        }}
        additionalLinkTags={[
          {
            rel: 'icon',
            type: 'image/x-icon',
            href: '/assets/favicon.ico',
          },
        ]}
      />
      <GlobalStyles />
      <AnimatePresence exitBeforeEnter initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
        <ThemeProvider theme={theme}>
          <Header languageCode={languageCode} changeLanguage={changeLanguage} />
          <Sidenav
            status={status}
            handleSideNav={handleSideNav}
            languageCode={languageCode}
            changeLanguage={changeLanguage}
          />
          <Component {...pageProps} />
        </ThemeProvider>
      </AnimatePresence>
    </>
  )
}
export default wrapper.withRedux(App)
