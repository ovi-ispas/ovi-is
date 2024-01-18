import { BlogCTAStrip } from '~/components/blog-cta-strip'
import { Section } from '~/components/section'
import { Spinner } from '~/components/spinner'

import { Clients } from './clients/clients'
import { Header } from './header/header'
import { Talks } from './talks/talks'
import { Tech } from './tech/tech'

export default function HomeRoute() {
  return (
    <div>
      <Section id="header">
        <Spinner id="header" />
        <Header />
      </Section>
      <Section id="clients">
        <Spinner id="clients" />
        <Clients />
      </Section>
      <Section id="tech">
        <Spinner id="tech" />
        <Tech />
      </Section>
      <Section id="talks">
        <Spinner id="talks" />
        <Talks />
      </Section>
      <BlogCTAStrip>Read the latest blog posts</BlogCTAStrip>
    </div>
  )
}
