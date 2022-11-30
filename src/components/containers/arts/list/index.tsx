import React from 'react'

import ListTitle from 'src/components/title'
import { ListHolder } from 'src/components/containers/arts/holder'
import { Container, ArtWrapper, CoverImg, ArtLink, Title, TagsWrapper, Tag } from './styled'

const ArtListPage = ({
  arts,
  t,
}: {
  arts: Notion.FilterList
  t: (arg0: string) => string
}): JSX.Element => {
  const defaultArts = Array(10)
    .fill(0)
    .map((item, idx) => {
      const value = {
        id: `${item}-${idx}`,
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
      <ListTitle title={t('menu.arts')} />
      <Container>
        {arts ? (
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
          })
        ) : (
          <ListHolder />
        )}
      </Container>
    </>
  )
}

export default ArtListPage
