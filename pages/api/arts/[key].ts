import { NextApiRequest, NextApiResponse } from 'next'

import { getPageObjectAPI } from 'server/notion/getPageObjectAPI'
import { getPageBlocksAPI } from 'server/notion/getPageBlocksAPI'
import notionBlocksArrange from 'src/utils/notionBlocksArrange'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Notion.Art | Global.Errors>
) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }
  const { languageCode, pageCollect } = req.body

  let pageId = ''
  pageCollect.forEach((item: Notion.block) => {
    if (item.properties.language.select.name === languageCode)
      pageId = item.properties.id.rich_text[0].plain_text
  })

  const pageObject = await getPageObjectAPI(pageId)
  const pageBlocks = await getPageBlocksAPI(pageId)
  const data = notionBlocksArrange(pageObject, pageBlocks)

  return data !== undefined
    ? res.status(200).json(data)
    : res.status(404).json({ message: `Notion page response error.` })
}
