interface IAddCommentProps {
  onSubmit: React.FormEventHandler<HTMLFormElement>
  error?: string
  isLoading?: boolean
}

export function AddComment({
  onSubmit,
  error,
  isLoading,
}: IAddCommentProps): JSX.Element {
  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto mb-10 flex max-w-2xl flex-col p-5"
    >
      <h3 className="text-sm text-yellow-500">Enjoyed the article?</h3>
      <h4 className="text-3xl font-bold">Leave a comment below!</h4>
      <hr className="mt-2 py-3" />
      <label className="mb-5 block">
        <span className="text-gray-700">Name</span>
        <input
          className="form-input mt-1 block w-full rounded border py-2 px-3 shadow outline-none ring-0 ring-yellow-500 focus:ring"
          type="text"
          placeholder="John Appleseed"
          name="name"
        />
      </label>
      <label className="mb-5 block">
        <span className="text-gray-700">Email</span>
        <input
          className="form-input mt-1 block w-full rounded border py-2 px-3 shadow outline-none ring-0 ring-yellow-500 focus:ring"
          type="email"
          placeholder="you@email.com"
          name="email"
          required
        />
      </label>
      <label className="mb-5 block">
        <span className="text-gray-700">Comment</span>
        <textarea
          className="form-textarea mt-1 block w-full rounded border py-2 px-3 shadow outline-none ring-0 ring-yellow-500 focus:ring"
          placeholder="Say something"
          rows={8}
          name="comment"
          required
        />
      </label>

      <div className="flex flex-col pb-3">
        <span className="text-red-500">
          {error && (
            <>
              <strong>Error: </strong>
              {error}
            </>
          )}
        </span>
      </div>
      <input
        className="focus:shadow-outline py2 cursor-pointer rounded bg-yellow-500 py-4 font-bold text-white shadow focus:outline-none disabled:bg-yellow-200"
        type="submit"
        value={isLoading ? 'Submitting...' : 'Submit'}
        disabled={isLoading}
      />
    </form>
  )
}
