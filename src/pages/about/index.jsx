import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import TheHerbalTeam from '@/images/the-herbal-team.JPG'
import TheHerbalMain from '@/images/the-herbal-remedy-main.webp'
import team1 from '@/images/team1.jpg'
import team2 from '@/images/team2.jpg'
import team3 from '@/images/team3.jpg'

import {
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'
import { SocialMedia } from '@/components/SocialMedia'
import Contact from '../contact'
import { Address } from '@/components/Signature'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <div className="-mt-14 lg:-mt-40 lg:-mt-[10rem]">
      <img
        src={TheHerbalTeam.src}
        alt="event-space-2.jpeg"
        className="landing-hero-background h-full w-full object-cover object-center "
      />
      <div className="mx-auto hidden max-w-7xl px-6 sm:mt-20 lg:-mt-[60rem] lg:flex lg:px-8 xl:px-14">
        <h2 className="py-14 text-center text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
          About The Herbal Remedy
        </h2>
      </div>
      <div className="mx-auto max-w-7xl px-6 sm:mt-20 lg:mt-[50rem]  lg:px-8 xl:px-14">
        <h2 className="py-14 text-center text-3xl font-bold tracking-tight text-teal-500 sm:text-5xl">
          Team Herbal Remedy
        </h2>
        <div className="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
          <div className="w-full lg:max-w-lg lg:flex-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-600 sm:text-4xl">
              &quot;We’re looking forward to having you come by&quot;
            </h2>
            <p className="mt-6 text-2xl leading-8 text-gray-600">
              The Herbal Remedy team is a diverse group of young dynamic man who
              share a common vision which is to heal the people through herbs.
            </p>
            <img
              src={TheHerbalMain.src}
              alt=""
              className="mt-16 hidden aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:flex lg:aspect-auto lg:h-[34.5rem]"
            />
          </div>
          <div className="hidden w-full lg:flex lg:max-w-xl lg:flex-auto ">
            <h3 className="sr-only">Job openings</h3>
            <ul className="-my-8 divide-y divide-gray-100">
              {jobOpenings.map((opening) => (
                <li key={opening.id} className="py-8">
                  <dl className="relative flex flex-wrap gap-x-3">
                    <dt className="sr-only">Role</dt>
                    <dd className="w-full flex-none text-lg font-semibold tracking-tight text-gray-900 xl:text-2xl">
                      <a href={opening.href}>
                        {opening.role}
                        <span className="absolute inset-0" aria-hidden="true" />
                      </a>
                    </dd>
                    <dt className="sr-only">Description</dt>
                    <dd className="mt-2 w-full flex-none text-base  leading-7 text-gray-600 lg:text-xl xl:text-2xl">
                      {opening.description}
                    </dd>
                    <dt className="sr-only">source</dt>
                    <dd className="mt-4 text-base font-semibold leading-7 text-gray-900 xl:text-xl ">
                      {opening.source}
                    </dd>
                    <dt className="sr-only">Location</dt>
                    <dd className="mt-4 flex items-center gap-x-3 text-base leading-7 text-gray-500 xl:text-xl">
                      <svg
                        viewBox="0 0 2 2"
                        className="h-0.5 w-0.5 flex-none fill-gray-300"
                        aria-hidden="true"
                      >
                        <circle cx={1} cy={1} r={1} />
                      </svg>
                      {opening.location}
                    </dd>
                  </dl>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Team section */}
      <div className="mx-auto mt-12  max-w-7xl px-6 sm:mt-40 lg:px-8 ">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-5xl">
            Our team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-800">
            We&apos;re a group of brilliant individuals who believe in the power
            of comming together to foster a positive future.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 pb-14 sm:grid-cols-2 lg:mx-0 lg:max-w-4xl lg:max-w-none lg:grid-cols-3 lg:pb-24 xl:grid-cols-3 "
        >
          {team.map((person) => (
            <li key={person.name}>
              <img
                className="aspect-[14/13] w-full rounded-2xl object-cover lg:w-[20rem] lg:w-[20rem]"
                src={person.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-lg font-bold  leading-8 tracking-tight text-slate-700 lg:text-xl">
                {person.name}
              </h3>
              <p className="text-base leading-7 text-gray-500 lg:text-xl">
                {person.passion}
              </p>
              <p className="-mt-4 text-base font-bold leading-7 text-gray-500 lg:text-xl xl:-mt-3">
                {person.role}
              </p>
              <p className="-mt-4 text-sm leading-6 text-gray-600 lg:text-xl xl:-mt-4">
                {person.location}
              </p>
            </li>
          ))}
        </ul>{' '}
        <Address text="text-lg lg:text-2xl" />
      </div>
    </div>
  )
}

const timeline = [
  {
    name: 'Founded company',
    description:
      'Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.',
    date: 'Aug 2021',
    dateTime: '2021-08',
  },
  {
    name: 'Secured $65m in funding',
    description:
      'Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil.',
    date: 'Dec 2021',
    dateTime: '2021-12',
  },
  {
    name: 'Released beta',
    description:
      'Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.',
    date: 'Feb 2022',
    dateTime: '2022-02',
  },
  {
    name: 'Global launch of product',
    description:
      'Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.',
    date: 'Dec 2022',
    dateTime: '2022-12',
  },
]
const jobOpenings = [
  {
    id: 1,
    role: 'Benefits of plants',
    href: '#',
    description:
      'There have been numerous experiments and studies conducted and the results have been rosy. Forest bathing provides a defense against the pangs of anxiety, etc..',
    source: 'Source',
    location: 'San Francisco University of Biology',
  },
  {
    id: 2,
    role: 'How herbs hightens senses.',
    href: '#',
    description:
      'Penetrate to the dermal layer of skin where new cells are developing, to help stimulate and regenerate healthy skin cells quickly following sudden damage burns, wrinkles',
    source: 'Source',
    location: 'Boston University of Herbitology',
  },
  {
    id: 3,
    role: 'Remain local and fair trading.',
    href: '#',
    description:
      'Besides theseveral positive consequences that derive from promoting local trade. The herbal Remedy owners belive that the main advantages.. ',
    source: 'Statment',
    location: 'The Herbal Remedy Team.',
  },
]

const team = [
  {
    name: 'Aby Rainfield',
    role: 'Co-Founder / CEO',
    imageUrl: team1.src,
    location: 'Harlem Born , NY',
    passion: 'Educator, Businessman & Crypto-entusiast',
  },
  {
    name: 'Ryan Magner',
    role: 'Co-Founder / CFO',
    imageUrl: team2.src,
    location: 'Harlem , NY',
    passion: 'Real Estate &  Emerging technology investor',
  },
  {
    name: 'Jhonson Mccafee ',
    role: 'Co-Founder / CMO',
    imageUrl: team3.src,
    location: 'Harlem , NY',
    passion: 'Chef / Artist &  Ex Navy SEAL ',
  },

  // More people...
]
