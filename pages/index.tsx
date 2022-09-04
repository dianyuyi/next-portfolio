import React from 'react'
import { GetStaticProps } from 'next'

// import { getWorksAPI, getMediasAPI } from 'server/sheets/'

import Layout from 'src/components/layout'
import { NextLink } from 'src/components/link'

interface Props {
  works: SheetGlobal.Works | null
  mediaList: SheetGlobal.MediaList | null
}

// const Index = ({ works, mediaList }: Props): JSX.Element => {
const Index = (): JSX.Element => {
  return (
    <Layout title="index" description="首頁測試中" mediaList={null}>
      <main>
        <NextLink href="/arts/35">Sample test</NextLink>
        {/* {works.map((work) => (
          <p key={work.id}>{work.name_tw}</p>
        ))} */}
      </main>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // const works = await getWorksAPI()
  // const mediaList = await getMediasAPI()

  return {
    props: {
      // works,
      // mediaList,
    },
  }
}

export default Index
