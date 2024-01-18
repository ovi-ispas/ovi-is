import { motion } from 'framer-motion'
import { lazy, Suspense, useEffect } from 'react'

import { Spinner } from '~/components/spinner'

import Image01 from './images/01.jpg'
import Image02 from './images/02.jpg'
import Image03 from './images/03.jpg'
import Image04 from './images/04.jpg'
import Image05 from './images/05.jpg'
import Image06 from './images/06.jpg'

const images = [
  { img: Image01, caption: 'DotJS Conf - Paris' },
  { img: Image02, caption: 'Reactive Conf - Timisoara' },
  { img: Image03, caption: 'TimJS Meetup - Timisoara' },
  { img: Image04, caption: 'JS Workshop - Timisoara' },
  { img: Image05, caption: 'Hackathon - Timisoara' },
  { img: Image06, caption: 'TimJS Meetup - Timisoara' },
]

export function Talks() {
  useEffect(() => {
    document.querySelector('#spinner-talks')?.classList.add('hidden')
  }, [])

  const Talk = lazy(() =>
    import('./talk').then((module) => ({ default: module.Talk }))
  )

  return (
    <div
      id="talks"
      className="talks__anchor-and-background min-h-screen w-full bg-[radial-gradient(circle,_rgba(35,53,101,0.5)_0%,_rgba(16,23,42,1)_45%)] py-16"
    >
      <motion.div
        id="talks__motion"
        className="container mx-auto flex flex-col lg:px-5"
        initial={{ opacity: 0, translateY: 50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 0.5, duration: 1, easings: 'linear' }}
      >
        <div id="talks__title-desc" className="mx-5 mb-6">
          <motion.h2
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 0.5, easings: 'linear', duration: 1.5 }}
            className="mx-auto mb-8 max-w-xs text-center text-4xl font-bold tracking-wide text-white sm:max-w-none md:text-5xl md:leading-relaxed"
          >
            Talks & Conferences
          </motion.h2>
          <p className="text-md text-center font-extralight leading-relaxed tracking-wide text-sky-400 md:text-xl">
            Learning from, and giving back to the{' '}
            <span className="font-bold text-white">community</span>.
          </p>
        </div>
        <div
          id="talks__content"
          className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-12 px-10 sm:grid-cols-2 sm:gap-10 md:grid-cols-3 lg:gap-20"
        >
          <Suspense
            fallback={
              <div className="absolute left-1/2 top-1/2">
                <Spinner />
              </div>
            }
          >
            {images.map((image, index) => (
              <Talk
                key={index}
                index={index}
                image={image.img}
                caption={image.caption}
              />
            ))}
          </Suspense>
        </div>
      </motion.div>
    </div>
  )
}
