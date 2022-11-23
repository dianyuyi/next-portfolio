declare namespace ImageGlobal {
  interface FillProps {
    alt: string
    src: string
    width: string
    height: string
    quality?: number
    priority?: boolean
  }

  interface ResponsiveProps {
    alt: string
    src: string
    width: number
    height: number
    quality?: number
    priority?: boolean
  }
}
