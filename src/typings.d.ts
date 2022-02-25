export interface IMainImage {
  _type: string
  asset: {
    _ref: string
    _type: string
  }
}

interface IAuthor {
  _id: string
  name: string
  image: IMainImage
}

export interface IPost {
  _id: string
  _createdAt: string
  title: string
  author: IAuthor
  comments: IComment[]
  description: string
  slug: {
    current: string
  }
  mainImage: IMainImage
  body: [object]
}

export interface IPostProps {
  post: IPost
}

export interface IPosts {
  posts: IPost[]
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
