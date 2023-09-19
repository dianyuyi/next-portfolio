import React from 'react'
import { useSelector } from 'react-redux'
// import { END } from 'redux-saga'
import { useTranslation } from 'react-i18next'

import { wrapper } from 'src/redux/store'
// import { getDatabaseRequest } from 'src/redux_saga/server/getDatabase/actions'
import { getDatabaseAPI } from 'server/notion/getDataBaseAPI'

import { usePageCollect } from 'src/hook'
import Layout from 'src/components/layout'
import SideListPage from 'src/components/containers/sideProjects/list'

const SideProjects = ({ database }: { database: Notion.Database }): JSX.Element => {
  const { t } = useTranslation()

  // const database = useSelector((state: Store.RootState) => state.server.databaseSlice.response)

  const languageCode = useSelector(
    (state: Store.RootState) => state.client.languageCodeSlice.languageCode
  )

  const sideProjects = usePageCollect(languageCode, database)

  return (
    <Layout title={t(`menu.side_projects`)} description="Side Project 列表">
      <SideListPage sideProjects={sideProjects} t={t} />
    </Layout>
  )
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  // store.dispatch(getDatabaseRequest({ type: 'side-projects' }))
  // store.dispatch(END)
  // await store.sagaTask.toPromise()

  const response = await getDatabaseAPI('side-projects')

  return {
    props: {
      database: response?.results ?? [],
    },
    revalidate: 60 * 30,
  }
})

export default SideProjects
