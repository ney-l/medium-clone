import { IComment } from '@/typings'

interface ICommentProps {
  comment: IComment
}

export function Comment({ comment }: ICommentProps) {
  return (
    <div>
      <p>
        <span className="text-yellow-500">{comment.name}:</span>
        {comment.comment}
      </p>
    </div>
  )
}
