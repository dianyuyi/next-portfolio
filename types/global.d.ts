declare namespace Global {
  interface Media {
    id: number | string
    name: string
    icon: JSX.Element
    url: string
  }
  type MediaList = Array<Media>

  type Errors = string[] | null | unknown
}
