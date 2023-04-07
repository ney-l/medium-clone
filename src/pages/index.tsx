import Head from 'next/head'
import { getProviders } from 'next-auth/react'

import { IPosts } from '@/typings'
import { Banner } from '@/components/layout'
import { Posts } from '@/components/posts'
import { getPosts } from '@/queries/posts'
import { GetServerSideProps } from 'next'

export default function Home({ posts }: IPosts): JSX.Element {
  return (
    <>
      <Head>
        <title>Medium Clone - Where good ideas find you.</title>
      </Head>

      <Banner />

      <Posts posts={posts} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders()

  const posts = await getPosts()

  return { props: { posts, providers } }
}
