import React from 'react'
import { ArtListContainer, ArtWrapper, CoverImg, ArtLink, Title, TagsWrapper, Tag } from './styled'

const ArtListPage = ({ arts }: { arts: Notion.FilterList }): JSX.Element => {
  return (
    <ArtListContainer>
      {arts &&
        arts.map((art: Notion.ListObject) => {
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
    </ArtListContainer>
  )
}

export default ArtListPage
