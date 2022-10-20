import React from 'react'
import { GetStaticProps } from 'next'
import { useSelector, useDispatch } from 'react-redux'

// import { getWorksAPI, getMediasAPI } from 'server/sheets/'
// import { Client } from '@notionhq/client'

import { wrapper } from 'src/redux/store'
import { getArtListAsync } from 'src/redux/server/artListSlice'

import Layout from 'src/components/layout'

interface Props {
  // works: SheetGlobal.Works | null
  // mediaList: SheetGlobal.MediaList | null
  artList: object
}

const Arts = (): JSX.Element => {
  const artList = useSelector((state: Store.RootState) => state.server.artListSlice.response)
  return (
    <>
      <main>
        Test
        {JSON.stringify(artList)}
        {/* {JSON.stringify(testDataBase)} */}
        {/* {works.map((work) => (
          <p key={work.id}>{work.name_tw}</p>
        ))} */}
      </main>
    </>
  )
}

// export const getStaticProps: GetStaticProps = async () => {
export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  await store.dispatch(getArtListAsync())
  // const works = await getWorksAPI()
  // const mediaList = await getMediasAPI()
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

  // const testDataBase = await notion.databases.query({
  //   database_id: 'd6247d8d5f8c4496bbdde456847b6183',
  //   filter: {
  //     property: 'Tags',
  //     rich_text: {
  //       contains: 'arts',
  //     },
  //   },
  // })

  return {
    props: {
      // works,
      // mediaList,
      // testRes,
      // testDataBase,
    },
    revalidate: 60,
  }
})

export default Arts
