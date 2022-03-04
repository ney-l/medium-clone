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

      <div className="md:flex md:flex-row-reverse md:justify-around">
        <div className="bg-red-300 text-center">categories</div>

        <div className="flex">
          <div className="mx-auto grid max-w-7xl bg-white p-2">
            <Posts posts={posts} />
          </div>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders()

  const posts = await getPosts()

  return { props: { posts, providers } }
}
