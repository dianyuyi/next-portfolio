import { notionSDK } from '../commonSDK'

export const getArtPageAPI = async (pageId: string) => {
  // const pageId = 'e72e92350af8487f8a753636e99d807c'
  const response = await notionSDK.pages.retrieve({ page_id: pageId })
  return response
}
