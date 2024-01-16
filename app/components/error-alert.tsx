import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

import { Alert, AlertDescription, AlertTitle } from './ui/alert'

export function ErrorAlert({
  title,
  children,
}: {
  title?: string
  children: React.ReactNode
}) {
  return (
    <Alert variant="destructive">
      <ExclamationTriangleIcon className="mt-1 h-4 w-4" />
      <AlertTitle>
        <p className="text-xl">{title ? title : 'App Error'}</p>
      </AlertTitle>
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  )
}
