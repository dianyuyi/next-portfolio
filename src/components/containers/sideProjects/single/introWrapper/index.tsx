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

const IntroWrapper = ({ sideProject }: { sideProject: Notion.PageContent }): JSX.Element => {
  const { t } = useTranslation()
  return (
    <IntroContainer>
      <IntroName>{sideProject.title}</IntroName>

      <IntroDate>Created in {sideProject.date}</IntroDate>
      <IntroTagBox>
        {sideProject?.tags.map((value, index: number) => {
          return <IntroTag key={index}>{value.text}</IntroTag>
        })}
      </IntroTagBox>
      <div>
        {sideProject?.workList.map((value, index: number) => {
          return <p key={index}>{value.text}</p>
        })}
      </div>
      <div>
        {sideProject?.contexts.map((value, index: number) => {
          return <IntroDescription key={index}>{value.text}</IntroDescription>
        })}
      </div>

      <IntroLink>
        <a href={sideProject.url ? sideProject.url : '#'} target="_blank" rel="noreferrer noopener">
          {sideProject.url ? <BiLinkExternal /> : <AiOutlineStop />}
          <span>
            {t(`${sideProject.url ? 'button.outer_link' : 'button.confidentiality_clause'}`)}
          </span>
        </a>
      </IntroLink>
      <BackList href="/sideProjects">
        <AiOutlineBackward />
        <span>{t(`${'button.back_list'}`)}</span>
      </BackList>
    </IntroContainer>
  )
}

export default IntroWrapper
