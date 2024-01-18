import { Outlet } from '@remix-run/react'

import { Section } from '~/components/section'
import { Spinner } from '~/components/spinner'

import { Contact } from './contact/contact'

export default function LayoutRoute() {
  return (
    <>
      <Outlet />
      <Section id="footer">
        <Spinner id="contact" />
        <Contact />
      </Section>
    </>
  )
}
