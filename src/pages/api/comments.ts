import type { NextApiRequest, NextApiResponse } from 'next'
import { createComment } from '@/queries/comments'

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    return res.status(404).json({ message: 'Not found' })
  }

  const { _id, name, email, comment } = JSON.parse(req.body)

  if (!_id || !name || !email || !comment) {
    return res
      .status(400)
      .json({ message: 'One or more required fields are missing.' })
  }

  const { message } = await createComment({
    _id,
    name,
    email,
    comment,
  })
  if (message) {
    return res.status(200).json({ message })
  }
  return res.status(500).json({ message: 'Something went wrong' })
}
