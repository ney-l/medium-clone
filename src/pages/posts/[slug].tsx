import { GetStaticProps } from 'next'

import { Header } from '@/components/layout'
import { IPostProps, IPost, IPosts } from '@/typings'
import { Post } from '@/components/posts'
import { useCreateComment } from '@/hooks/comments.hooks'
import { AddComment, Comments } from '@/components/comments'
import { getPost, getPostSlugs } from '@/queries/posts'
import Head from 'next/head'
import { SubmitConfirm } from '@/components/comments/SubmitConfirm'

export default function PostPage({ post }: IPostProps) {
  const { isSuccess, isLoading, error, onSubmit } = useCreateComment(post._id)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    onSubmit(e)
  }

  return (
    <>
      <Head>
        <title>{post.title} | Medium Clone</title>
      </Head>
      <main>
        <Header />
        <Post post={post} />
        <hr className="my-5 mx-auto max-w-lg border border-yellow-500" />
        {isSuccess ? (
          <SubmitConfirm />
        ) : (
          <AddComment
            onSubmit={handleSubmit}
            error={error}
            isLoading={isLoading}
          />
        )}

        <div className="my-10 mx-auto flex max-w-2xl flex-col space-y-2 p-10 shadow shadow-yellow-500">
          <h3 className="text-4xl">Comments</h3>
          <hr className="pb-2" />
          <Comments comments={post.comments} />
        </div>
      </main>
    </>
  )
}

export const getStaticPaths = async () => {
  const posts = await getPostSlugs()

  const paths = posts.map((post: IPost) => ({
    params: {
      slug: post.slug.current,
    },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params!
  const slug = params.slug as string

  const post = (await getPost(slug)) as IPosts
  if (!post) {
    return {
      notFound: true, // nextjs returns a 404 page
    }
  }

  return {
    props: { post },
    revalidate: 60 /* updates catch after 60 seconds */,
  }
}
