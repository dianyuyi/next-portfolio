import React from 'react'

import ListTitle from 'src/components/title'
import { ListHolder } from 'src/components/containers/workProjects/holder'
import { Container, WorkWrapper, CoverImg, MainLink, Title, TagsWrapper, Tag } from './styled'

const WorkListPage = ({
  workProjects,
  t,
  isLoading,
}: {
  workProjects: Notion.FilterList
  t: (arg0: string) => string
  isLoading: Global.Loading
}): JSX.Element => {
  return (
    <>
      <ListTitle title={t('menu.work_projects')} />
      <Container>
        {workProjects ? (
          workProjects.map((workProject: Notion.ListObject) => {
            return (
              <MainLink
                key={workProject.id}
                href={`/workProjects/${workProject.key}`}
                className="group"
              >
                <CoverImg
                  src={workProject.cover}
                  width={400}
                  height={400}
                  alt={workProject.title}
                />
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
          })
        ) : (
          <ListHolder isLoading={isLoading} />
        )}
      </Container>
    </>
  )
}

export default WorkListPage
