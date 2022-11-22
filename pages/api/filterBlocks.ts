import { NextApiRequest, NextApiResponse } from 'next'

import { notionDatabaseArrange } from 'src/utils/notionFunc'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Notion.Database | Global.Errors>
) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }
  const { languageCode, database } = req.body

  const filterData = database.filter(
    (item: Notion.Block) => item.properties.language.select.name === languageCode
  )

  const result = notionDatabaseArrange(filterData)

  return result !== undefined
    ? res.status(200).json(result)
    : res.status(404).json({ message: `Notion database response error.` })
}
