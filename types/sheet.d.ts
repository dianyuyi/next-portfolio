declare namespace SheetGlobal {
  interface Work {
    id: string
    name_tw: string
    name_en: string
    image: string
    image_webp: string
    thumb: string
    tags: string
    date: string
    description_tw: string
    description_en: string
    url: string
  }
  interface Art {
    id: string
    name_tw: string
    name_en: string
    image: string
    image_webp: string
    thumb: string
    tags: string
    date: string
    description_tw: string
    description_en: string
    type: string
    size: string
    url: string
  }
  interface Media {
    id: number | string
    name: string
    icon: JSX.Element
    url: string
  }

  
  
  type sheetName = string
  type Works = Array<Work>
  type Arts = Array<Art>
  type MediaList = Array<Media>
  
  interface SheetState {
    sheetData: Works | Arts | MediaList | null
    isLoading: boolean
    errors: Errors
  }
}
