import React, { useState } from 'react'

interface IFormFields {
  name: { value: string }
  email: { value: string }
  comment: { value: string }
  reset: () => void
}

export function useCreateComment(postId: string) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    setError('')
    setIsLoading(true)

    const target = e.target as typeof e.target & IFormFields
    const name = target.name.value
    const email = target.email.value
    const comment = target.comment.value
    const _id = postId

    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ _id, name, email, comment }),
    })
    const { message } = await response.json()

    setIsLoading(false)

    if (response.status >= 400) {
      return setError(message)
    }

    setIsSuccess(true)
    target.reset()
  }
  return { isLoading, error, isSuccess, onSubmit: handleSubmit }
}
