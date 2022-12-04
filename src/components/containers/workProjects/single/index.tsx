import React from 'react'
import ImgWrapper from './imgWrapper'
import IntroWrapper from './introWrapper'
import { IntroWorkWrapper } from './styled'
import { WorkHolder } from 'src/components/containers/workProjects/holder'

const WorkPage = ({
  workProject,
  t,
}: {
  workProject: Notion.PageContent
  t: (arg0: string) => string
}): JSX.Element => {
  return (
    <IntroWorkWrapper>
      {workProject && Object.keys(workProject).length > 0 ? (
        <>
          <ImgWrapper workProject={workProject} />
          <IntroWrapper workProject={workProject} />
        </>
      ) : (
        <WorkHolder />
      )}
    </IntroWorkWrapper>
  )
}

export default WorkPage
