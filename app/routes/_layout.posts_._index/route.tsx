import { Link } from '@remix-run/react'

// https://github.dev/pcattori/remix-blog-mdx

const posts: Record<string, { frontmatter: { title: string; slug: string } }> =
  import.meta.glob('../_layout.posts.*/*.mdx', {
    eager: true,
  })

export default function PostsIndexRoute() {
  return (
    <div>
      <h1>Posts Index</h1>
      <ul>
        {Object.entries(posts).map(([, data], index) => {
          console.log(data)
          return (
            <li key={index}>
              <Link to={`/posts/${data.frontmatter.slug}`}>
                {data?.frontmatter.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
