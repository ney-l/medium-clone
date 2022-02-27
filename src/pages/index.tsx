import Head from 'next/head'
import { getProviders } from 'next-auth/react'
import { useState } from 'react'

import { IPost } from '@/typings'
import { Header, Footer, Banner } from '@/components/layout'
import { Posts } from '@/components/posts'
import { getPosts } from '@/queries/posts'
import { Signup } from '@/components/auth/Signup'

interface IHomeProps {
  posts: [IPost]
  providers: [object]
}

export default function Home({ posts, providers }: IHomeProps) {
  const [showSignup, setShowSignup] = useState(false)

  return (
    <>
      <Signup isShow={showSignup} onCloseClick={() => setShowSignup(false)} />

      {!showSignup && (
        <>
          <Head>
            <title>Medium Clone - Where good ideas find you.</title>
          </Head>

          <>
            <Header onSignupClick={() => setShowSignup(true)} />
            <Banner />

            <Posts posts={posts} />
          </>

          <Footer />
        </>
      )}
    </>
  )
}

export const getServerSideProps = async () => {
  const providers = await getProviders()

  const posts = await getPosts()

  return { props: { posts, providers } }
}
