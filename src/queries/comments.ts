import { cmsClient } from '@/lib/cms'
import { logError } from '@/utils/log'

interface ICommentRequest {
  _id: string
  name: string
  email: string
  comment: string
}

export async function createComment({
  _id,
  name,
  email,
  comment,
}: ICommentRequest): Promise<{ message: string | null }> {
  try {
    await cmsClient.create({
      _type: 'comment',
      post: {
        _type: 'reference',
        _ref: _id,
      },
      name,
      email,
      comment,
    })
    return Promise.resolve({ message: 'Comment added!' })
  } catch (err) {
    logError(err)
    return { message: null }
  }
}
