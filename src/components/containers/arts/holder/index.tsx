import React from 'react'

import {
  ArtWrapper,
  CoverImg,
  ArtLink,
  Title,
  TagsWrapper,
  Tag,
} from 'src/components/containers/arts/list/styled'
import ImgWrapper from 'src/components/containers/arts/art/imgWrapper'
import IntroWrapper from 'src/components/containers/arts/art/introWrapper'
import Loading from 'src/components/loading'

export const ListHolder = ({ isLoading }: { isLoading: Global.Loading }): JSX.Element => {
  const defaultArts = Array(10)
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
      {isLoading ? <Loading /> : null}
      {defaultArts.map((art: Notion.ListObject) => {
        return (
          <ArtLink key={art.id} href={`/arts/${art.key}`} className="group">
            <CoverImg src={art.cover} width="600px" height="600px" alt={art.title} />
            <ArtWrapper key={art.id}>
              <Title>{art.title}</Title>
              <TagsWrapper>
                {art?.tags?.map((value: string, index: number) => {
                  return <Tag key={index}>{value}</Tag>
                })}
              </TagsWrapper>
            </ArtWrapper>
          </ArtLink>
        )
      })}
    </>
  )
}

export const ArtHolder = ({ isLoading }: { isLoading: Global.Loading }): JSX.Element => {
  const defaultArt = {
    id: 'default-art',
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
      {/* {isLoading ? <Loading /> : null} */}
      <Loading />
      <ImgWrapper art={defaultArt} />
      <IntroWrapper art={defaultArt} />
    </>
  )
}
