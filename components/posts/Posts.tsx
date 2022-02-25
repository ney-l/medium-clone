import Link from 'next/link'
import { PostCard } from 'components/posts/PostCard'
import { Post } from 'typings'
import { urlFor } from 'sanity'

interface IPostsProps {
  posts: Post[]
}

export function Posts({ posts }: IPostsProps) {
  return (
    <div className="grid grid-cols-1 gap-3 bg-white p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
      {posts.map((post) => (
        <Link key={post._id} href={`/posts/${post.slug.current}`}>
          <a>
            <PostCard
              imageUrl={urlFor(post.mainImage)}
              authorImageUrl={urlFor(post.author.image)}
              {...post}
            />
          </a>
        </Link>
      ))}
    </div>
  )
}
