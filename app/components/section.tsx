import React, { Suspense } from 'react'

import { cn, isSmallViewport } from '~/utils/browser'

import { Spinner } from './spinner'

export function Section({
  children,
  id,
}: React.PropsWithChildren<{
  id: 'header' | 'clients' | 'tech' | 'talks' | 'footer'
}>) {
  return (
    <section
      id={`section__${id}`}
      className={cn(
        `relative flex flex-col items-center justify-center ${adjustScreenHeight(id)}`,
        { 'min-h-auto': id === 'footer', 'min-h-screen': id !== 'footer' }
      )}
    >
      <Suspense fallback={<Spinner />}>{children}</Suspense>
    </section>
  )
}

function adjustScreenHeight(id: string) {
  if (typeof window === 'undefined') {
    return
  }
  const vh = window.innerHeight
  const vw = window.innerWidth

  if (id !== 'header' || !isSmallViewport() || vw < vh) {
    return
  }

  return 'mb-[75vh]'
}
