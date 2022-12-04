import React from 'react'

import ListTitle from 'src/components/title'
import { ListHolder } from 'src/components/containers/sideProjects/holder'

import { Container, SideWrapper, CoverImg, MainLink, Title, TagsWrapper, Tag } from './styled'

const SideListPage = ({
  sideProjects,
  t,
  isLoading,
}: {
  sideProjects: Notion.FilterList
  t: (arg0: string) => string
  isLoading: Global.Loading
}): JSX.Element => {
  return (
    <>
      <ListTitle title={t('menu.side_projects')} />
      <Container>
        {sideProjects ? (
          sideProjects.map((sideProject: Notion.ListObject) => {
            return (
              <MainLink
                key={sideProject.id}
                href={`/sideProjects/${sideProject.key}`}
                className="group"
              >
                <CoverImg
                  src={sideProject.cover}
                  width={400}
                  height={400}
                  alt={sideProject.title}
                />
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
          })
        ) : (
          <ListHolder isLoading={isLoading} />
        )}
      </Container>
    </>
  )
}

export default SideListPage
