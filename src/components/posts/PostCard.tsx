import { IPost } from '@/typings'

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
    <div className="cursor-pointer rounded-lg border transition-transform duration-200 ease-in-out hover:shadow-sm">
      <img className="h-60 w-full object-cover" src={imageUrl} alt={title} />
      <div className="flex justify-between bg-white p-5">
        <div>
          <p className="font-serif text-lg font-bold">{title}</p>
          <p className="text-xs">
            {description} by {author.name}
          </p>
        </div>

        <img
          className="h-12 w-12 rounded-full"
          src={authorImageUrl}
          alt="Author"
        />
      </div>
    </div>
  )
}
