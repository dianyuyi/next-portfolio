import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

import { wrapper } from 'src/redux/store'
import { getDatabaseAsync } from 'src/redux/client/databaseSlice'

import Layout from 'src/components/layout'
import SideListPage from 'src/components/containers/sideProjects/list'

const SideProjects = (): JSX.Element => {
  const { t } = useTranslation()
  const [sideProjects, setSideProjects] = useState<Notion.Collect>()

  const database = useSelector((state: Store.RootState) => state.server.databaseSlice.response)

  const languageCode = useSelector(
    (state: Store.RootState) => state.client.languageCodeSlice.languageCode
  )

  useEffect(() => {
    const getPageData = async () => {
      await fetch(`/api/filterBlocks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          languageCode,
          database,
        }),
      })
        .then((res) => res.json())
        .then((pageData) => setSideProjects(pageData))
        .catch((error) => console.log(JSON.stringify(error)))
    }
    getPageData()
  }, [languageCode, database])

  return (
    <Layout title={t(`menu.side_projects`)} description="Side Project 列表">
      <SideListPage sideProjects={sideProjects} t={t} />
    </Layout>
  )
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  await store.dispatch(getDatabaseAsync('side-projects'))

  return {
    props: {},
    revalidate: 60 * 5,
  }
})

export default SideProjects
