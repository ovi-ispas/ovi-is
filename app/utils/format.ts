import { differenceInHours, formatDistanceToNow } from 'date-fns'

export function timeAgo(dateString: string) {
  const date = new Date(dateString)
  const now = new Date()

  if (differenceInHours(now, date) < 24) {
    return 'today'
  }

  return formatDistanceToNow(date, { addSuffix: true })
}
