import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function smoothScroll(
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) {
  e.preventDefault()

  // @ts-expect-error - Property 'hash' does not exist on type 'EventTarget'
  document.querySelector(e.target.hash).scrollIntoView({ behavior: 'smooth' })
}

export function isSmallViewport() {
  if (typeof document === 'undefined') return false
  return window.innerWidth < 768
}
