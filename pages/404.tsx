import React from 'react'
import { useTranslation } from 'react-i18next'

import { wrapper } from 'src/redux/store'

import Layout from 'src/components/layout'
import ErrorPage from 'src/components/containers/error'

const Error = (): JSX.Element => {
  const { t } = useTranslation()

  return (
    <Layout title={t(`menu.error`)} description="404 Error">
      <ErrorPage t={t} />
    </Layout>
  )
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  return {
    props: {},
    revalidate: 60 * 5,
  }
})

export default Error
