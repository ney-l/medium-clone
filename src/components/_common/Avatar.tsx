interface IAvatar {
  user: {
    image: string | null | undefined
    name: string | undefined
  }
}

function getInitials(name = '') {
  return name
    .split(' ')
    .map((item) => item[0])
    .join('')
}

export function Avatar({ user }: IAvatar) {
  if (!user) {
    return (
      <div className="relative m-1 mr-2 flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-xl uppercase text-white">
        ''
      </div>
    )
  }
  const { image, name } = user

  if (image) {
    return (
      <img
        className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
        src={image}
        alt={name ?? 'User'}
      />
    )
  }

  return (
    <div className="relative m-1 mr-2 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 text-xl uppercase text-white">
      {getInitials(name ?? '')}
    </div>
  )
}
