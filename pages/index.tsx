import Head from 'next/head'
import { Header } from 'components/layout/Header'
import Link from 'next/link'
import { sanityClient, urlFor } from 'sanity'
import { Post } from 'typings'
import { PostCard } from 'components/posts/PostCard'
import { Footer } from 'components/layout/Footer'
import { Banner } from 'components/layout/Banner'

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

      <div className="">
        <Header />
        <Banner />

        <div className="grid grid-cols-1 gap-3 bg-white p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post._id} href={`/posts/${post.slug.current}`}>
              <PostCard
                imageUrl={urlFor(post.mainImage).url()}
                authorImageUrl={urlFor(post.author.image).url()}
                {...post}
              />
            </Link>
          ))}
        </div>
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
