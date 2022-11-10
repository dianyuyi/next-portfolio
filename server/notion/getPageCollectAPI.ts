import { notionSDK } from './commonSDK'

export const getPageCollectAPI = async (key: string) => {
  const response = await notionSDK.databases.query({
    database_id: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID,
    filter: {
      and: [
        {
          property: 'key',
          rich_text: {
            equals: key,
          },
        },
      ],
    },
  })
  return response
}
