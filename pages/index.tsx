import React from 'react'
import { GetStaticProps } from 'next'

import Layout from 'src/components/layout'
import { NextLink } from 'src/components/link'

const Index = (): JSX.Element => {
  return (
    <Layout title="index" description="首頁測試中">
      <main>
        <NextLink href="/arts/breath_of_spring">Sample test</NextLink>
      </main>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}

export default Index
