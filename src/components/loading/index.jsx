import React, { useState, useEffect } from 'react'
import Router from 'next/router'

import { LoadingBox } from './styled'

export const Loading = () => {
  const [processing, setProgressing] = useState(false)
  let timer = null

  useEffect(() => {
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
    if (!shallow) {
      setProgressing(true)
    }
  }

  const routeChangeEnd = (_, { shallow }) => {
    if (!shallow) {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        setProgressing(false)
      }, 200)
    }
  }

  return (
    <LoadingBox processing={processing}>
      <div className="box">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-120 0 400 140.5" fill="#666">
          <title>Loxi</title>
          <g id="layout_01" data-name="layout_01">
            <g id="layout_02" data-name="layout_02">
              <g id="LOXI">
                <rect id="l-left" y="3.5" width="20" height="136.5"></rect>
                <rect id="l-bottom" y="119.5" width="224" height="21"></rect>
                <path
                  id="o"
                  d="M112,140a70,70,0,1,1,70-70A70.08,70.08,0,0,1,112,140Zm0-120a50,50,0,1,0,50,50A50.06,50.06,0,0,0,112,20Z"
                ></path>
                <rect id="i-line" x="204" y="19.5" width="20" height="120.5"></rect>
                <rect id="i-point" x="204" y="3.5" width="20" height="20"></rect>
                <g id="x">
                  <rect
                    x="110.54"
                    y="34.08"
                    width="58.25"
                    height="20"
                    transform="translate(9.73 111.67) rotate(-45)"
                  ></rect>
                  <rect
                    x="55.21"
                    y="89.42"
                    width="58.25"
                    height="20"
                    transform="translate(-45.6 88.75) rotate(-45)"
                  ></rect>
                  <rect
                    x="74.33"
                    y="14.96"
                    width="20"
                    height="58.25"
                    transform="translate(-6.47 72.55) rotate(-45)"
                  ></rect>
                  <rect
                    x="129.67"
                    y="70.29"
                    width="20"
                    height="58.25"
                    transform="translate(-29.39 127.88) rotate(-45)"
                  ></rect>
                  <rect
                    id="x-center"
                    x="102"
                    y="61.75"
                    width="20"
                    height="20"
                    transform="translate(-17.93 100.21) rotate(-45)"
                  ></rect>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </LoadingBox>
  )
}

export default Loading
