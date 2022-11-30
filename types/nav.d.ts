declare namespace Nav {
  interface Side {
    sideBar: {
      open: () => fn
      closed: {
        clipPath: string
        transition: {
          delay: number
          type: string
          stiffness: number
          damping: number
        }
      }
    }
    navigation: {
      open: {
        transition: {
          staggerChildren: number
          delayChildren: number
        }
      }
      closed: {
        transition: {
          staggerChildren: number
          staggerDirection: number
        }
      }
    }
    menuToggle: Array[Toggle] | Array[]
    menuItem: {
      variants: {
        open: {
          y: number
          opacity: number
          transition: {
            y: { stiffness: number; velocity: number }
          }
        }
        closed: {
          y: number
          opacity: number
          transition: {
            y: { stiffness: number }
          }
        }
      }
      menu: {
        links: Array[Link] | Array[]
        languages: Array[Language] | Array[]
      }
    }
  }

  interface Toggle {
    d: string | undefined
    variants: {
      closed: { d: string }
      open: { d: string }
    }
    transition: {
      duration: number | null
    }
  }
  interface Link {
    name: string
    href: string
  }
  interface Language {
    name: string
    code: string
  }
}
