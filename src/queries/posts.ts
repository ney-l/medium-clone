import { nextCmsClient } from '@/config/cms'

export async function getPost(slug: string) {
  const query = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    _createdAt,
    title,
    author-> {
      name,
      image
    },
    'comments': *[
      _type == "comment" &&
      post._ref == ^._id &&
      approved == true
    ],
    description,
    mainImage,
    slug,
    body
  }
`

  const post = await nextCmsClient.fetch(query, {
    slug,
  })

  return post
}

export async function getPosts() {
  const query = `
    *[_type == "post"] {
      _id,
      slug {
        current
      }
    }
  `
  const posts = await nextCmsClient.fetch(query)

  return posts
}

export async function getPostsData() {
  const query = `
  *[_type == "post"] {
      _id,
      title,
      slug,
      description,
      mainImage,
      body,
      author -> {
      _id,
      name,
      image
    }
  }
  `
  const posts = await nextCmsClient.fetch(query)
  return posts
}
