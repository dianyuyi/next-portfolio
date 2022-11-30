import { notionSDK } from './commonSDK'

export const getPageBlocksAPI = async (pageId: string) => {
  const blockId = pageId
  const response = await notionSDK.blocks.children.list({ block_id: blockId })
  return response.results
}
