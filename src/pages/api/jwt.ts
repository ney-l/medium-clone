import { getToken } from 'next-auth/jwt'
import type { NextApiRequest, NextApiResponse } from 'next'

const secret = process.env.SIGNING_SECRET

export default async function jwt(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const token = await getToken({ req, secret })
  res.send(JSON.stringify(token, null, 2))
}
