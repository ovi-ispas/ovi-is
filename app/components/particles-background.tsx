import { useCallback } from 'react'
import { default as Particles } from 'react-particles'
import type { Engine } from 'tsparticles-engine'
import { loadSlim } from 'tsparticles-slim'

export function ParticlesBackground({
  startDelay = 0,
}: {
  startDelay?: number
}) {
  const particlesInit = useCallback(
    async (engine: Engine) => {
      const delay = (ms: number) => new Promise((res) => setTimeout(res, ms))
      await delay(startDelay)
      await loadSlim(engine)
    },
    [startDelay]
  )

  if (typeof window === 'undefined') return null

  return (
    <Particles
      className="absolute left-0 top-0 z-0 h-full w-full"
      init={particlesInit}
      options={particlesOptions}
    />
  )
}

const particlesOptions = {
  fullScreen: false,
  fps_limit: 60,
  interactivity: {
    detect_on: 'canvas',
    events: {
      // onclick: { enable: true, mode: 'push' },
      // onhover: {
      //   enable: true,
      //   mode: 'attract',
      //   parallax: { enable: false, force: 60, smooth: 10 },
      // },
      resize: true,
    },
    modes: {
      push: { quantity: 4 },
      attract: { distance: 200, duration: 0.4, factor: 5 },
    },
  },
  particles: {
    color: { value: '#38bef8' },
    line_linked: {
      color: '#014a6b',
      distance: 150,
      enable: true,
      opacity: 0.4,
      width: 1,
    },
    move: {
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
      bounce: false,
      direction: 'none',
      enable: true,
      out_mode: 'out',
      random: false,
      speed: 2,
      straight: false,
    },
    number: { density: { enable: true, value_area: 800 }, value: 80 },
    opacity: {
      anim: {
        enable: false,
        opacity_min: 0.1,
        speed: 1,
        sync: false,
      },
      random: false,
      value: 0.5,
    },
    shape: {
      character: {
        fill: false,
        font: 'Verdana',
        style: '',
        value: '*',
        weight: '400',
      },
      image: {
        height: 100,
        replace_color: true,
        src: 'images/github.svg',
        width: 100,
      },
      polygon: { nb_sides: 5 },
      stroke: { color: '#000000', width: 0 },
      type: 'circle',
    },
    size: {
      anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
      random: true,
      value: 5,
    },
  },
  polygon: {
    draw: { enable: false, lineColor: '#ffffff', lineWidth: 0.5 },
    move: { radius: 10 },
    scale: 1,
    type: 'none',
    url: '',
  },
  retina_detect: true,
} as const
