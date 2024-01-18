import { useLocation } from '@remix-run/react'
import { PropsWithChildren } from 'react'

import { timeAgo } from '~/utils/format'

export function PostTitle({
  published,
  featured,
  children,
}: PropsWithChildren<{ published: string; featured: boolean }>) {
  const { pathname } = useLocation()
  const slug = pathname.replace('/posts/', '')
  return (
    <h1 className="absolute left-0 top-36 w-full text-center">
      <span
        style={{
          viewTransitionName: `title-transition-${slug}`,
        }}
      >
        <p className="text-white">
          {featured && '⭐️'} {children}
        </p>
        <p className="!mt-0 text-lg font-normal tracking-wide">
          🗓️ Published {timeAgo(published)}
        </p>
      </span>
    </h1>
  )
}
