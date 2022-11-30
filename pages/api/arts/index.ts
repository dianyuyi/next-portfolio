import { NextApiRequest, NextApiResponse } from 'next'

import { getDatabaseAPI } from 'server/notion/getDataBaseAPI'
import { notionKeyArrange } from 'src/utils/notionFunc'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Notion.Database | Global.Errors>
) {
  if (req.method !== 'GET') {
    res.status(405).send({ message: 'Only GET requests allowed' })
    return
  }
  const response = await getDatabaseAPI('arts')

  const result = response.results.filter(
    (item: Notion.Block) => item.properties.language.select.name === 'zh_tw'
  )

  const keyList = notionKeyArrange(result)

  return result !== undefined
    ? res.status(200).json(keyList)
    : res.status(404).json({ message: `Get list of arts response error.` })
}
