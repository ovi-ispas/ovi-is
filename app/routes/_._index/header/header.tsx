import { Link } from '@remix-run/react'
import { motion } from 'framer-motion'
import { lazy, Suspense, useEffect } from 'react'

import Blog from '~/assets/icons/blog.svg?react'
import Clients from '~/assets/icons/clients.svg?react'
import Contact from '~/assets/icons/contact.svg?react'
import Talks from '~/assets/icons/talks.svg?react'
import Tech from '~/assets/icons/tech.svg?react'
import { Spinner } from '~/components/spinner'
import { TopSection } from '~/components/top-section'
import { isSmallViewport, smoothScroll } from '~/utils/browser'

import Ovi from './ovi.jpg'

export function Header() {
  useEffect(() => {
    document.querySelector('#spinner-header')?.classList.add('hidden')
  }, [])

  const ParticlesBackground = lazy(() =>
    import('../../../components/particles-background').then((module) => ({
      default: module.ParticlesBackground,
    }))
  )

  return (
    <motion.div
      id="header__motion"
      className="relative flex h-screen w-full flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <TopSection links={<Links />} size="full">
        <Suspense
          fallback={
            <div className="absolute left-[calc(50vw-16px)] top-[calc(50vh-16px)]">
              <Spinner />
            </div>
          }
        >
          <ParticlesBackground startDelay={750} />
        </Suspense>
        <div
          id="header__content"
          className="absolute left-0 top-0 h-screen w-full pt-24 sm:pt-14"
        >
          <div className="container mx-auto flex h-full flex-col xl:max-w-6xl">
            <div className="flex flex-auto flex-col items-center justify-evenly md:flex-row md:px-5">
              <motion.div
                id="header__title-desc"
                className="md:flex-auto"
                initial={
                  isSmallViewport()
                    ? { opacity: 0, translateY: -100 }
                    : { opacity: 0, translateX: -100 }
                }
                animate={
                  isSmallViewport()
                    ? { opacity: 1, translateY: 0 }
                    : { opacity: 1, translateX: 0 }
                }
                transition={{ delay: 1.5, duration: 1.5, easings: 'easeOut' }}
              >
                <h1 className="my-5 text-center text-6xl font-bold tracking-wide text-white sm:my-11 sm:text-7xl md:mb-16 md:mt-0 md:text-left lg:text-8xl xl:text-9xl">
                  OVI ISPAS
                </h1>
                <p className="max-w-sm text-center text-xl font-extralight leading-relaxed tracking-wide text-sky-400 sm:text-2xl md:mx-0 md:max-w-none md:text-left md:text-3xl">
                  Product oriented{' '}
                  <span className="font-bold text-white">Web Developer</span>.
                  <br /> UI / UX / DX.
                </p>
              </motion.div>
              <motion.img
                src={Ovi}
                alt="Ovi Ispas"
                className="mt-4 h-48 w-48 rounded-lg border border-sky-400 md:mt-0 md:h-72 md:w-72"
                initial={
                  isSmallViewport()
                    ? { opacity: 0, translateY: 100 }
                    : { opacity: 0, translateX: 100 }
                }
                animate={
                  isSmallViewport()
                    ? { opacity: 1, translateY: 0 }
                    : { opacity: 1, translateX: 0 }
                }
                transition={{ delay: 1.5, duration: 1.5, easings: 'easeOut' }}
              />
            </div>
            <motion.a
              href="#clients"
              className="mx-auto my-6 mb-40 block h-10 w-10 animate-pulse rounded-full border-2 border-sky-400 text-center text-3xl text-sky-400 md:mb-20"
              initial={
                isSmallViewport()
                  ? { opacity: 0, translateY: 250 }
                  : { opacity: 0, translateY: -50 }
              }
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ delay: 1.5, duration: 1.5, easings: 'easeOut' }}
              onClick={(e) => smoothScroll(e)}
            >
              ↓
            </motion.a>
          </div>
        </div>
      </TopSection>
    </motion.div>
  )
}

function Links() {
  return (
    <>
      <Link
        to="#clients"
        onClick={(e) => smoothScroll(e)}
        className="flex items-center text-xs hover:animate-pulse hover:text-sky-400 sm:mr-4"
      >
        <span className="mr-1">
          <Clients fill="#38bdf8" width={12} height={12} />
        </span>{' '}
        Clients
      </Link>

      <Link
        to="#tech"
        onClick={(e) => smoothScroll(e)}
        className="flex items-center text-xs hover:animate-pulse hover:text-sky-400 sm:mr-4"
      >
        <span className="mr-1">
          <Tech fill="#38bdf8" width={12} height={12} />
        </span>{' '}
        Technologies
      </Link>

      <Link
        to="#talks"
        onClick={(e) => smoothScroll(e)}
        className="flex items-center text-xs hover:animate-pulse hover:text-sky-400 sm:mr-4"
      >
        <span className="mr-1">
          <Talks fill="#38bdf8" width={12} height={12} />
        </span>{' '}
        Talks
      </Link>

      <Link
        to="#contact"
        onClick={(e) => smoothScroll(e)}
        className="flex items-center text-xs hover:animate-pulse hover:text-sky-400 sm:mr-4"
      >
        <span className="mr-1">
          <Contact fill="#38bdf8" width={12} height={12} />
        </span>{' '}
        Contact
      </Link>

      <Link
        to="/posts"
        unstable_viewTransition
        prefetch="intent"
        className="flex items-center rounded-sm bg-sky-500 p-1 pr-2 text-xs text-white hover:animate-pulse hover:text-sky-400 hover:text-white sm:mr-4"
      >
        <span className="mr-1">
          <Blog stroke="#fff" width={12} height={12} />
        </span>{' '}
        Blog Posts
      </Link>
    </>
  )
}
