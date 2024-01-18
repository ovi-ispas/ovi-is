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

import { appDomain } from '~/root'

export function Document({
  children,
  title,
  bodyClassName,
}: PropsWithChildren<{ title?: string; bodyClassName?: string }>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="keywords" content="Ovi Ispas, Web Developer, UI, UX, DX" />
        <meta
          name="twitter:image"
          content={`https://${appDomain}/img/social.png`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@ovi_ispas" />
        <meta name="twitter:site" content="@ovi_ispas" />
        <meta name="twitter:title" content="Ovi Ispas" />
        <Meta />
        {title ? <title>{title}</title> : null}
        <Links />
      </head>
      <body className={`${bodyClassName} bg-slate-900 font-display`}>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
