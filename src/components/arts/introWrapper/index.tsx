import React from 'react'

import { IntroContainer } from '../commonStyle'
import {
  IntroName,
  IntroDate,
  IntroDescription,
  IntroTagBox,
  IntroLink,
  IntroTag,
  BackList,
} from './styled'
import { BiLinkExternal } from 'react-icons/bi'
import { AiOutlineStop, AiOutlineBackward } from 'react-icons/ai'

interface Props {
  art: SheetGlobal.Art | null
}

const IntroWrapper = ({ art }: Props): JSX.Element => {
  return (
    <IntroContainer>
      <IntroName>{`${art.name_en}`}</IntroName>

      <IntroDate>Created in {art.date}</IntroDate>
      <IntroDescription>{`${art.description_en}`}</IntroDescription>
      <IntroTagBox>
        {art.tags.map((value, index) => {
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
  )
}

export default IntroWrapper
