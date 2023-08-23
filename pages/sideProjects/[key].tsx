import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { END } from 'redux-saga'
import {
  getPageCollectRequest,
  resetGetPageCollect,
} from 'src/redux_saga/server/getSidePageCollect/actions'
import { wrapper } from 'src/redux/store'
import { usePageData } from 'src/hook'

import Layout from 'src/components/layout'
import SidePage from 'src/components/containers/sideProjects/single'

const SingleWork = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const { key: pageKey } = router.query

  const languageCode = useSelector(
    (state: Store.RootState) => state.client.languageCodeSlice.languageCode
  )
  const pageCollect = useSelector(
    (state: Store.RootState) => state.server.pageSideCollectSlice.response
  )

  const sideProject = usePageData('sideProjects', pageKey, languageCode, pageCollect)

  useEffect(() => {
    return () => {
      dispatch(resetGetPageCollect())
    }
  }, [])

  return (
    <Layout
      title={`${sideProject?.title ?? t('sideProjects.list_title')}`}
      description={`${sideProject?.contexts[0]?.text ?? 'Side Project by Loxi'}`}
    >
      <SidePage sideProject={sideProject} t={t} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const list = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/sideProjects`)
    .then((res) => res.json())
    .catch((error) => console.log(JSON.stringify(error)))

  return {
    paths: list ?? [],
    fallback: 'blocking',
  }
}

export const getStaticProps = wrapper.getStaticProps((store) => async ({ params }) => {
  const pageKey = params.key as string

  store.dispatch(getPageCollectRequest({ pageKey }))
  store.dispatch(END)
  await store.sagaTask.toPromise()

  return {
    props: {},
    revalidate: 60 * 5,
  }
})

export default SingleWork
