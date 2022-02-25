import { IComment } from '@/typings'
import { Comment } from './Comment'

interface ICommentsProps {
  comments: IComment[]
}

export function Comments({ comments }: ICommentsProps) {
  return (
    <div>
      {comments.map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </div>
  )
}
