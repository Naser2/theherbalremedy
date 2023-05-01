import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card, Tag } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'

// import SectionLandingHero from '@/components/SectionLandingHero'
import LandingIntro from '@/components/LandingIntro'
import { PlayButton } from '@/components/PlayButton'
import map from '@/images/map.png'
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'
import Features from '@/components/features'
import theHerbalImage from '@/images/theherbalRemedy.JPG'
import EdibleItems from '@/components/EdibleItems'
import HerbItems from '@/components/HerbItems'
import Contact from './contact'
import { Signature } from '@/components/Signature'

const storeHours = [
  { day: 'Sunday', hours: '11:30 AM–4:30 PM' },
  { day: 'Monday	', hours: '11:30 AM–4 PM' },
  { day: 'Tuesday', hours: '11:30 AM–9 PM' },
  { day: 'Wednesday', hours: '	11:30 AM–9 PM' },
  { day: 'Thursday', hours: '11:30 AM–9 PM' },
  { day: 'Friday', hours: '11:30 AM–9 PM' },
  { day: 'Saturday', hours: '	11:30 AM–9 PM' },
]
const shadow = 'md:shadow-zinc-400/5 md:backdrop-blur hover:shadow-zinc-200/5 '

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

export default function Home() {
  const H3 = 'f-header-h3 my-2'
  const H1 = 'f-medium-editorial'
  const H2 = 'f-medium-'
  const container = 'relative mx-auto max-w-5xl bg-white'
  const grid = 'grid-clols-1 grid md:grid-cols-2'
  const freeWarapper =
    'relative px-6 sm:px-8 lg:px-12 lg:px-44 xl:px-64 py-4 md:py-10'
  const date = new Date('2023-044-21')
  // let date = new Date('2023-044-21T00:00:00.000Z')
  // let date = '2015-03-25T12:00:00-06:30'
  console.log('DATE---> episode', date)
  return (
    <>
      <Head>
        <title>Herbal Remedy Teashop - An Authentic Halem Tea Shop.</title>
        <meta
          name="description"
          content="I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms."
        />
      </Head>
      <LandingIntro />
      <div className="lg:max-w-8xl mx-auto max-w-3xl px-4 py-4 max-[600px]:hidden sm:px-6 sm:pt-14 lg:px-8">
        <div className="border-b border-gray-200 pb-10 text-center ">
          <h2 className="font-medium text-gray-500">Harlem tea shop.</h2>
          <p className="mt-2 text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-7xl ">
            Herbal Saves Lives
          </p>
        </div>
      </div>
      <div className="">
        <Features />
        <HerbItems number={4} />
        <img
          src="/bottom-right.webp"
          className="illustrated-background z-10 -mt-64 lg:-mt-[50rem]"
        />
        <EdibleItems number={6} />
        <img
          src="/bottom-right.webp"
          className="illustrated-background z-10 -mt-64 lg:-mt-[50rem]"
        />
      </div>
      <Container>
        <div className="mt-10 bg-white ">
          <div className="lg:max-w-8xl mx-auto max-w-5xl px-4 py-4 sm:px-6 sm:py-14 lg:px-8">
            <div className="grid-cols-2 lg:space-x-14 xl:grid ">
              <div className="border-b border-gray-200 pb-10 text-center ">
                <p className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl lg:text-5xl ">
                  Contact Us
                </p>

                <div className={'text-2xl lg:text-2xl'}>
                  <p className="inline-flex font-medium  text-gray-500 group-hover:text-gray-700">
                    <span className=" hover:text-blue-600 hover:underline">
                      1 (678) 964-4655
                    </span>
                  </p>
                </div>
              </div>
              <div className="border-b border-gray-200 pb-10 text-center ">
                <p className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl lg:text-5xl ">
                  Location
                </p>
                <Link
                  href="https://goo.gl/maps/b3U2ZaYAmsH8qoDN6"
                  className="overflow-wrap  text-2xl font-medium text-slate-500 group-hover:text-gray-700"
                >
                  <span className="overflow-wrap  hover:text-blue-600 hover:underline">
                    2154 2nd Ave, New York, NY 10029
                  </span>
                </Link>
              </div>
            </div>
            <div className="mt-6 grid-cols-2 lg:mt-10 lg:space-x-14 xl:grid ">
              <Link
                href="https://goo.gl/maps/TXRgJi1oApViqcZBA"
                className="border-b border-gray-200 pb-10 text-center "
              >
                <p className="mt-2 text-center text-3xl font-bold tracking-tight hover:text-blue-500 sm:text-4xl lg:text-5xl lg:text-5xl ">
                  Get direction
                </p>
                <img
                  src={map.src}
                  alt="Drawstring top with elastic loop closure and textured interior padding."
                  class="pc ti apz aqa"
                ></img>
              </Link>
              <div className="border-b border-gray-200 pb-10 text-center ">
                <p className="mt-2 text-center text-3xl font-bold tracking-tight  text-gray-900 sm:text-4xl lg:text-5xl lg:text-5xl ">
                  Hours
                </p>
                {storeHours.map((data) => {
                  return (
                    <div
                      key={data.day}
                      className="flex w-full flex-none items-center p-1 text-slate-600 sm:px-2 lg:px-4 xl:px-3"
                    >
                      <dt className="w-3/5 flex-none  text-xl font-medium text-slate-900 opacity-100 transition-opacity delay-500 duration-[1.5s] lg:text-2xl">
                        {data.day}
                      </dt>
                      <dd className="opacity-100 transition-opacity delay-500 duration-[1.5s] lg:text-2xl">
                        {data.hours}
                      </dd>
                    </div>
                  )
                })}
              </div>
            </div>{' '}
          </div>{' '}
          {/* <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="border-b border-gray-200 pb-10 text-center ">
              <h2 className="font-medium text-gray-500">Location Map</h2>
            </div>
            <h2 className="font-medium text-gray-500">
              Email From one input @email
            </h2>
            <p className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-7xl ">
              Contsact
            </p>
          </div> */}
        </div>
        {/* <Signature /> */}
      </Container>
      {/* <Image
        src={theHerbalImage.src}
        className="h-full w-full "
        alt="theherbalRemedy image"
        width={400}
        height={400}
      /> */}
    </>
  )
}
