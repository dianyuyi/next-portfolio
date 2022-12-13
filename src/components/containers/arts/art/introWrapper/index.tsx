import React from 'react'

import { IntroContainer } from 'src/components/containers/arts/art/styled'
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
import { useTranslation } from 'react-i18next'

const IntroWrapper = ({ art }: { art: Notion.PageContent }): JSX.Element => {
  const { t } = useTranslation()
  return (
    <IntroContainer>
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
          <span>{t(`${art.url ? 'button.outer_link' : 'button.confidentiality_clause'}`)}</span>
        </a>
      </IntroLink>
      <BackList href="/arts">
        <AiOutlineBackward />
        <span>{t(`${'button.back_list'}`)}</span>
      </BackList>
    </IntroContainer>
  )
}

export default IntroWrapper
