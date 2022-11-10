import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

import { wrapper, useAppDispatch } from 'src/redux/store'
import { getDatabaseAsync } from 'src/redux/client/databaseSlice'
import { useBreakpoints } from 'src/hook'

const Arts = (): JSX.Element => {
  const database = useSelector((state: Store.RootState) => state.server.databaseSlice.response)

  const dispatch = useAppDispatch()
  const breakpoints = useBreakpoints()
  const router = useRouter()

  const languageCode = useSelector(
    (state: Store.RootState) => state.client.languageCodeSlice.languageCode
  )
  const pageCollect = useSelector(
    (state: Store.RootState) => state.server.pageCollectSlice.response
  )

  const { key: pageKey } = router.query

  const [arts, setArts] = useState<Notion.blocks>()

  useEffect(() => {
    const getPageData = async () => {
      await fetch(`/api/arts`, {
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
        .then((pageData) => setArts(pageData))
        .catch((error) => console.log(JSON.stringify(error)))
    }
    getPageData()
  }, [languageCode, database])

  return (
    <>
      <main>
        Test
        {JSON.stringify(arts)}
      </main>
    </>
  )
}

export const getStaticProps = wrapper.getStaticProps((store) => async ({ params }) => {
  // let pageId = '50eb6e5744cf448a9f25ca01c5bad793'

  await store.dispatch(getDatabaseAsync('arts'))

  return {
    props: {},
    revalidate: 60 * 5,
  }
})

export default Arts
