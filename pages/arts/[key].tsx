import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { BiLinkExternal } from 'react-icons/bi'
import { AiOutlineStop, AiOutlineBackward } from 'react-icons/ai'

import { wrapper, useAppDispatch } from 'src/redux/store'
import { getPageCollectAsync } from 'src/redux/client/pageCollectSlice'

import { setLanguageCode } from 'src/redux/client/languageCodeSlice'
import { useBreakpoints } from 'src/hook'

import {
  IntroWorkWrapper,
  IntroContainer,
  IntroImg,
  IntroName,
  IntroDate,
  IntroDescription,
  IntroTagBox,
  IntroLink,
  IntroTag,
  BackList,
} from 'src/components/arts'

const SingleWork = () => {
  const dispatch = useAppDispatch()
  const breakpoints = useBreakpoints()
  const router = useRouter()

  const languageCode = useSelector(
    (state: Store.RootState) => state.client.languageCodeSlice.languageCode
  )
  const pageCollect = useSelector(
    (state: Store.RootState) => state.server.pageCollectSlice.response
  )

  const { key: pageKey } = router.query

  const [art, setArt] = useState<Notion.Art>()
  // const [art, setArt] = useState<Notion.Art>(() => {
  //   const data = notionBlocksArrange(pageObject, pageBlocks)
  //   return data
  // })

  const imageRef = useRef()
  const introRef = useRef()

  useEffect(() => {
    const getPageData = async () => {
      await fetch(`/api/arts/${pageKey}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          languageCode,
          pageCollect,
        }),
      })
        .then((res) => res.json())
        .then((pageData) => setArt(pageData))
        .catch((error) => console.log(JSON.stringify(error)))
    }
    getPageData()
  }, [pageKey, languageCode, pageCollect])

  const setLanguage = (code: string) => {
    dispatch(setLanguageCode(code))
  }

  // useEffect(() => {
  //   const boxes = [imageRef.current, introRef.current]
  //   gsap.set(boxes, {
  //     opacity: 0,
  //     duration: 1.2,
  //     x: gsap.utils.random(-10, 10),
  //     y: gsap.utils.random(-10, 10),
  //     skewX: gsap.utils.random(-5, 5),
  //     skewY: gsap.utils.random(-5, 5),
  //     rotate: gsap.utils.random(-0.5, 0.5),
  //   })
  //   gsap.to(boxes, {
  //     opacity: 1,
  //     duration: 1.2,
  //     x: 0,
  //     y: 0,
  //     skewX: 0,
  //     skewY: 0,
  //     rotate: 0,
  //   })
  // }, [])

  return (
    <IntroWorkWrapper>
      {art && Object.keys(art).length > 0 ? (
        <>
          <IntroContainer ref={imageRef}>
            <IntroImg src={art.cover} width={600} height={800} alt={art.title} />
          </IntroContainer>
          <IntroContainer ref={introRef}>
            <IntroName>{art.title}</IntroName>

            <IntroDate>Created in {art.date}</IntroDate>
            <IntroTagBox>
              {art?.tags.map((value, index: number) => {
                return <IntroTag key={index}>{value.text}</IntroTag>
              })}
            </IntroTagBox>
            <div>
              {art?.workList.map((value, index: number) => {
                return <p key={index}>{value.text}</p>
              })}
            </div>
            <div>
              {art?.contexts.map((value, index: number) => {
                return <IntroDescription key={index}>{value.text}</IntroDescription>
              })}
            </div>

            <IntroLink>
              <a href={art.url ? art.url : '#'} target="_blank" rel="noreferrer noopener">
                {art.url ? <BiLinkExternal /> : <AiOutlineStop />}
                <span>Outer Link</span>
              </a>
            </IntroLink>
            <BackList href="/">
              <AiOutlineBackward />
              <span>Back List</span>
            </BackList>
            <button onClick={() => setLanguage('en-us')}>Test en</button>
            <button onClick={() => setLanguage('ja')}>Test jp</button>
          </IntroContainer>
        </>
      ) : null}
    </IntroWorkWrapper>
  )
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps = wrapper.getStaticProps((store) => async ({ params }) => {
  const pageKey = params.key as string

  // let pageKey = 'breath_of_spring'

  await store.dispatch(getPageCollectAsync(pageKey))

  // await store.dispatch(getPageObjectAsync(id))
  // await store.dispatch(getPageBlocksAsync(id))

  return {
    props: {},
    revalidate: 60 * 5,
  }
})

export default SingleWork
