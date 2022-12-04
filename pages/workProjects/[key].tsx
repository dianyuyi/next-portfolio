import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { wrapper } from 'src/redux/store'
import { getPageCollectAsync } from 'src/redux/client/pageCollectSlice'

import Layout from 'src/components/layout'
import WorkPage from 'src/components/containers/workProjects/single'

const SingleWork = () => {
  const router = useRouter()
  const { t } = useTranslation()

  const [workProject, setWorkProject] = useState<Notion.PageContent>()
  const [isLoading, setIsLoading] = useState(false)

  const { key: pageKey } = router.query

  const languageCode = useSelector(
    (state: Store.RootState) => state.client.languageCodeSlice.languageCode
  )
  const pageCollect = useSelector(
    (state: Store.RootState) => state.server.pageCollectSlice.response
  )

  useEffect(() => {
    const getPageData = async () => {
      await fetch(`/api/workProjects/${pageKey}/`, {
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
          setWorkProject(pageData)
          setIsLoading(false)
        })
        .catch((error) => {
          console.log(JSON.stringify(error))
          setIsLoading(false)
        })
    }
    getPageData()
  }, [pageKey, languageCode, pageCollect])

  return (
    <Layout
      title={`${workProject?.title ?? t('workProjects.list_title')}`}
      description={`${workProject?.contexts[0]?.text ?? 'Work Project by Loxi'}`}
    >
      <WorkPage workProject={workProject} t={t} isLoading={isLoading} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const list = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/workProjects`)
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
