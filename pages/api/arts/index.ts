import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Notion.database | Global.Errors>
) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }
  const { languageCode, database } = req.body

  const filterData = database.filter(
    (item: Notion.block) => item.properties.language.select.name === languageCode
  )

  // res.status(200).json({ message: `test` })
  return filterData !== undefined
    ? res.status(200).json(filterData)
    : res.status(404).json({ message: `Notion database response error.` })
}
