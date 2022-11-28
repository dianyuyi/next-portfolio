import React from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

import { useTranslation } from 'react-i18next'

import Layout from 'src/components/layout'
import HomePage from 'src/components/containers/home'

const Index = (_props: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  const { t } = useTranslation()
  return (
    <Layout title="Home" description="Home page">
      <HomePage t={t} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}

export default Index
