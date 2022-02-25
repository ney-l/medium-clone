import Head from 'next/head'
import { sanityClient } from 'sanity'

import { Post } from 'typings'
import { Header } from 'components/layout/Header'
import { Footer } from 'components/layout/Footer'
import { Banner } from 'components/layout/Banner'
import { Posts } from 'components/posts/Posts'

interface Props {
  posts: [Post]
}

export default function Home({ posts }: Props) {
  return (
    <div className="mx-auto max-w-7xl bg-blue-200">
      <Head>
        <title>Medium Clone</title>
        <link rel="icon" href="/favicon.ico" />
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
  const query = `
  *[_type == "post"] {
      _id,
      title,
      slug,
      description,
      mainImage,
      body,
      author -> {
      _id,
      name,
      image
    }
  }
  `

  const posts = await sanityClient.fetch(query)
  return { props: { posts } }
}
