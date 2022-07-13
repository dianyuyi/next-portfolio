import { GetStaticProps } from 'next'

import { getWorksAPI } from 'server/sheets/'

import Layout from 'src/components/layout'


interface Props {
  works: SheetGlobal.Works | null
}

const Index = ({ works }: Props): JSX.Element => {

  return (
    <Layout title='index' description='首頁測試中'>
      <main>
        Test
        {/* {JSON.stringify(works)} */}
        {works.map((work)=> (
          <p key={work.id}>{work.name_tw}</p>
        ))}
      </main>

    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const works = await getWorksAPI()

  return {
    props: {
      works,
    },
  }
}

export default Index
