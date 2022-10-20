import { notionSDK } from '../commonSDK'

export const getArtListAPI = async () => {
  const response = await notionSDK.databases.query({
    database_id: 'd6247d8d5f8c4496bbdde456847b6183',
    filter: {
      property: 'Tags',
      rich_text: {
        contains: 'arts',
      },
    },
  })
  return response
}
