import { motion } from 'framer-motion'
import { useEffect } from 'react'

import ContactIcon from '~/assets/icons/contact.svg?react'
import { isSmallViewport } from '~/utils/browser'

export function Contact() {
  useEffect(() => {
    document.querySelector('#spinner-contact')?.classList.add('hidden')
  }, [])

  return (
    <footer
      id="contact"
      className="contact__anchor-and-background relative min-h-[50vh] w-full overflow-hidden border-t border-sky-700 bg-slate-950 pt-28"
    >
      <div
        id="contact__shadow"
        className="absolute left-1/2 top-0 z-10 h-0 w-0"
        style={{
          boxShadow: '0 0 300px 300px rgba(56,189,248,0.06)',
        }}
      ></div>
      <motion.div
        id="contact__motion"
        className="container mx-auto flex flex-col items-center lg:px-5"
        initial={{ opacity: 0, translateY: 50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 0.5, duration: 1, easings: 'linear' }}
      >
        <div id="contact__title-desc" className="mx-5 mb-6">
          <motion.h2
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 0.5, easings: 'linear', duration: 1.5 }}
            className="mx-auto mb-8 max-w-xs text-center text-4xl font-bold tracking-wide text-white sm:max-w-none md:text-5xl md:leading-relaxed"
          >
            Contact
          </motion.h2>
          <p className="text-md flex items-center justify-center text-center font-extralight leading-relaxed tracking-wide text-sky-400 md:text-xl">
            <ContactIcon
              fill="#38bdf8"
              width={isSmallViewport() ? 16 : 22}
              height={isSmallViewport() ? 16 : 22}
              className="mr-2"
            />
            Drop me a line at
            <a href="mailto:hello@ovi.is" className="mx-2 font-bold text-white">
              hello@ovi.is
            </a>
          </p>
          <p className="text-md !mt-2 flex items-center justify-center text-center font-extralight leading-relaxed tracking-wide text-sky-400 md:text-xl">
            <span className="mr-2 text-3xl text-sky-500">𝕏</span>
            Follow me at{' '}
            <a
              href="https://twitter.com/ovi_ispas"
              className="mx-2 font-bold text-white"
            >
              @ovi_ispas
            </a>
          </p>
        </div>
      </motion.div>
    </footer>
  )
}
