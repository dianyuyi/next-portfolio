import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Image from 'next/image'

import { wrapper, useAppDispatch } from 'src/redux/store'
import { getDatabaseAsync } from 'src/redux/client/databaseSlice'
import { useBreakpoints } from 'src/hook'

import { setLanguageCode } from 'src/redux/client/languageCodeSlice'

const Arts = (): JSX.Element => {
  const database = useSelector((state: Store.RootState) => state.server.databaseSlice.response)

  const dispatch = useAppDispatch()

  const languageCode = useSelector(
    (state: Store.RootState) => state.client.languageCodeSlice.languageCode
  )
  const [arts, setArts] = useState<Notion.collect>()

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

  const setLanguage = (code: string) => {
    dispatch(setLanguageCode(code))
  }

  return (
    <>
      <main>
        {arts &&
          arts.map((art) => {
            return (
              <div key={art.id}>
                <Image src={art.cover} width={200} height={200} alt={art.title} />
                <p>{art.title}</p>
              </div>
            )
          })}
        <button onClick={() => setLanguage('en-us')}>Test en</button>
        <button onClick={() => setLanguage('ja')}>Test jp</button>
      </main>
    </>
  )
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  await store.dispatch(getDatabaseAsync('arts'))

  return {
    props: {},
    revalidate: 60 * 5,
  }
})

export default Arts
