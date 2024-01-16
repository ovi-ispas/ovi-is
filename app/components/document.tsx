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

export function Document({
  children,
  title,
}: PropsWithChildren<{ title?: string }>) {
  return (
    <html lang="en" className="dark">
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
        {title ? <title>{title}</title> : null}
        <Links />
      </head>
      <body className="font-display">
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
