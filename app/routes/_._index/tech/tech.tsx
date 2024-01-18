import { motion } from 'framer-motion'
import { lazy, Suspense, useEffect } from 'react'

import { Spinner } from '~/components/spinner'

import eslint from './images/eslint.png'
import framer from './images/framer.png'
import github from './images/github.png'
import pnpm from './images/pnpm.png'
import prettier from './images/prettier.png'
import prisma from './images/prisma.png'
import reactjs from './images/reactjs.png'
import remix from './images/remix.png'
import shadcnui from './images/shadcnui.png'
import tailwindcss from './images/tailwindcss.png'
import typescript from './images/typescript.png'
import zod from './images/zod.png'

const technologies = [
  {
    name: 'Remix',
    icon: remix,
  },
  {
    name: 'Prisma',
    icon: prisma,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwindcss,
  },
  {
    name: 'shadcn/ui',
    icon: shadcnui,
  },
  {
    name: 'Framer Motion',
    icon: framer,
  },
  {
    name: 'Zod',
    icon: zod,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'ESLint',
    icon: eslint,
  },
  {
    name: 'Prettier',
    icon: prettier,
  },
  {
    name: 'pnpm',
    icon: pnpm,
  },
  {
    name: 'GitHub Actions',
    icon: github,
  },
]

export function Tech() {
  useEffect(() => {
    document.querySelector('#spinner-tech')?.classList.add('hidden')
  }, [])

  const BallCanvas = lazy(() =>
    import('./ball-canvas').then((module) => ({
      default: module.BallCanvas,
    }))
  )

  return (
    <div
      id="tech"
      className="tech__anchor-and-background min-h-screen w-full bg-slate-900 bg-[url('/img/stars.png')] py-16"
    >
      <motion.div
        id="tech__motion"
        className="container mx-auto flex flex-col lg:px-5"
        initial={{ opacity: 0, translateY: 50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 0.5, duration: 1, easings: 'linear' }}
      >
        <div id="tech__title-desc" className="mx-5 mb-24">
          <motion.h2
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 0.5, easings: 'linear', duration: 1.5 }}
            className="mx-auto mb-8 max-w-xs text-center text-4xl font-bold tracking-wide text-white sm:max-w-none md:text-5xl md:leading-relaxed"
          >
            Technologies I use
          </motion.h2>
          <p className="text-md text-center font-extralight leading-relaxed tracking-wide text-sky-400 md:text-xl">
            The best experiences on the web require the best{' '}
            <span className="font-bold text-white">Tech Stack</span>.
          </p>
        </div>
        <div
          id="tech__content"
          className="relative mx-auto flex w-full max-w-3xl flex-row flex-wrap justify-center gap-16"
        >
          <Suspense
            fallback={
              <div className="absolute left-1/2 top-1/2">
                <Spinner />
              </div>
            }
          >
            {technologies.map((technology) => (
              <div
                className="h-36 w-36 bg-[radial-gradient(circle,_rgba(56,189,248,0.7)_0%,_rgba(16,23,42,1)_60%)] p-3"
                key={technology.name}
              >
                <BallCanvas icon={technology.icon} />
                <p className="text-center text-xs text-slate-400">
                  {technology.name}
                </p>
              </div>
            ))}
          </Suspense>
        </div>
      </motion.div>
    </div>
  )
}
