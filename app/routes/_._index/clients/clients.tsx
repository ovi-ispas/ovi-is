import { motion } from 'framer-motion'
import { lazy, Suspense, useEffect, useRef, useState } from 'react'

import { Spinner } from '~/components/spinner'
import { smoothScroll } from '~/utils/browser'

import LinkedIn from './images/linkedin.svg?react'
import x from './images/x.png'

export function Clients() {
  const AvatarAnimation = lazy(() =>
    import('./avatar-animation/avatar-animation').then((module) => ({
      default: module.AvatarAnimation,
    }))
  )

  const ClientsSlider = lazy(() =>
    import('./clients-slider').then((module) => ({
      default: module.MemoizedClientSlider,
    }))
  )

  const clientsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.querySelector('#spinner-clients')?.classList.add('hidden')
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const [show, toggleShow] = useState(false)

  function handleScroll() {
    toggleShow(clientsRef!.current!.getBoundingClientRect()?.top < 100)
  }

  return (
    <div
      ref={clientsRef}
      id="clients"
      className="clients__anchor-and-background min-h-screen w-full bg-[radial-gradient(circle,_rgba(35,53,101,0.5)_0%,_rgba(16,23,42,1)_45%)] py-16"
    >
      <motion.div
        id="clients__motion"
        className="container mx-auto flex flex-col lg:px-5"
        initial={{ opacity: 0, translateY: 50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 0.5, duration: 1, easings: 'linear' }}
      >
        <div id="clients__title-desc" className="mb-12">
          <motion.h2
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 0.5, easings: 'linear', duration: 1.5 }}
            className="mx-auto mb-8 max-w-xs text-center text-4xl font-bold tracking-wide text-white sm:max-w-none md:text-5xl md:leading-relaxed"
          >
            Companies I worked with
          </motion.h2>
          <p className="text-md text-center font-extralight leading-relaxed tracking-wide text-sky-400 md:text-xl">
            Over{' '}
            <span className="font-bold text-white">
              15 years of Software Development experience
            </span>
            ,<br className="hidden sm:inline-block" /> from start-ups and
            agencies to multi-national global companies.
          </p>
        </div>
        <div
          id="clients__content"
          className="flex w-full flex-auto flex-col items-center"
        >
          <div className="relative w-full md:h-[400px]">
            <Suspense
              fallback={
                <div className="absolute left-1/2 top-1/2">
                  <Spinner />
                </div>
              }
            >
              <AvatarAnimation />
            </Suspense>
          </div>
          <div className="relative mx-5 w-full overflow-hidden text-center xl:w-1/2 2xl:w-2/3">
            <Suspense
              fallback={
                <div className="absolute left-1/2 top-1/2">
                  <Spinner />
                </div>
              }
            >
              <ClientsSlider />
              <a
                href="https://www.linkedin.com/in/ovi-ispas"
                target="_blank"
                rel="noreferrer noopener"
                className="mx-auto inline-block xl:mt-12"
              >
                <LinkedIn fill="#fff" className="h-40 w-auto" />
              </a>
              <div className="my-[50px] mr-4 inline-block h-16 border-r border-white"></div>
              <a
                href="https://twitter.com/ovi_ispas"
                target="_blank"
                rel="noreferrer noopener"
                className="mx-auto inline-block xl:mt-12"
              >
                <img src={x} className="my-[60px] h-10 w-10" alt="X" />
              </a>
            </Suspense>
          </div>
        </div>
      </motion.div>
      {show && (
        <motion.a
          href="#top"
          className="fixed bottom-10 right-5 z-20 block h-10 w-10 animate-pulse rounded-full border-2 border-sky-400 text-center text-3xl text-sky-400"
          initial={{ opacity: 0, translateY: 50 }}
          animate={{
            opacity: 1,
            translateY: 0,
          }}
          transition={{ delay: 0.5, duration: 1, easings: 'easeOut' }}
          onClick={(e) => smoothScroll(e)}
        >
          ↑
        </motion.a>
      )}
    </div>
  )
}
