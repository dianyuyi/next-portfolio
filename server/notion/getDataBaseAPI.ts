import { notionSDK } from './commonSDK'

export const getDatabaseAPI = async (type: string) => {
  const response = await notionSDK.databases.query({
    database_id: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID,
    filter: {
      and: [
        {
          property: 'type',
          select: {
            equals: type,
          },
        },
      ],
    },
  })
  return response
}
