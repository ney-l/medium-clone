import Head from 'next/head'
import { sanityClient } from 'sanity'

import { IPosts } from 'typings'
import { Header } from 'src/components/layout/Header'
import { Footer } from 'src/components/layout/Footer'
import { Banner } from 'src/components/layout/Banner'
import { Posts } from 'src/components/posts/Posts'
import { Favicon } from 'src/components/layout/Favicon'

export default function Home({ posts }: IPosts) {
  return (
    <div className="mx-auto max-w-7xl bg-blue-200">
      <Head>
        <title>Medium Clone - Where good ideas find you.</title>
        <Favicon />
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
