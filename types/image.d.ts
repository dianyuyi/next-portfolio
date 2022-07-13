declare namespace ImageGlobal {
  interface FillProps {
    alt: string
    src: string
    width: number | string
    height: number | string
    objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
    quality?: number
  }

  interface ResponsiveProps {
    alt: string
    src: string
    width: number
    height: number
    objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
    quality?: number
  }
}
