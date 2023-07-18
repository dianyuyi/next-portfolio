import React from 'react'
import { useSelector } from 'react-redux'
import { END } from 'redux-saga'
import { useTranslation } from 'react-i18next'

import { wrapper } from 'src/redux/store'
import { getDatabaseRequest } from 'src/redux_saga/server/getDatabase/actions'
import { usePageCollect } from 'src/hook'
import Layout from 'src/components/layout'
import ArtListPage from 'src/components/containers/arts/list'

const Arts = (): JSX.Element => {
  const { t } = useTranslation()

  const database = useSelector((state: Store.RootState) => state.server.databaseSlice.response)

  const languageCode = useSelector(
    (state: Store.RootState) => state.client.languageCodeSlice.languageCode
  )

  const arts = usePageCollect(languageCode, database)

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
