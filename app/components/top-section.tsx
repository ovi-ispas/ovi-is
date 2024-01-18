import { Link } from '@remix-run/react'
import React, { PropsWithChildren } from 'react'

import Logo from '~/assets/icons/logo.svg?react'
import { cn } from '~/utils/browser'

export function TopSection({
  size = 'regular',
  links,
  children,
}: PropsWithChildren<{ links?: React.ReactNode; size?: 'full' | 'regular' }>) {
  return (
    <header className="w-full">
      <div
        id="top"
        className="header__shadow absolute z-10 h-0 w-0"
        style={{
          boxShadow: '0 0 200px 200px rgba(56,189,248,0.06)',
        }}
      ></div>
      <Navbar>{links}</Navbar>
      <div
        id="header__background"
        className={cn(
          "relative h-80 w-full bg-[url('/img/header.webp')] bg-cover bg-center bg-no-repeat",
          { 'h-screen': size === 'full' }
        )}
      >
        {children}
      </div>
    </header>
  )
}

function Navbar({ children }: PropsWithChildren) {
  return (
    <div
      id="header__navbar"
      className="absolute left-0 top-0 z-10 w-full bg-[rgba(0,0,0,0.2)] p-4 text-sm text-slate-400"
    >
      <div className="mx-auto flex flex-col items-center sm:flex-row">
        <div className="mb-5 flex flex-auto items-center justify-start sm:mb-0">
          <Logo width={22} height={22} />
          <Link
            to="/"
            className="ml-4  text-2xl font-bold text-white hover:animate-pulse sm:text-lg"
            unstable_viewTransition
            prefetch="render"
          >
            OVI.IS
          </Link>
        </div>
        {children ? (
          <nav className="flex w-full flex-auto items-center justify-between sm:w-auto sm:justify-end">
            {children}
          </nav>
        ) : null}
      </div>
    </div>
  )
}
