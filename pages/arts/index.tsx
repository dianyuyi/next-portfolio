import React from 'react'
import { GetStaticProps } from 'next'

// import { getWorksAPI, getMediasAPI } from 'server/sheets/'
import { Client } from '@notionhq/client'

import Layout from 'src/components/layout'

interface Props {
  // works: SheetGlobal.Works | null
  // mediaList: SheetGlobal.MediaList | null
  testRes: object
}

const Arts = ({ testRes }: Props): JSX.Element => {
  // const notion = new Client({
  //   auth: process.env.NOTION_TOKEN,
  // })
  // const getPage = async () => {
  //   // const pageId = process.env.NOTION_PAGE_ID
  //   const pageId = 'e72e92350af8487f8a753636e99d807c'
  //   const response = await notion.pages.retrieve({ page_id: pageId })
  //   return response
  // }
  // const testRes = await getPage()
  return (
    <>
      <main>
        Test
        {JSON.stringify(testRes)}
        {/* {works.map((work) => (
          <p key={work.id}>{work.name_tw}</p>
        ))} */}
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // const works = await getWorksAPI()
  // const mediaList = await getMediasAPI()
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  })
  const getPage = async () => {
    // const pageId = process.env.NOTION_PAGE_ID
    const pageId = 'e72e92350af8487f8a753636e99d807c'
    const response = await notion.pages.retrieve({ page_id: pageId })
    return response
  }
  const testRes = await getPage()

  return {
    props: {
      // works,
      // mediaList,
      testRes,
    },
  }
}

export default Arts
