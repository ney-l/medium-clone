import Head from 'next/head'

import { IPosts } from '@/typings'
import { Header, Footer, Banner } from '@/components/layout'
import { Posts } from '@/components/posts'
import { getPosts } from '@/queries/posts'

export default function Home({ posts }: IPosts) {
  return (
    <div className="mx-auto max-w-7xl bg-blue-200">
      <Head>
        <title>Medium Clone - Where good ideas find you.</title>
      </Head>

      <div>
        <Header />
        <Banner />

        <Posts posts={posts} />
      </div>

      <Footer />
    </div>
  )
}

export const getServerSideProps = async () => {
  const posts = await getPosts()
  return { props: { posts } }
}
