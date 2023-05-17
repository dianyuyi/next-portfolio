import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { END } from 'redux-saga'
import { useTranslation } from 'react-i18next'

import { wrapper } from 'src/redux/store'
import { getDatabaseRequest } from 'src/redux_saga/server/getDatabase/actions'

import Layout from 'src/components/layout'
import SideListPage from 'src/components/containers/sideProjects/list'
import { usePageCollect } from 'src/hook'

const SideProjects = (): JSX.Element => {
  const { t } = useTranslation()
  // const [sideProjects, setSideProjects] = useState<Notion.Collect>()
  // const [isLoading, setIsLoading] = useState(false)

  const database = useSelector((state: Store.RootState) => state.server.databaseSlice.response)

  const languageCode = useSelector(
    (state: Store.RootState) => state.client.languageCodeSlice.languageCode
  )

  const sideProjects = usePageCollect(languageCode, database)

  // useEffect(() => {
  //   handlePageData(languageCode, database)
  //   // const getPageData = async () => {
  //   //   await fetch(`/api/filterBlocks`, {
  //   //     method: 'POST',
  //   //     headers: {
  //   //       'Content-Type': 'application/json',
  //   //     },
  //   //     body: JSON.stringify({
  //   //       languageCode,
  //   //       database,
  //   //     }),
  //   //   })
  //   //     .then((res) => res.json())
  //   //     .then((pageData) => {
  //   //       setSideProjects(pageData)
  //   //     })
  //   //     .catch((error) => {
  //   //       console.log(JSON.stringify(error))
  //   //     })
  //   // }
  //   // getPageData()
  // }, [languageCode, database])

  return (
    <Layout title={t(`menu.side_projects`)} description="Side Project 列表">
      <SideListPage sideProjects={sideProjects} t={t} />
    </Layout>
  )
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  store.dispatch(getDatabaseRequest({ type: 'side-projects' }))
  store.dispatch(END)
  await store.sagaTask.toPromise()

  return {
    props: {},
    revalidate: 60 * 5,
  }
})

export default SideProjects
