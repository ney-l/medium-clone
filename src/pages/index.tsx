import Head from 'next/head'
import { getProviders } from 'next-auth/react'

import { IPosts } from '@/typings'
import { Banner } from '@/components/layout'
import { Posts } from '@/components/posts'
import { getPosts } from '@/queries/posts'
import { GetServerSideProps } from 'next'

const categories = [
  { name: 'Self' },
  { name: 'Relationships' },
  { name: 'Data Science' },
  { name: 'Programming' },
  { name: 'Productivity' },
  { name: 'Javascript' },
  { name: 'Machine Learning' },
  { name: 'Politics' },
  { name: 'Health' },
]

function Categories() {
  return (
    <div>
      <p className="p-2 text-xs font-bold uppercase">
        Discover more of what matters to you
      </p>
      <div>
        {categories.map((category) => (
          <button
            key={category.name}
            className="m-1 rounded-sm border border-gray-200 px-3 py-2 text-xs"
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default function Home({ posts }: IPosts): JSX.Element {
  return (
    <>
      <Head>
        <title>Medium Clone - Where good ideas find you.</title>
      </Head>

      <Banner />

      <div className="mx-6 mt-2 md:flex md:flex-row-reverse md:justify-around">
        <div className="mt-6 text-left md:max-w-xs">
          <Categories />
        </div>

        <div className="flex">
          <div className="mx-auto grid max-w-7xl bg-white">
            <Posts posts={posts} />
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
