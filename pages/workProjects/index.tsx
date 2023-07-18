import React from 'react'
import { useSelector } from 'react-redux'
import { END } from 'redux-saga'
import { useTranslation } from 'react-i18next'

import { wrapper } from 'src/redux/store'
import { getDatabaseRequest } from 'src/redux_saga/server/getDatabase/actions'
import { usePageCollect } from 'src/hook'
import Layout from 'src/components/layout'
import WorkListPage from 'src/components/containers/workProjects/list'

const WorkProjects = (): JSX.Element => {
  const { t } = useTranslation()

  const database = useSelector((state: Store.RootState) => state.server.databaseSlice.response)

  const languageCode = useSelector(
    (state: Store.RootState) => state.client.languageCodeSlice.languageCode
  )
  const workProjects = usePageCollect(languageCode, database)

  return (
    <Layout title={t(`menu.work_projects`)} description="Work Project 列表">
      <WorkListPage workProjects={workProjects} t={t} />
    </Layout>
  )
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  store.dispatch(getDatabaseRequest({ type: 'work-projects' }))
  store.dispatch(END)
  await store.sagaTask.toPromise()

  return {
    props: {},
    revalidate: 60 * 5,
  }
})

export default WorkProjects
