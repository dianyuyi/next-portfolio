import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { END } from 'redux-saga'
import { useTranslation } from 'react-i18next'

import { wrapper } from 'src/redux/store'
import { getDatabaseRequest } from 'src/redux_saga/server/getSideDatabase/actions'
import { usePageCollect } from 'src/hook'
import Layout from 'src/components/layout'
import SideListPage from 'src/components/containers/sideProjects/list'

const SideProjects = (): JSX.Element => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const database = useSelector((state: Store.RootState) => state.server.sideDatabaseSlice.response)

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
  store.dispatch(getDatabaseRequest({ type: 'side-projects' }))
  store.dispatch(END)
  await store.sagaTask.toPromise()

  return {
    props: {},
    revalidate: 60 * 5,
  }
})

export default SideProjects
