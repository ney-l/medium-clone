import { sanityClient } from '@/config/sanity'

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

  const post = await sanityClient.fetch(query, {
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
  const posts = await sanityClient.fetch(query)

  return posts
}
