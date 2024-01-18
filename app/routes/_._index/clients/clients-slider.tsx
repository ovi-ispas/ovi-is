import { memo } from 'react'
import Slider from 'react-slick'

import Image02 from './images/3pillar.png'
import Image12 from './images/amdaris.png'
import Image17 from './images/bny.png'
import Image14 from './images/cognizant.png'
import Image07 from './images/espresoh.png'
import Image08 from './images/haufe.png'
import Image15 from './images/jnj.png'
import Image01 from './images/lingo24.png'
import Image05 from './images/natgeo.jpeg'
import Image00 from './images/nokia.png'
import Image03 from './images/opswat.png'
import Image13 from './images/pearson.png'
import Image06 from './images/phishme.png'
import Image16 from './images/premier-inn.png'
import Image10 from './images/softvision.png'
import Image11 from './images/talkspace.png'
import Image04 from './images/telegraph.png'
import Image09 from './images/unified-post.png'

const images = [
  { img: Image00, caption: 'Nokia' },
  { img: Image01, caption: 'Lingo24' },
  { img: Image02, caption: '3 Pillar Global' },
  { img: Image03, caption: 'Opswat' },
  { img: Image04, caption: 'The Telegraph' },
  { img: Image05, caption: 'National Geographic' },
  { img: Image06, caption: 'PhishMe' },
  { img: Image07, caption: 'E-spres-oh' },
  { img: Image08, caption: 'Haufe' },
  { img: Image09, caption: 'Unified Post' },
  { img: Image10, caption: 'Softvision' },
  { img: Image11, caption: 'Talkspace' },
  { img: Image12, caption: 'Amdaris' },
  { img: Image13, caption: 'Pearson' },
  { img: Image14, caption: 'Cognizant' },
  { img: Image15, caption: 'Johnson & Johnson' },
  { img: Image16, caption: 'Premier Inn' },
  { img: Image17, caption: 'Bank of New York Mellon' },
]

function Company({ image, caption }: { image: string; caption: string }) {
  return (
    <div className="flex h-48 w-48 items-center justify-center rounded-lg border-2 border-sky-500 bg-white p-4">
      <img
        src={image}
        alt={caption}
        className="h-auto w-full rounded-lg grayscale hover:grayscale-0"
      />
    </div>
  )
}
const settings = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  speed: 7000,
  autoplaySpeed: 1000,
  cssEase: 'linear',
  arrows: false,
  pauseOnHover: false,
}

function ClientsSlider() {
  if (typeof window === 'undefined') return null

  return (
    <div className="mx-auto w-[600px] md:w-[650px] lg:w-[700px] xl:w-[600px] 2xl:w-[650px]">
      <Slider {...settings}>
        {images.map((image, index) => (
          <Company key={index} image={image.img} caption={image.caption} />
        ))}
      </Slider>
    </div>
  )
}

export const MemoizedClientSlider = memo(ClientsSlider)
