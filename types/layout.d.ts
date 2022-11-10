declare namespace Layout {
  interface Media {
    id: number | string
    name: string
    icon: string
    url: string
  }

  type MediaList = Array[Media] | Array[]
}
