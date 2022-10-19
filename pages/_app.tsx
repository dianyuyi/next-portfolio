import React, { FC } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { AnimatePresence } from 'framer-motion'
import { DefaultSeo } from 'next-seo'

import 'src/i18n'
import GlobalStyles from 'src/styles/GlobalStyles'

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
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  )
}
export default App
