import { Link } from '@remix-run/react'
import { PropsWithChildren } from 'react'

import BlogIcon from '~/assets/icons/blog.svg?react'
import { isSmallViewport } from '~/utils/browser'

export function BlogCTAStrip({ children }: PropsWithChildren) {
  return (
    <aside className="w-full border-b border-sky-700 bg-slate-950 p-4 py-10 text-center">
      <p className="text-md flex items-center justify-center text-center font-extralight leading-relaxed tracking-wide text-sky-400 md:text-xl">
        <BlogIcon
          stroke="#38bdf8"
          width={isSmallViewport() ? 16 : 22}
          height={isSmallViewport() ? 16 : 22}
          className="mr-2"
        />
        <Link
          to="/posts"
          className="text-xl font-bold text-white"
          unstable_viewTransition
          prefetch="viewport"
        >
          {children}
        </Link>
      </p>
    </aside>
  )
}
