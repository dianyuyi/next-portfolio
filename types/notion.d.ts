declare namespace Notion {
  import {
    DatabaseObjectResponse,
    PageObjectResponse,
    BlockObjectResponse,
    MultiSelectDatabasePropertyConfigResponse,
    SelectDatabasePropertyConfigResponse,
  } from '@notionhq/client'

  // type database
  type Database = Array<DatabaseObjectResponse>
  // key collect
  type Collect = Array<DatabaseObjectResponse>

  type Page = PageObjectResponse
  type Block = BlockObjectResponse
  type Blocks = Array<BlockObjectResponse>

  type MultiSelect = MultiSelectDatabasePropertyConfigResponse
  type SingleSelect = SelectDatabasePropertyConfigResponse

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

  interface KeyObject {
    params: {
      key: string
    }
  }

  type FilterList = Array<ListObject> | Array[]
  type KeyList = Array<KeyObject> | Array[]

  interface PageContent {
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
