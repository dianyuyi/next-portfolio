import React from 'react'
import { useTranslation } from 'react-i18next'

import { wrapper } from 'src/redux/store'

import Layout from 'src/components/layout'
import AboutPage from 'src/components/containers/about'

const About = (): JSX.Element => {
  const { t } = useTranslation()

  return (
    <Layout title={t(`menu.about`)} description="About me">
      <AboutPage t={t} />
    </Layout>
  )
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  return {
    props: {},
    revalidate: 60 * 5,
  }
})

export default About
