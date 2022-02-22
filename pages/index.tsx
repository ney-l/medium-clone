import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Header } from 'components/layout/Header'
import Link from 'next/link'
import { sanityClient, urlFor } from 'sanity'
import { Post } from 'typings'
import { PostCard } from 'components/posts/PostCard'

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
        <div className="flex items-center justify-between border-y border-black bg-blue-200 py-10 lg:py-0">
          <div className="space-y-5 px-10">
            <h1 className="max-w-xl font-serif text-6xl">
              <span className="underline decoration-black decoration-4">
                Medium
              </span>{' '}
              is a place to write, read, and connect
            </h1>
            <h2 className="font-sans">
              It's easy and free to post your thinking on any topic and connect
              with millions of readers.
            </h2>
            <Link href="signup">
              <a>Start Writing</a>
            </Link>
          </div>
          <img
            className="hidden h-32 pt-3 md:inline-flex md:w-1/3 lg:h-full"
            src="/images/banner.png"
          />
        </div>

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

      <footer className="flex h-24 w-full items-center justify-center border-t bg-white">
        <a
          className="flex items-center justify-center gap-2"
          href="https://github.com/ney-l"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built By Neha Lanjewar
        </a>
      </footer>
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
