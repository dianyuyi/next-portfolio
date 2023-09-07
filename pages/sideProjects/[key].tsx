import React, { useEffect, useState } from 'react'
// import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
// import { END } from 'redux-saga'
// import { getPageCollectRequest } from 'src/redux_saga/server/getPageCollect/actions'
import { wrapper } from 'src/redux/store'
import { usePageData } from 'src/hook'
import { getPageCollectAPI } from 'server/notion/getPageCollectAPI'

import Layout from 'src/components/layout'
import SidePage from 'src/components/containers/sideProjects/single'

const SingleWork = ({ pageKey, pageCollect }: { pageKey: string; pageCollect: Notion.Blocks }) => {
  const { t } = useTranslation()

  // const [sideProject, setSideProject] = useState<Notion.PageContent>()

  // // const { key: pageKey } = router.query

  const languageCode = useSelector(
    (state: Store.RootState) => state.client.languageCodeSlice.languageCode
  )
  // // const pageCollect = useSelector(
  // //   (state: Store.RootState) => state.server.pageCollectSlice.response
  // // )
  const sideProject = usePageData('sideProjects', pageKey, languageCode, pageCollect)

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
