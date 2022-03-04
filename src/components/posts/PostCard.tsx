import { IPost } from '@/typings'
import { StarIcon } from '../icons/StarIcon'

interface PostCardProps extends IPost {
  imageUrl: string
  authorImageUrl: string
}

export function PostCard({
  imageUrl,
  authorImageUrl,
  title,
  author,
  description,
}: PostCardProps): JSX.Element {
  return (
    <>
      <div className="space-between my-2 flex max-w-2xl justify-between py-2">
        <div className="p-2">
          <div className="flex items-center">
            <img
              className="h-7 w-7 rounded-full"
              src={authorImageUrl}
              alt="Author"
            />
            <p className="ml-2 text-xs">{author.name}</p>
          </div>
          <div>
            <p className="pt-1 font-serif text-lg font-bold">{title}</p>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
          <div className="flex items-center pt-2 text-gray-500">
            <p className="text-xs">Mar 4</p>
            <span className="px-1">·</span>
            <p className="text-xs">4 min read</p>
            <span className="px-1">·</span>
            <p className="text-xs">Ukraine</p>
            <StarIcon classNames="ml-1 fill-gray-500" />
          </div>
        </div>
        <div>
          <img className="h-28 w-36" src={imageUrl} alt={title} />
        </div>
      </div>
    </>
  )
}
