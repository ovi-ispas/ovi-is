import { motion } from 'framer-motion'
import { Suspense } from 'react'
import Tilt from 'react-parallax-tilt'

import Picture from '~/assets/icons/picture.svg?react'
import { Spinner } from '~/components/spinner'

const defaultOptions = {
  tiltMaxAngleX: 35, // max tilt rotation (degrees)
  tiltMaxAngleY: 35, // max tilt rotation (degrees)
  perspective: 600, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.2, // 2 = 200%, 1.5 = 150%, etc..
  transitionSpeed: 3000, // Speed of the enter/exit transition
  transitionEasing: 'cubic-bezier(.03,.98,.52,.99)', // Easing on enter/exit.
}

export function Talk({
  image,
  caption,
  index,
}: {
  image: string
  caption: string
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: -100 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{
        delay: (index + 1) * 0.25,
        easings: 'linear',
      }}
      className="relative"
    >
      <Suspense
        fallback={
          <div className="absolute left-1/2 top-1/2 text-white">
            <Spinner />
          </div>
        }
      >
        <Tilt {...defaultOptions} className="text-slate-400 hover:text-white">
          <img
            src={image}
            alt={caption}
            className="h-full w-full rounded-lg border border-sky-400 opacity-70 hover:opacity-100"
          />
          <p className="mt-4 flex items-center justify-start text-xs sm:justify-center">
            <Picture fill="#38bdf8" className="mr-2 h-3 w-3" />
            {caption}
          </p>
        </Tilt>
      </Suspense>
    </motion.div>
  )
}
