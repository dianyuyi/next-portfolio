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
