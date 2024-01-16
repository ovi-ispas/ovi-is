import './tailwind.css'

import type { LinksFunction, MetaFunction } from '@remix-run/node'
import { isRouteErrorResponse, Outlet, useRouteError } from '@remix-run/react'

import { Document } from '~/components/document'

import { ErrorAlert } from './components/error-alert'

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
  const description =
    'Ovi Ispas - Web Developer from Timisoara, Romania, specialized in Front-End technologies.'

  return [
    { name: 'description', content: description },
    { name: 'twitter:description', content: description },
    { title: 'Ovi Ispas' },
  ]
}

export default function App() {
  return (
    <Document>
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
      <Document title={`${error.status} ${error.statusText}`}>
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
    <Document title="Uh-oh!">
      <div className="container py-4">
        <ErrorAlert>{errorMessage}</ErrorAlert>
      </div>
    </Document>
  )
}
