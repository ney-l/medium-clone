import { getErrorMessage } from './error.utils'

export function logError(err: unknown) {
  const message = getErrorMessage(err)
  console.error(`${Date.now()} Error: ${message}`)
}
