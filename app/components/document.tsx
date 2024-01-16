/* The Document wrapper component is used to provide the same html head meta
  and body scripts as of "app" in case there's an error caught by the error boundary */

import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import type { PropsWithChildren } from 'react'
import type { Theme } from 'remix-themes'
import { PreventFlashOnWrongTheme, useTheme } from 'remix-themes'

import Header from './header'

export function Document({
  children,
  title,
  ssrTheme = null,
}: PropsWithChildren<{ title?: string; ssrTheme?: Theme | null }>) {
  const [theme] = useTheme()

  return (
    <html lang="en" className={theme ?? ''}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="keywords" content="Remix,jokes" />
        <meta
          name="twitter:image"
          content="https://remix-jokes.lol/social.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@remix_run" />
        <meta name="twitter:site" content="@remix_run" />
        <meta name="twitter:title" content="Remix Jokes" />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(ssrTheme)} />
        {title ? <title>{title}</title> : null}
        <Links />
      </head>
      <body className="font-display">
        <Header />
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
