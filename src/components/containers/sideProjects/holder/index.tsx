import React from 'react'

import {
  SideWrapper,
  CoverImg,
  MainLink,
  Title,
  TagsWrapper,
  Tag,
} from 'src/components/containers/sideProjects/list/styled'
import ImgWrapper from 'src/components/containers/sideProjects/single/imgWrapper'
import IntroWrapper from 'src/components/containers/sideProjects/single/introWrapper'

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
      {defaultData.map((sideProject: Notion.ListObject) => {
        return (
          <MainLink
            key={sideProject.id}
            href={`/sideProjects/${sideProject.key}`}
            className="group"
          >
            <CoverImg src={sideProject.cover} width={400} height={400} alt={sideProject.title} />
            <SideWrapper key={sideProject.id}>
              <Title>{sideProject.title}</Title>
              <TagsWrapper>
                {sideProject?.tags?.map((value: string, index: number) => {
                  return <Tag key={index}>{value}</Tag>
                })}
              </TagsWrapper>
            </SideWrapper>
          </MainLink>
        )
      })}
    </>
  )
}

export const SideHolder = (): JSX.Element => {
  const defaultSideProject = {
    id: 'default-sideProject',
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
      <ImgWrapper sideProject={defaultSideProject} />
      <IntroWrapper sideProject={defaultSideProject} />
    </>
  )
}
