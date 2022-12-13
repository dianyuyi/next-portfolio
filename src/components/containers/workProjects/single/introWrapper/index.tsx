import React from 'react'

import { IntroContainer } from 'src/components/containers/arts/art/styled'
import {
  IntroName,
  IntroDate,
  IntroDescription,
  IntroTagBox,
  IntroLink,
  IntroTag,
  Block,
  ListBox,
  IconWrapper,
  BackList,
} from './styled'
import { BiLinkExternal, BiPen } from 'react-icons/bi'
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
      <Block>
        {workProject?.workList.map((value, index: number) => {
          return (
            <ListBox key={index}>
              <IconWrapper>
                <BiPen />
              </IconWrapper>
              <p>{value.text}</p>
            </ListBox>
          )
        })}
      </Block>
      <Block>
        {workProject?.contexts.map((value, index: number) => {
          return <IntroDescription key={index}>{value.text}</IntroDescription>
        })}
      </Block>

      <IntroLink>
        <a href={workProject.url ? workProject.url : '#'} target="_blank" rel="noreferrer noopener">
          {workProject.url ? <BiLinkExternal /> : <AiOutlineStop />}
          <span>
            {t(`${workProject.url ? 'button.outer_link' : 'button.confidentiality_clause'}`)}
          </span>
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
