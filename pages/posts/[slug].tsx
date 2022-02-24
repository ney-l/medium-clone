import { Header } from 'components/layout/Header'
import { GetStaticProps } from 'next'
import { sanityClient } from 'sanity'
import { IPostProps, Post as IPost } from 'typings'
import { Post } from 'components/posts/Post'

export default function PostPage({ post }: IPostProps) {
  return (
    <main>
      <Header />
      <Post post={post} />
    </main>
  )
}

export const getStaticPaths = async () => {
  const query = `
    *[_type == "post"] {
      _id,
      slug {
        current
      }
    }
  `

  const posts = await sanityClient.fetch(query)
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      _createdAt,
      title,
      author-> {
        name,
        image
      },
      description,
      mainImage,
      slug,
      body
    }
  `

  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  })

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
