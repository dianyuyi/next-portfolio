import { notionSDK } from './commonSDK'

export const getPageObjectAPI = async (pageId: string) => {
  const response = await notionSDK.pages.retrieve({ page_id: pageId })
  return response
}
