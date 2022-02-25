interface Author {
  _id: string
  name: string
  image: string
}

export interface Post {
  _id: string
  _createdAt: string
  title: string
  author: Author
  comments: IComment[]
  description: string
  slug: {
    current: string
  }
  mainImage: {
    asset: {
      url: string
    }
  }
  body: [object]
}

export interface IPostProps {
  post: Post
}

export interface IPosts {
  posts: Post[]
}

export interface IComment {
  approved: boolean
  comment: string
  email: string
  name: string
  post: {
    _ref: string
  }
  _id: string
  _updatedAt: string
}
