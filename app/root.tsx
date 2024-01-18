import './tailwind.css'

import type { LinksFunction, MetaFunction } from '@remix-run/node'
import {
  isRouteErrorResponse,
  Outlet,
  useMatches,
  useRouteError,
} from '@remix-run/react'

import { Document } from '~/components/document'

import { ErrorAlert } from './components/error-alert'

export const appDomain = 'ovi.is'

export const links: LinksFunction = () => [
  // import the Google Fonts stylesheet
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap',
  },
]

export const meta: MetaFunction = () => {
  const description = `Ovi Ispas - Product oriented Web Developer. UI / UX / DX. | ${appDomain}`

  return [
    { title: `${appDomain} | Ovi Ispas` },
    { name: 'description', content: description },
    { name: 'twitter:description', content: description },
  ]
}

function useRouteClassName() {
  const matches = useMatches()
  const leafRoute = matches[matches.length - 1].pathname
  return leafRoute === '/'
    ? 'home'
    : leafRoute.startsWith('/posts')
      ? 'posts'
      : ''
}

export default function App() {
  const bodyClassName = useRouteClassName()
  return (
    <Document bodyClassName={bodyClassName}>
      <Outlet />
    </Document>
  )
}

export function ErrorBoundary() {
  const error = useRouteError()
  console.error(error)

  // handle thrown Responses (expected)
  if (isRouteErrorResponse(error)) {
    return (
      <Document title={`${error.status} ${error.statusText} | ${appDomain}`}>
        <div className="container py-4">
          <ErrorAlert title={`${error.status} Error`}>
            {error.data || error.statusText}
          </ErrorAlert>
        </div>
      </Document>
    )
  }

  // handle thrown Errors (unexpected)
  const errorMessage = error instanceof Error ? error.message : 'Unknown error'

  return (
    <Document title={`App Error | ${appDomain}`}>
      <div className="container py-4">
        <ErrorAlert>{errorMessage}</ErrorAlert>
      </div>
    </Document>
  )
}
