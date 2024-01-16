import './tailwind.css'

import type {
  LinksFunction,
  LoaderFunctionArgs,
  MetaFunction,
} from '@remix-run/node'
import {
  isRouteErrorResponse,
  Outlet,
  useLoaderData,
  useRouteError,
} from '@remix-run/react'
import { Theme, ThemeProvider } from 'remix-themes'

import { Document } from '~/components/document'

import { ErrorAlert } from './components/error-alert'
import { themeSessionResolver } from './utils/session.server'

// @ts-expect-error -- BigInt is not supported by JSON, we add this on the prototype to use it in JSON.stringify()
BigInt.prototype.toJSON = function () {
  return this.toString()
}

// Return the theme from the session storage using the loader
export async function loader({ request }: LoaderFunctionArgs) {
  const { getTheme } = await themeSessionResolver(request)
  return {
    theme: getTheme(),
  }
}

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

function App() {
  const data = useLoaderData<typeof loader>()

  return (
    <Document ssrTheme={data.theme}>
      <Outlet />
    </Document>
  )
}

// Remix Theme
function AppWithProviders() {
  const data = useLoaderData<typeof loader>()

  return (
    <ThemeProvider specifiedTheme={data.theme} themeAction="/set-theme">
      <App />
    </ThemeProvider>
  )
}

export default AppWithProviders

export function ErrorBoundary() {
  const error = useRouteError()
  console.error(error)

  /* We don't have access to the request in the error boundary to get the preferred
      color scheme from the (httpOnly) cookie setting, so best we can do is to
      get it from the prefers-color-scheme media */
  const mode =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)')?.matches
      ? Theme.DARK
      : Theme.LIGHT

  // handle thrown Responses (expected)
  if (isRouteErrorResponse(error)) {
    return (
      <ThemeProvider
        specifiedTheme={mode}
        themeAction="/set-theme"
        // hack to force a re-render on the client where we have access to window
        key={Math.random()}
      >
        <Document title={`${error.status} ${error.statusText}`}>
          <div className="container py-4">
            <ErrorAlert title={`${error.status} Error`}>
              {error.data || error.statusText}
            </ErrorAlert>
          </div>
        </Document>
      </ThemeProvider>
    )
  }

  // handle thrown Errors (unexpected)
  const errorMessage = error instanceof Error ? error.message : 'Unknown error'

  return (
    <ThemeProvider
      specifiedTheme={mode}
      themeAction="/set-theme"
      // hack to force a re-render on the client where we have access to window
      key={Math.random()}
    >
      <Document title="Uh-oh!">
        <div className="container py-4">
          <ErrorAlert>{errorMessage}</ErrorAlert>
        </div>
      </Document>
    </ThemeProvider>
  )
}
