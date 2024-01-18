import { Link, Outlet, useMatches } from '@remix-run/react'

import BlogIcon from '~/assets/icons/blog.svg?react'
import { BlogCTAStrip } from '~/components/blog-cta-strip'
import { ParticlesBackground } from '~/components/particles-background'
import { TopSection } from '~/components/top-section'

export default function PostsLayoutRoute() {
  const matches = useMatches()
  const isPostsIndex = /^\/posts\/?$/.test(matches[matches.length - 1].pathname)

  return (
    <div
      className="relative flex min-h-screen w-full flex-col items-center"
      key={Date.now()}
    >
      <TopSection
        links={
          !isPostsIndex && (
            <Link
              to="/posts"
              className="flex w-full items-center justify-center rounded-sm bg-sky-500 p-1 pr-2 text-xs text-white hover:animate-pulse hover:text-white sm:mr-4 sm:w-auto"
              unstable_viewTransition
            >
              <BlogIcon stroke="#fff" width={12} height={12} className="mr-1" />
              <span>More Posts</span>
            </Link>
          )
        }
      >
        <ParticlesBackground />
      </TopSection>
      <main className="z-20 w-full max-w-[85ch] flex-1 px-4">
        {!isPostsIndex ? (
          <article>
            <Outlet />
          </article>
        ) : (
          <Outlet />
        )}
      </main>
      {!isPostsIndex && <BlogCTAStrip>Read more posts</BlogCTAStrip>}
    </div>
  )
}
