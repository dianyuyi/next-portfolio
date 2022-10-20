import React, { FC } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { AnimatePresence } from 'framer-motion'
import { DefaultSeo } from 'next-seo'

import { ThemeProvider } from 'styled-components'

import { wrapper } from 'src/redux/store'

import 'src/i18n'
import GlobalStyles from 'src/styles/GlobalStyles'
import { theme } from 'src/styles/theme'

const App: FC<AppProps> = ({ Component, pageProps, router }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/png" />
      </Head>
      <DefaultSeo
        titleTemplate="Loxi's Portfolio - %s"
        openGraph={{
          type: 'website',
          locale: 'zh_TW',
          description: '書墨與程式之海',
          site_name: `Loxi's Portfolio`,
          images: [],
        }}
      />
      <GlobalStyles />
      <AnimatePresence exitBeforeEnter initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </AnimatePresence>
    </>
  )
}
export default wrapper.withRedux(App)
