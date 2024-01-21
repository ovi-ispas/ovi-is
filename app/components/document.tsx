/* The Document wrapper component is used to provide the same html head meta
  and body scripts as of "app" in case there's an error caught by the error boundary */

import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  useLocation,
} from '@remix-run/react'
import { type PropsWithChildren, useEffect } from 'react'
import ReactGA from 'react-ga4'

import { appDomain } from '~/root'

export function Document({
  children,
  title,
  bodyClassName,
}: PropsWithChildren<{ title?: string; bodyClassName?: string }>) {
  useEffect(() => {
    ReactGA.initialize('G-D82386S2DD', {
      testMode: process.env.NODE_ENV !== 'production',
    })
  }, [])
  const location = useLocation()
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: location.pathname })
  }, [location])

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
        {/* GitHub Pages SPA

            This script checks to see if a redirect is present in the query string,
            converts it back into the correct url and adds it to the
            browser's history using window.history.replaceState(...),
            which won't cause the browser to attempt to load the new url.
            When the single page app is loaded further down in this file,
            the correct url will be waiting in the browser's history for
            the single page app to route accordingly.
        */}
        {/* <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
            console.log('aaaaaaaaa')
          (function (l) {
            console.log('l:', l)
            if (l.search[1] === '/') {
              var decoded = l.search.slice(1).split('&').map(function (s) {
                return s.replace(/~and~/g, '&')
              }).join('?');
              window.history.replaceState(null, null,
                l.pathname.slice(0, -1) + decoded + l.hash
              );
            }
          }(window.location))`,
          }}
        /> */}
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
