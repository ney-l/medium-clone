import Head from 'next/head'

import { useState } from 'react'

import { IPosts } from '@/typings'
import { Header, Footer, Banner } from '@/components/layout'
import { Posts } from '@/components/posts'
import { getPosts } from '@/queries/posts'
import { Modal } from '@/components/layout/Modal'

export default function Home({ posts }: IPosts) {
  const [showSignup, setShowSignup] = useState(false)

  return (
    <>
      <Modal isShow={showSignup} onCloseClick={() => setShowSignup(false)} />
      {!showSignup && (
        <div className="mx-auto max-w-7xl bg-blue-200">
          <Head>
            <title>Medium Clone - Where good ideas find you.</title>
          </Head>

          <div>
            <Header onSignupClick={() => setShowSignup(true)} />
            <Banner />

            <Posts posts={posts} />
          </div>

          <Footer />
        </div>
      )}
    </>
  )
}

export const getServerSideProps = async () => {
  const posts = await getPosts()
  return { props: { posts } }
}
