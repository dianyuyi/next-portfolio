import { useState, useEffect } from 'react'

export const usePageCollect = (languageCode: string, database: Notion.Database) => {
  const [data, setData] = useState<Notion.Collect>()

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
        .then((pageData) => {
          setData(pageData)
        })
        .catch((error) => {
          console.log(JSON.stringify(error))
        })
    }
    getPageData()
  }, [languageCode, database])

  return data
}

export const usePageData = (
  route: string,
  pageKey: string | string[],
  languageCode: string,
  pageCollect: Notion.Collect
) => {
  const [data, setData] = useState<Notion.PageContent>()

  useEffect(() => {
    const getPageData = async () => {
      console.log('hook getPageData', route, pageKey)
      await fetch(`/api/${route}/${pageKey}/`, {
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
          setData(pageData)
        })
        .catch((error) => {
          console.log(JSON.stringify(error))
        })
    }
    getPageData()
  }, [route, pageKey, languageCode, pageCollect])

  return data
}
