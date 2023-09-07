import React from 'react'
// import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
// import { END } from 'redux-saga'
// import { getPageCollectRequest } from 'src/redux_saga/server/getPageCollect/actions'
import { getPageCollectAPI } from 'server/notion/getPageCollectAPI'
import { wrapper } from 'src/redux/store'
import Layout from 'src/components/layout'
import ArtPage from 'src/components/containers/arts/art'
import { usePageData } from 'src/hook'

const SingleWork = ({ pageKey, pageCollect }: { pageKey: string; pageCollect: Notion.Blocks }) => {
  // const router = useRouter()

  const languageCode = useSelector(
    (state: Store.RootState) => state.client.languageCodeSlice.languageCode
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
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps = wrapper.getStaticProps((store) => async ({ params }) => {
  const pageKey = params.key as string

  const collect = await getPageCollectAPI(pageKey)

  return {
    props: {
      pageKey,
      pageCollect: collect?.results ?? [],
    },
    revalidate: 60 * 30,
  }
})

export default SingleWork
