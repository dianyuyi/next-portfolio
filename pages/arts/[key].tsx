import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

import { wrapper } from 'src/redux/store'
import { getPageCollectAsync } from 'src/redux/client/pageCollectSlice'

import Layout from 'src/components/layout'
import ArtPage from 'src/components/containers/arts/art'

const SingleWork = () => {
  const router = useRouter()

  const [art, setArt] = useState<Notion.PageContent>()

  const { key: pageKey } = router.query

  const languageCode = useSelector(
    (state: Store.RootState) => state.client.languageCodeSlice.languageCode
  )
  const pageCollect = useSelector(
    (state: Store.RootState) => state.server.pageCollectSlice.response
  )

  useEffect(() => {
    const getPageData = async () => {
      await fetch(`/api/arts/${pageKey}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          languageCode,
          pageCollect,
        }),
      })
        .then((res) => res.json())
        .then((pageData) => {
          setArt(pageData)
        })
        .catch((error) => {
          console.log(JSON.stringify(error))
        })
    }
    getPageData()
  }, [pageKey, languageCode, pageCollect])

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

  await store.dispatch(getPageCollectAsync(pageKey))

  return {
    props: {},
    revalidate: 60 * 5,
  }
})

export default SingleWork
