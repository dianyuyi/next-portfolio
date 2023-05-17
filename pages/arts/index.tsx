import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { END } from 'redux-saga'
import { useTranslation } from 'react-i18next'

import { wrapper } from 'src/redux/store'
import { getDatabaseRequest } from 'src/redux_saga/server/getDatabase/actions'

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
        })
        .catch((error) => {
          console.log(JSON.stringify(error))
        })
    }
    getPageData()
  }, [languageCode, database])

  return (
    <Layout title={t(`menu.arts`)} description="arts 列表">
      <ArtListPage arts={arts} t={t} />
    </Layout>
  )
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  store.dispatch(getDatabaseRequest({ type: 'arts' }))
  store.dispatch(END)
  await store.sagaTask.toPromise()

  return {
    props: {},
    revalidate: 60 * 5,
  }
})

export default Arts
