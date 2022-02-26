import { IComment } from '@/typings'
import { Comment } from './Comment'

interface ICommentsProps {
  comments: IComment[]
}

export function Comments({ comments }: ICommentsProps) {
  return (
    <div className="my-10 mx-auto flex max-w-2xl flex-col space-y-2 p-10 shadow shadow-yellow-500">
      <h3 className="text-4xl">Comments</h3>
      <hr className="pb-2" />

      {comments.map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </div>
  )
}
