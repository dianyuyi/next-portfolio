declare namespace Notion {
  import {
    DatabaseObjectResponse,
    PageObjectResponse,
    BlockObjectResponse,
    MultiSelectDatabasePropertyConfigResponse,
    SelectDatabasePropertyConfigResponse,
  } from '@notionhq/client'

  type database = Array<DatabaseObjectResponse>
  type collect = Array<DatabaseObjectResponse>
  type page = PageObjectResponse
  type blocks = Array<BlockObjectResponse>
  type block = BlockObjectResponse

  type multiSelect = MultiSelectDatabasePropertyConfigResponse
  type singleSelect = SelectDatabasePropertyConfigResponse

  interface ListObject {
    id: string
    key: string
    title: string
    cover: string
    date: string
    url: string
    type: string
    language: string
    tags: Array[string] | Array[]
  }

  type filterList = Array<ListObject> | Array[]

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
