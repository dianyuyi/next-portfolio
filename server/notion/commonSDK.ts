import { Client } from '@notionhq/client'

export const notionSDK = new Client({
  auth: process.env.NOTION_TOKEN,
})
