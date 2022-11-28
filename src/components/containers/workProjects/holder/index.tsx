import React from 'react'

import {
  WorkWrapper,
  CoverImg,
  MainLink,
  Title,
  TagsWrapper,
  Tag,
} from 'src/components/containers/workProjects/list/styled'
import ImgWrapper from 'src/components/containers/workProjects/single/imgWrapper'
import IntroWrapper from 'src/components/containers/workProjects/single/introWrapper'

export const ListHolder = (): JSX.Element => {
  const defaultData = Array(10)
    .fill(0)
    .map((item, idx) => {
      const value = {
        id: `${item}-${idx + 1}`,
        key: '',
        title: '',
        cover: `data:image/svg+xml,%3Csvg width='600' height='600' viewBox='0 0 600 600' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='600' height='600' fill='%23F4F4F5'/%3E%3C/svg%3E%0A`,
        date: '',
        url: '',
        type: '',
        language: '',
        tags: [],
      }
      return value
    })

  return (
    <>
      {defaultData.map((workProject: Notion.ListObject) => {
        return (
          <MainLink
            key={workProject.id}
            href={`/workProjects/${workProject.key}`}
            className="group"
          >
            <CoverImg src={workProject.cover} width={400} height={400} alt={workProject.title} />
            <WorkWrapper key={workProject.id}>
              <Title>{workProject.title}</Title>
              <TagsWrapper>
                {workProject?.tags?.map((value: string, index: number) => {
                  return <Tag key={index}>{value}</Tag>
                })}
              </TagsWrapper>
            </WorkWrapper>
          </MainLink>
        )
      })}
    </>
  )
}

export const WorkHolder = (): JSX.Element => {
  const defaultWorkProject = {
    id: 'default-workProject',
    title: '',
    cover: `data:image/svg+xml,%3Csvg width='600' height='600' viewBox='0 0 600 600' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='600' height='600' fill='%23F4F4F5'/%3E%3C/svg%3E%0A`,
    date: null,
    url: null,
    tags: [],
    workList: [],
    contexts: [],
  }

  return (
    <>
      <ImgWrapper workProject={defaultWorkProject} />
      <IntroWrapper workProject={defaultWorkProject} />
    </>
  )
}
