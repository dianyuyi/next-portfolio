declare namespace Global {
  interface Media {
    id: number | string
    name: string
    icon: JSX.Element
    url: string
  }

  interface ResumeLink {
    language: string
    url: string
  }

  interface ProgressBar {
    color: string
    startPosition: number
    stopDelayMs: number
    height: number
    showOnShallow: bool
    options: object
    nonce: string
  }

  type MediaList = Array<Media>
  type ResumeLinks = Array<ResumeLink>

  type Errors = string[] | null | unknown
}
