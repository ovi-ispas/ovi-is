import { createCookieSessionStorage } from '@remix-run/node'
import { createThemeSessionResolver } from 'remix-themes'
import invariant from 'tiny-invariant'

invariant(process.env.SESSION_SECRET, 'SESSION_SECRET must be set')

/** Create a cookie session for theme selection */
const themeSessionStorage = createCookieSessionStorage({
  cookie: {
    name: '__remix-themes',
    secure: process.env.NODE_ENV === 'production',
    secrets: [process.env.SESSION_SECRET],
    sameSite: 'lax',
    path: '/',
    httpOnly: true,
  },
})

export const themeSessionResolver =
  createThemeSessionResolver(themeSessionStorage)
