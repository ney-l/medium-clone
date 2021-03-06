import PortableText from 'react-portable-text'

import { urlFor } from '@/lib/cms'
import { IPostProps } from '@/typings'
import React from 'react'

export function Post({ post }: IPostProps): JSX.Element {
  return (
    <>
      <img
        className="h-40 w-full object-cover"
        src={urlFor(post.mainImage)}
        alt={post.title}
      />
      <article className="mx-auto max-w-3xl p-5">
        <h1 className="mt-10 mb-3 text-3xl">{post.title}</h1>
        <h2 className="text-xl font-light">{post.description}</h2>

        <div className="flex items-center space-x-2">
          <img
            className="h-10 w-10 rounded-full"
            src={urlFor(post.author.image)}
            alt={post.author.name}
          />
          <p className="text-sm font-extralight">
            Blog post by{' '}
            <span className="text-green-600">{post.author.name}</span> -
            Published at {new Date(post._createdAt).toLocaleString()}
          </p>
        </div>

        <div>
          <PortableText
            className=""
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            content={post.body}
            serializers={{
              h1: (props: any) => (
                <h1 className="my-5 text-2xl font-bold" {...props} />
              ),
              h2: (props: any) => (
                <h1 className="my-5 text-xl font-bold" {...props} />
              ),
              li: ({ children }: { children: React.ReactNode }) => (
                <li className="ml-4 list-disc">{children} </li>
              ),
              link: ({
                href,
                children,
              }: {
                href: string
                children: React.ReactNode
              }) => (
                <a href={href} className="text-blue-500 hover:underline">
                  {children}{' '}
                </a>
              ),
            }}
          />
        </div>
      </article>
    </>
  )
}
