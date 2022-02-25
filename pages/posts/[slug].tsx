import { Header } from 'components/layout/Header'
import { GetStaticProps } from 'next'
import { IPostProps, Post as IPost } from 'typings'
import { Post } from 'components/posts/Post'
import { useCreateComment } from 'hooks/comments.hooks'
import { AddComment } from 'components/comments/AddComment'
import { getPost, getPosts } from 'queries/posts'

export default function PostPage({ post }: IPostProps) {
  const { isSuccess, isLoading, error, onSubmit } = useCreateComment(post._id)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    onSubmit(e)
  }

  return (
    <main>
      <Header />
      <Post post={post} />
      <hr className="my-5 mx-auto max-w-lg border border-yellow-500" />
      {isSuccess ? (
        <div className="my-10 mx-auto flex max-w-2xl flex-col bg-yellow-500 py-10 text-center text-white">
          <h3 className="font-bond text-3xl">
            Thank you for submitting your comment!
          </h3>
          <p>Once it has been approved, it will appear below!</p>
        </div>
      ) : (
        <AddComment
          onSubmit={handleSubmit}
          error={error}
          isLoading={isLoading}
        />
      )}
    </main>
  )
}

export const getStaticPaths = async () => {
  const posts = await getPosts()

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

export const getStaticProps: GetStaticProps = async ({
  params,
}: {
  params: { slug: string }
}) => {
  const post = await getPost(params?.slug)
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
