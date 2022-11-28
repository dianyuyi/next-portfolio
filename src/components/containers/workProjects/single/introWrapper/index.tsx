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

const IntroWrapper = ({ workProject }: { workProject: Notion.PageContent }): JSX.Element => {
  const { t } = useTranslation()
  return (
    <IntroContainer>
      <IntroName>{workProject.title}</IntroName>

      <IntroDate>Created in {workProject.date}</IntroDate>
      <IntroTagBox>
        {workProject?.tags.map((value, index: number) => {
          return <IntroTag key={index}>{value.text}</IntroTag>
        })}
      </IntroTagBox>
      <div>
        {workProject?.workList.map((value, index: number) => {
          return <p key={index}>{value.text}</p>
        })}
      </div>
      <div>
        {workProject?.contexts.map((value, index: number) => {
          return <IntroDescription key={index}>{value.text}</IntroDescription>
        })}
      </div>

      <IntroLink>
        <a href={workProject.url ? workProject.url : '#'} target="_blank" rel="noreferrer noopener">
          {workProject.url ? <BiLinkExternal /> : <AiOutlineStop />}
          <span>{t(`${'button.outer_link'}`)}</span>
        </a>
      </IntroLink>
      <BackList href="/workProjects">
        <AiOutlineBackward />
        <span>{t(`${'button.back_list'}`)}</span>
      </BackList>
    </IntroContainer>
  )
}

export default IntroWrapper
