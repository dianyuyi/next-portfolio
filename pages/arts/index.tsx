import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

import { wrapper } from 'src/redux/store'
import { getDatabaseAsync } from 'src/redux/client/databaseSlice'

import Layout from 'src/components/layout'
import ArtListPage from 'src/components/containers/arts/list'

const Arts = (): JSX.Element => {
  const { t } = useTranslation()
  const [arts, setArts] = useState<Notion.Collect>()
  const [isLoading, setIsLoading] = useState(false)

  const database = useSelector((state: Store.RootState) => state.server.databaseSlice.response)

  const languageCode = useSelector(
    (state: Store.RootState) => state.client.languageCodeSlice.languageCode
  )

  useEffect(() => {
    setIsLoading(true)
    const getPageData = async () => {
      await fetch(`/api/filterBlocks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          languageCode,
          database,
        }),
      })
        .then((res) => res.json())
        .then((pageData) => {
          setArts(pageData)
          setIsLoading(false)
        })
        .catch((error) => {
          console.log(JSON.stringify(error))
          setIsLoading(false)
        })
    }
    getPageData()
  }, [languageCode, database])

  return (
    <Layout title={t(`menu.arts`)} description="arts 列表">
      <ArtListPage arts={arts} t={t} isLoading={isLoading} />
    </Layout>
  )
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  await store.dispatch(getDatabaseAsync('arts'))

  return {
    props: {},
    revalidate: 60 * 5,
  }
})

export default Arts
