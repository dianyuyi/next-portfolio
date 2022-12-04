import React from 'react'
import ImgWrapper from './imgWrapper'
import IntroWrapper from './introWrapper'
import { IntroWorkWrapper } from './styled'
import { WorkHolder } from 'src/components/containers/workProjects/holder'

const WorkPage = ({
  workProject,
  t,
  isLoading,
}: {
  workProject: Notion.PageContent
  t: (arg0: string) => string
  isLoading: Global.Loading
}): JSX.Element => {
  return (
    <IntroWorkWrapper>
      {workProject && Object.keys(workProject).length > 0 ? (
        <>
          <ImgWrapper workProject={workProject} />
          <IntroWrapper workProject={workProject} />
        </>
      ) : (
        <WorkHolder isLoading={isLoading} />
      )}
    </IntroWorkWrapper>
  )
}

export default WorkPage
