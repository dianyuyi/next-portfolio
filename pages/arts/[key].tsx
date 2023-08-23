import React from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { END } from 'redux-saga'
import { getPageCollectRequest } from 'src/redux_saga/server/getPageCollect/actions'
import { wrapper } from 'src/redux/store'
import Layout from 'src/components/layout'
import ArtPage from 'src/components/containers/arts/art'
import { usePageData } from 'src/hook'

const SingleWork = () => {
  const router = useRouter()

  const { key: pageKey } = router.query

  const languageCode = useSelector(
    (state: Store.RootState) => state.client.languageCodeSlice.languageCode
  )
  const pageCollect = useSelector(
    (state: Store.RootState) => state.server.pageCollectSlice.response
  )

  const art = usePageData('arts', pageKey, languageCode, pageCollect)

  return (
    <Layout
      title={`${art?.title ?? 'Art'}`}
      description={`${art?.contexts[0]?.text ?? 'Art by Loxi'}`}
    >
      <ArtPage art={art} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const list = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/arts`)
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
