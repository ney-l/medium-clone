import { cmsClient } from 'src/config/cms'
import { logError } from 'src/utils/log'

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
}: ICommentRequest) {
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
    return { message: 'Comment added!' }
  } catch (err) {
    logError(err)
    return { message: null }
  }
}
