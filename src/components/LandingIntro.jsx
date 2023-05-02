import { useState } from 'react'
import { Dialog } from '@headlessui/react'
// import image1 from '@/images/about-images/Cam1.png'
// import image2 from '@/images/about-images/Cam2.png'
// import image3 from '@/images/about-images/Cam3.png'
// import image4 from '@/images/about-images/Cam4.png'
// import image5 from '@/images/about-images/Cam5.png'
// import image6 from '@/images/about-images/Cam_random_2.jpeg'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { PlayButton } from './PlayButton'

import mainBg from '@/images/1ff3799c-df72-417e-906d-ff9229b29d15.JPG'
import logo from '@/images/logo.JPG'

export default function LandingIntro() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div id="intro" className=" relative  -mt-20 lg:-mt-24 ">
      <div className="rounded-md bg-gray-900">
        <header className="absolute inset-x-0  top-0 z-50 rounded-md ">
          <span className="sr-only">The herbal Remedy Tea shop </span>
        </header>

        <div className="landing-video-container relative isolate overflow-hidden">
          {/* <video
            controls
            src="/tea-shop-vid-1.mp4"
            //   src="/video-meditation.mp4"
            // ref={videoElement}
            // onTimeUpdate={handleOnTimeUpdate}
          /> */}

          <Image
            src={mainBg.src}
            alt="landing-hero-background"
            width="1658"
            height="1660"
            className="absolute inset-0 -z-10  aspect-[818/452]  h-[284px] w-full object-cover object-center md:h-full"
          />

          <div className="mx-auto max-w-2xl py-32 sm:py-48  lg:py-56">
            <div className="text-center">
              <SiteTitle />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const SiteTitle = () => {
  const H3 = 'f-header-h3 my-2'
  const H1 = 'f-medium-editorial'
  return (
    <div id="SITE TITLE AND LOGO">
      {/* <Image
        className="absolute top-20 left-4 z-50  h-12 w-12 rounded-full  lg:h-[4rem] lg:w-[4rem] xl:top-[14%] xl:h-[6rem]  xl:w-[6rem] "
        src={logo.src}
        alt="the herbal remedy logo"
        width={40}
        height={40}
      />{' '} */}
      <div
        ner
        className={clsx(
          // shadow,
          'absolute  top-[52%]  mx-24  transform items-center opacity-100 '
        )}
      >
        <div className="shadow-zinc-400/5 dark:text-zinc-800 dark:ring-white/10 ">
          <h1
            className="text-4xl font-bold text-white md:text-6xl xl:text-7xl"
            id="intro-text-width"
          >
            The Herbal Remedy
          </h1>

          <div id="text-cta" className="mt-6">
            <div id="button-wrapper">
              {/* <div className={clsx('')} id="intro-text-width">
                <h2
                  className={clsx('h1  font-bold  text-slate-200')}
                  id="intro-text-width"
                >
                  <br /> Come visite us.
                </h2>
              </div> */}
              {/* <p
                className={clsx(
                  shadow,
                  'flex-block hidden text-slate-200 lg:flex '
                )}
              >
                123 East 116th St , Harlem, Ny
              </p>{' '} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
