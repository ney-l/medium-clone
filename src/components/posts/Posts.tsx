import Link from 'next/link'

import { PostCard } from '@/components/posts'
import { IPosts } from '@/typings'
import { urlFor } from '@/lib/cms'

export function Posts({ posts }: IPosts): JSX.Element {
  return (
    <>
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
    </>
  )
}
