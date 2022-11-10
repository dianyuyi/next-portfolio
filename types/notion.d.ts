declare namespace Notion {
  import { DatabaseObjectResponse, PageObjectResponse, BlockObjectResponse } from '@notionhq/client'

  type database = Array<DatabaseObjectResponse>
  type collect = Array<DatabaseObjectResponse>
  type page = PageObjectResponse
  type blocks = Array<BlockObjectResponse>
  type block = BlockObjectResponse

  interface Art {
    id: string
    title: string
    cover: string
    date: null | string
    url: null | string
    tags:
      | [
          {
            annotations: object
            text: string
            href: string
          }
        ]
      | Array[]
    workList:
      | [
          {
            annotations: object
            text: string
          }
        ]
      | Array[]
    contexts:
      | [
          {
            annotations: object
            text: string
            href: string
          }
        ]
      | Array[]
  }
}
