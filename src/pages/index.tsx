import Head from 'next/head'

import { IPosts } from '@/typings'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Banner } from '@/components/layout/Banner'
import { Posts } from '@/components/posts/Posts'
import { getPostsData } from '@/queries/posts'

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
  const posts = await getPostsData()
  return { props: { posts } }
}
