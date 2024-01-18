import {
  Link,
  MetaFunction,
  unstable_useViewTransitionState,
  useSearchParams,
} from '@remix-run/react'
import { PropsWithChildren } from 'react'

import { getFeaturedPostsFirst } from './helpers'

export const meta: MetaFunction = () => {
  const description = 'Posts | ovi.is'

  return [
    { name: 'description', content: description },
    { name: 'twitter:description', content: description },
    { title: description },
  ]
}

const posts = getFeaturedPostsFirst()

export default function PostsIndexRoute() {
  const [searchParams] = useSearchParams()
  return (
    <div>
      <h1 className="-mt-44 mb-36 text-center">Blog Posts</h1>
      <div className="container flex justify-center">
        <ul className="m-0 list-none p-0">
          {posts
            .filter(({ frontmatter }) =>
              searchParams.get('drafts') !== 'true'
                ? frontmatter?.draft !== true
                : true
            )
            .map(({ slug, frontmatter }) => {
              return (
                <li key={slug} className="mb-6">
                  <article>
                    <h3 className="flex items-center">
                      {frontmatter.featured ? (
                        <span className="mr-4 w-32 text-right text-[15px] font-bold text-white">
                          <span className="mr-1">⭐️</span> Featured
                        </span>
                      ) : (
                        <span className="mr-4 w-32 text-right text-[12px] font-normal text-slate-400">
                          <span className="mr-1">🗓️</span>{' '}
                          <time dateTime={frontmatter.published}>
                            {frontmatter.published.replace(/-/g, '/')}
                          </time>
                        </span>
                      )}
                      <LinkWithTransition
                        to={`/posts/${slug}`}
                        slug={slug}
                        unstable_viewTransition
                        className="hover:animate-pulse hover:text-sky-500"
                        prefetch="intent"
                      >
                        {frontmatter.title}
                      </LinkWithTransition>
                    </h3>
                  </article>
                </li>
              )
            })}
        </ul>
      </div>
    </div>
  )
}

function LinkWithTransition({
  to,
  ...props
}: PropsWithChildren<{
  to: string
  slug: string
  unstable_viewTransition: boolean
  className: string
  prefetch: string
}>) {
  const isTransitioning = unstable_useViewTransitionState(to)
  return (
    <Link
      to={to}
      className="hover:animate-pulse hover:text-sky-500"
      prefetch="intent"
      unstable_viewTransition
    >
      <span
        style={{
          viewTransitionName: isTransitioning
            ? `title-transition-${props.slug}`
            : '',
        }}
      >
        {props.children}
      </span>
    </Link>
  )
}
