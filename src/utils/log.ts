import { getErrorMessage } from './error.utils'

export function logError(err: unknown): void {
  const message = getErrorMessage(err)
  console.error(`${Date.now()} Error: ${message}`)
}
