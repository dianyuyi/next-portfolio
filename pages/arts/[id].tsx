import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

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
import { BiLinkExternal } from 'react-icons/bi'
import { AiOutlineStop, AiOutlineBackward } from 'react-icons/ai'

const SingleWork = () => {
  const art = {
    id: 35,
    name_tw: '春意',
    name_en: 'Breath of spring',
    image:
      'https://res.cloudinary.com/loxi/image/upload/v1644320408/assets/artworks/%E6%98%A5%E6%84%8F_resize_pfvw8i.jpg',
    image_webp: '',
    thumb:
      'https://res.cloudinary.com/loxi/image/upload/c_fill,h_400,w_400/v1644320408/assets/artworks/%E6%98%A5%E6%84%8F_resize_pfvw8i.jpg',
    tag: ['Digital', 'Graphic'],
    date: '2022',
    description_tw:
      '凜冬過後，春天將至。一年的新開始象徵許多新生。無論是氣候，植物，或是人的情緒，都將有全新的起步。',
    description_en:
      "After the winter, spring is coming. The new beginning of the year symbolizes many new births. Whether it is climate, plants, or people's emotions, there will be a new start.",
    url: 'https://res.cloudinary.com/loxi/image/upload/v1644320408/assets/artworks/%E6%98%A5%E6%84%8F_resize_pfvw8i.jpg',
  }

  const imageRef = useRef()
  const introRef = useRef()

  useEffect(() => {
    const boxes = [imageRef.current, introRef.current]
    gsap.set(boxes, {
      opacity: 0,
      duration: 1.2,
      x: gsap.utils.random(-10, 10),
      y: gsap.utils.random(-10, 10),
      skewX: gsap.utils.random(-5, 5),
      skewY: gsap.utils.random(-5, 5),
      rotate: gsap.utils.random(-0.5, 0.5),
    })
    gsap.to(boxes, {
      opacity: 1,
      duration: 1.2,
      x: 0,
      y: 0,
      skewX: 0,
      skewY: 0,
      rotate: 0,
    })
  }, [])

  // sheet data
  // const tagArr = tag.split(",");

  return (
    <IntroWorkWrapper>
      <IntroContainer key={art.id} ref={imageRef}>
        <IntroImg
          src={art.image_webp !== '' ? art.image_webp : art.image}
          width={600}
          height={500}
          alt={art.name_en}
        />
      </IntroContainer>
      <IntroContainer ref={introRef}>
        <IntroName>{`${art.name_en}`}</IntroName>

        <IntroDate>Created in {art.date}</IntroDate>
        <IntroDescription>{`${art.description_en}`}</IntroDescription>
        <IntroTagBox>
          {art.tag.map((value, index) => {
            return <IntroTag key={index}>{value}</IntroTag>
          })}
          {/* {tagArr.map((value, index) => {
            return <IntroTag key={index}>{value}</IntroTag>;
          })} */}
        </IntroTagBox>
        <IntroLink>
          <a href={art.url ? art.url : '#'} target="_blank" rel="noreferrer noopener">
            {art.url ? <BiLinkExternal /> : <AiOutlineStop />}
            <span>Outer Link</span>
          </a>
        </IntroLink>
        <BackList href="/works">
          <AiOutlineBackward />
          <span>Back List</span>
        </BackList>
      </IntroContainer>
    </IntroWorkWrapper>
  )
}

export default SingleWork
