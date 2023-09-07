import { NextApiRequest, NextApiResponse } from 'next'

import { getPageObjectAPI } from 'server/notion/getPageObjectAPI'
import { getPageBlocksAPI } from 'server/notion/getPageBlocksAPI'
import { notionBlocksArrange, notionFindPageId } from 'src/utils/notionFunc'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Notion.PageContent | Global.Errors>
) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }
  const { languageCode, pageCollect } = req.body

  const pageId = notionFindPageId(languageCode, pageCollect)
  const pageObject = await getPageObjectAPI(pageId)
  const pageBlocks = await getPageBlocksAPI(pageId)
  const data = notionBlocksArrange(pageObject, pageBlocks)

  return data !== undefined
    ? res.status(200).json(data)
    : res.status(404).json({ message: `Notion page response error.` })
}
