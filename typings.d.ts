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
