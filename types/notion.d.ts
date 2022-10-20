declare namespace NotionGlobal {
  interface Art {
    id: string
    name_tw: string
    name_en: string
    image: string
    image_webp: string
    thumb: string
    tags: array
    date: string
    description_tw: string
    description_en: string
    type: string
    size: string
    url: string
  }

  interface ArtList {
    response: array | object
    isLoading: boolean | null
    errors: boolean | null
  }

  interface NotionState {
    sheetData: Art | ArtList | null
    isLoading: boolean
    errors: Errors
  }
}
