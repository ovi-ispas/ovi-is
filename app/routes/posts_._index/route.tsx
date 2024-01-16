import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

// https://github.dev/pcattori/remix-blog-mdx

export async function loader() {
  const posts: Record<
    string,
    { frontmatter: { title: string; slug: string } }
  > = import.meta.glob('../posts.*/*.mdx', {
    eager: true,
  })
  console.log(posts)
  return json({ posts })
}
export default function PostsIndexRoute() {
  const { posts } = useLoaderData<typeof loader>()

  return (
    <div>
      <h1>Posts Index</h1>
      <ul>
        {Object.entries(posts).map(([, data], index) => {
          console.log(data)
          return (
            <li key={index}>
              <a href={`/posts/${data.frontmatter.slug}`}>
                {data?.frontmatter.title}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
