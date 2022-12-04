import React, { useEffect } from 'react'
import Router from 'next/router'
import NProgress from 'nprogress'

export const ProgressBar = ({
  color,
  startPosition,
  stopDelayMs,
  height,
  showOnShallow,
  options,
  nonce,
}: Global.ProgressBar) => {
  let timer = null

  useEffect(() => {
    if (options) {
      NProgress.configure(options)
    }
    Router.events.on('routeChangeStart', routeChangeStart)
    Router.events.on('routeChangeComplete', routeChangeEnd)
    Router.events.on('routeChangeError', routeChangeEnd)
    return () => {
      Router.events.off('routeChangeStart', routeChangeStart)
      Router.events.off('routeChangeComplete', routeChangeEnd)
      Router.events.off('routeChangeError', routeChangeEnd)
    }
  }, [])

  const routeChangeStart = (_, { shallow }) => {
    if (!shallow || showOnShallow) {
      NProgress.set(startPosition)
      NProgress.start()
    }
  }

  const routeChangeEnd = (_, { shallow }) => {
    if (!shallow || showOnShallow) {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        NProgress.done(true)
      }, stopDelayMs)
    }
  }

  return (
    <style nonce={nonce}>{`
      #nprogress {
        pointer-events: none;
      }
      #nprogress .bar {
        background: ${color};
        position: fixed;
        z-index: 9999;
        top: 0;
        left: 0;
        width: 100%;
        height: ${height}px;
      }
      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px ${color}, 0 0 5px ${color};
        opacity: 1;
        -webkit-transform: rotate(3deg) translate(0px, -4px);
        -ms-transform: rotate(3deg) translate(0px, -4px);
        transform: rotate(3deg) translate(0px, -4px);
      }
    `}</style>
  )
}

export default ProgressBar
