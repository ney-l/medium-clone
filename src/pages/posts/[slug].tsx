import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

import { IPostProps, IPosts } from '@/typings'
import { Post } from '@/components/posts'
import { AddComment, Comments } from '@/components/comments'
import { SubmitConfirm } from '@/components/comments/SubmitConfirm'
import { getPost, getPostSlugs } from '@/queries/posts'
import { useCreateComment } from '@/hooks/comments.hooks'

export default function PostPage({ post }: IPostProps) {
  const { isSuccess, isLoading, error, onSubmit } = useCreateComment(post._id)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onSubmit(event)
  }

  return (
    <>
      <Head>
        <title>{post.title} | Medium Clone</title>
      </Head>
      <main>
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

        <Comments comments={post.comments} />
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPostSlugs()

  const paths = posts.map((post) => ({
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
