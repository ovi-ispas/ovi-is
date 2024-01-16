import { json } from '@remix-run/node'

/* A. Returned responses (eg. `return new Response()` or `return json()`)
    can be used via loaderData inside components (mostly for validation) */

/**
 * This helper function helps us to return the accurate HTTP status,
 * 400 Bad Request, to the client.
 */
export function badRequest<T>(data: T) {
  return json<T>(data, { status: 400 })
}

/* B. Thrown responses (eg. `throw new Response()`)
    will end up in error boundaries */

export function throwBadRequest(message?: string) {
  throw new Response(message, { status: 400, statusText: 'Bad Request' })
}

export function throwUnauthorized(message?: string) {
  throw new Response(message, { status: 401, statusText: 'Unauthorized' })
}

export function throwForbidden(message?: string) {
  throw new Response(message, { status: 403, statusText: 'Forbidden' })
}

export function throwNotFound(message?: string) {
  throw new Response(message, { status: 404, statusText: 'Not Found' })
}
