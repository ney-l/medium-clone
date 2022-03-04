import { IPost } from '@/typings'
import { Bookmark } from '../icons/Bookmark'
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
      <div className="space-between my-5 flex max-w-2xl justify-between">
        <div className="max-w-md p-2">
          <div className="flex items-center">
            <img
              className="h-7 w-7 rounded-full"
              src={authorImageUrl}
              alt="Author"
            />
            <p className="ml-2 text-xs">{author.name}</p>
          </div>
          <div>
            <h2 className="pt-1 font-serif text-lg font-bold">{title}</h2>
            <h3 className="text-sm text-gray-500">{description}</h3>
          </div>
          <div className="flex items-center justify-between pt-2 text-gray-500">
            <div className="flex items-center">
              <p className="text-xs">Mar 4</p>
              <span className="px-1">·</span>
              <p className="text-xs">4 min read</p>
              <span className="px-1">·</span>
              <button className="rounded-full bg-gray-100 p-1 px-2 text-xs hover:bg-gray-200">
                Ukraine
              </button>
              <StarIcon classNames="ml-1 fill-gray-500" />
            </div>
            <Bookmark />
          </div>
        </div>
        <div className="h-28 w-36">
          <img
            className="h-full w-full object-cover"
            src={imageUrl}
            alt={title}
          />
        </div>
      </div>
    </>
  )
}
