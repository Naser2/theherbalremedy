import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
// import backgroundGif from '@/images/vllo-3.gif'
// import nas_singing_portrait from '@/images/nas_singing_portrait.jpeg'
// import SocialMediaHandle, { Galery } from '@/components/Gallery'
import { useRef } from 'react'
import { FeaturedContent } from './FeaturedContent'
import { ReturnLatest } from '@/lib/ReturneLatest'
import Link from 'next/link'
import theHerbalImage from '@/images/theherbalRemedyNavigation-footer.JPG'
import Image from 'next/image'
import { Address, Signature } from './Signature'
// import { XMarkIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import { Logo } from './Logo'

import {
  Bars3Icon,
  CalendarIcon,
  CogIcon,
  HomeIcon,
  MagnifyingGlassCircleIcon,
  MapIcon,
  MegaphoneIcon,
  SquaresPlusIcon,
  UserGroupIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
// import  ChevronLeftIcon,
// EnvelopeIcon,
// FunnelIcon,
// MagnifyingGlassIcon,
// PhoneIcon,
// ('@heroicons/react/20/solid')
// import founderPoster1 from '@/images/founderPoster1.jpg'

const user = {
  name: 'Nasser Sanou',
  imageUrl: 'nas_singing_portrait.src',
}
const navigation = [
  { name: 'Home', href: '/', icon: 'HomeIcon', current: false },
  { name: 'Teas', href: '/herbs', icon: 'HomeIcon', current: false },
  { name: 'Edibles', href: '/edibles', icon: 'CalendarIcon', current: false },

  {
    name: 'Events',
    href: '/events',
    icon: 'MegaphoneIcon',
    current: false,
  },
  { name: 'Space', href: '/eventspace', icon: 'MapIcon', current: false },
]
const secondaryNavigation = [
  { name: 'About ', href: '/about', icon: 'SquaresPlusIcon' },
  { name: 'Contact', href: '/contact', icon: 'CogIcon' },
]

const profile = {
  name: 'Nasser Sanou',
  //   imageUrl: nas_singing_portrait.src,
  coverImageUrl: 'backgroundGif',
  about: '',
  fields: {
    Phone: '(555) 123-4567',
    Email: 'x@example.com',
    Title: 'Senior Front-End Developer',
    Team: 'Product Development',
    Location: 'San Francisco',
    Sits: 'Oasis, 4th floor',
    Salary: '$145,000',
    Birthday: 'June 8, 1990',
  },
}
const directory = {
  A: [
    {
      id: 1,
      name: 'Leslie Abbott',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 2,
      name: 'Hector Adams',
      role: 'VP, Marketing',
      imageUrl:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 3,
      name: 'Blake Alexander',
      role: 'Account Coordinator',
      imageUrl:
        'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 4,
      name: 'Fabricio Andrews',
      role: 'Senior Art Director',
      imageUrl:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
  B: [
    {
      id: 5,
      name: 'Angela Beaver',
      role: 'Chief Strategy Officer',
      imageUrl:
        'https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 6,
      name: 'Yvette Blanchard',
      role: 'Studio Artist',
      imageUrl:
        'https://images.unsplash.com/photo-1506980595904-70325b7fdd90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 7,
      name: 'Lawrence Brooks',
      role: 'Content Specialist',
      imageUrl:
        'https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
  C: [
    {
      id: 8,
      name: 'Jeffrey Clark',
      role: 'Senior Art Director',
      imageUrl:
        'https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 9,
      name: 'Kathryn Cooper',
      role: 'Associate Creative Director',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
  E: [
    {
      id: 10,
      name: 'Alicia Edwards',
      role: 'Junior Copywriter',
      imageUrl:
        'https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 11,
      name: 'Benjamin Emerson',
      role: 'Director, Print Operations',
      imageUrl:
        'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 12,
      name: 'Jillian Erics',
      role: 'Designer',
      imageUrl:
        'https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 13,
      name: 'Chelsea Evans',
      role: 'Human Resources Manager',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
  G: [
    {
      id: 14,
      name: 'Michael Gillard',
      role: 'Co-Founder / CTO',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 15,
      name: 'Dries Giuessepe',
      role: 'Manager, Business Relations',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
  M: [
    {
      id: 16,
      name: 'Jenny Harrison',
      role: 'Studio Artist',
      imageUrl:
        'https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 17,
      name: 'Lindsay Hatley',
      role: 'Front-end Developer',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 18,
      name: 'Anna Hill',
      role: 'Partner, Creative',
      imageUrl:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
  S: [
    {
      id: 19,
      name: 'Courtney Samuels',
      role: 'Designer',
      imageUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 20,
      name: 'Tom Simpson',
      role: 'Director, Product Development',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
  T: [
    {
      id: 21,
      name: 'Floyd Thompson',
      role: 'Principal Designer',
      imageUrl:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 22,
      name: 'Leonard Timmons',
      role: 'Senior Designer',
      imageUrl:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 23,
      name: 'Whitney Trudeau',
      role: 'Copywriter',
      imageUrl:
        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
  W: [
    {
      id: 24,
      name: 'Kristin Watson',
      role: 'VP, Human Resources',
      imageUrl:
        'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 25,
      name: 'Emily Wilson',
      role: 'VP, User Experience',
      imageUrl:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
  Y: [
    {
      id: 26,
      name: 'Emma Young',
      role: 'Senior Front-end Developer',
      imageUrl:
        'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
}
const team = [
  {
    name: 'Leslie Alexander',
    handle: 'lesliealexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Michael Foster',
    handle: 'michaelfoster',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Dries Vincent',
    handle: 'driesvincent',
    role: 'Business Relations',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Lindsay Walton',
    handle: 'lindsaywalton',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
let tabPannel = [
  { name: 'Home', href: '/', current: true },
  { name: 'Edibles', href: '/edibles', current: false },
  { name: 'Teas', href: '/herbs', current: false },
  { name: 'Scheduled ', href: '/events', current: false },
  { name: 'Events Spaces ', href: '/eventspace', current: false },
  { name: 'About ', href: '/about', current: false },
  { name: 'Contact ', href: '/contact', current: false },
]
export default function Navigation({ pageContent, featured }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [tabs, setTabs] = useState(tabPannel)
  //   const [currentTab, setCurrentTab] = useState('Home')
  const sectAboutRef = useRef(null)
  const sectAboutMeRef = useRef(null)
  const podcastsRef = useRef(null)
  const sectProjectRef = useRef(null)
  const blogsRef = useRef(null)
  const learnCode = useRef(null)
  const contactRef = useRef(null)
  const podcastRef = useRef(null)
  const socialsRef = useRef(null)
  const githubRef = useRef(null)

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full overflow-hidden">
        ```
      */}
      <header className="relative z-50 z-50 mx-4 mt-0 mt-[14px]  flex transform flex-col bg-transparent pt-0 pb-0 max-[100px]:px-12 min-[1400px]:mx-36">
        <div
          id="nav-grid"
          className="relative grid grid-cols-[1fr,auto] items-center bg-transparent"
        >
          <div id="logo" className="flex min-w-0">
            <Logo />
          </div>
          <div className="top-0 z-50 z-50 ml-6 flex flex transform  flex-col items-center bg-transparent pt-0 pb-0 ">
            <Transition.Root show={sidebarOpen} as={Fragment}>
              <Dialog
                as="div"
                className="relative z-40 "
                onClose={setSidebarOpen}
              >
                <Transition.Child
                  as={Fragment}
                  enter="transition-opacity ease-linear duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity ease-linear duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                </Transition.Child>

                <div className="fixed inset-0 z-40 flex">
                  <Transition.Child
                    as={Fragment}
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                  >
                    <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white focus:outline-none min-[1000px]:max-w-lg">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <div className="absolute top-0 right-0">
                          <button
                            type="button"
                            className="z-50   flex h-10 w-10 items-center justify-center rounded-full bg-teal-400 text-black shadow-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-400  "
                            onClick={() => setSidebarOpen(false)}
                          >
                            <span className="sr-only">Close sidebar</span>
                            <XMarkIcon
                              className="h-6 w-6 text-white"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </Transition.Child>
                      <div className="h-0 flex-1 overflow-y-auto pt-0 pb-4">
                        <div className="flex flex-shrink-0 items-center bg-teal-400 px-4 py-2">
                          <span className="sm:text-lg">Menu</span>
                        </div>
                        <nav aria-label="Sidebar" className="mt-1">
                          <div className="space-y-1 px-2">
                            {navigation.map((item) => (
                              <Link
                                onClick={() => setSidebarOpen(false)}
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                  item.current
                                    ? 'text-gray-900 lg:bg-gray-100'
                                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900',
                                  'group flex items-center rounded-md px-2 py-2 text-base font-medium sm:py-4 sm:text-xl '
                                )}
                                aria-current={item.current ? 'page' : undefined}
                              >
                                <item.icon
                                  className={classNames(
                                    item.current
                                      ? 'text-gray-500'
                                      : 'text-gray-400 group-hover:text-gray-500',
                                    'mr-4 h-6 w-6'
                                  )}
                                  aria-hidden="true"
                                />
                                {item.name}
                              </Link>
                            ))}
                          </div>
                          <hr
                            className="my-5 border-t border-gray-200"
                            aria-hidden="true"
                          />
                          <div className="-mt-3 space-y-1 bg-teal-100 px-2">
                            {secondaryNavigation.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="group flex items-center rounded-md px-2 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 sm:text-xl"
                              >
                                <item.icon
                                  className="mr-4 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500 sm:text-xl"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </nav>
                      </div>
                      <div className="nav-footer lg:-pt-[20rem] px-6 ">
                        <Signature />
                        <div className="flex flex-shrink-0  border-gray-200 p-4">
                          <div className="flex-block flex items-center">
                            <div>
                              <Image
                                src={theHerbalImage.src}
                                className="relative h-full w-full "
                                alt="theherbalRemedy image"
                                width={200}
                                height={150}
                              />
                            </div>
                          </div>{' '}
                        </div>{' '}
                        <Address />
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                  <div className="w-14 flex-shrink-0" aria-hidden="true">
                    {/* Force sidebar to shrink to fit close icon */}
                  </div>
                </div>
              </Dialog>
            </Transition.Root>
            {/* Static sidebar for desktop */}
            <DesktopNavigation tabs={tabs} />
            <div className="flex min-w-0 flex-1 flex-col overflow-hidden bg-teal-400">
              {!sidebarOpen && (
                <div className="min-[1300px]:hidden">
                  <div className="flex items-center justify-between border-b border-yellow-300 bg-transparent px-4 py-1.5">
                    <div></div>
                    <div>
                      <button
                        type="button"
                        className=" inline-flex h-4 w-4  items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-600"
                        onClick={() => setSidebarOpen(true)}
                      >
                        <span className="sr-only">Open sidebar</span>
                        <svg
                          viewBox="0 0 10 9"
                          fill="none"
                          stroke-linecap="round"
                          aria-hidden="true"
                          class="w-.5 stroke-zinc-900 dark:stroke-slate-900"
                        >
                          <path d="M.5 1h9M.5 8h9M.5 4.5h9"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

const DesktopNavigation = () => {
  const [tabs, setTabs] = useState(tabPannel)
  const [currentTab, setCurrent] = useState('Home')
  function setCurrentTab(tabName) {
    console.log('TAB NAME', tabName)
    const tabsState = [...tabs].map((tab) => {
      tab.current = false
      if (tab.name == tabName) {
        tab.current = true
        setCurrent(tabName)
        console.log('TabNAMe', tabName)
        // let completedtask = tasks[task.id].taskCompleted === true
        // setCompletedTasks([...completedTasks], completedtask)
      }

      return tab
    })

    console.log('updatedTasks', tabsState)
    setTabs(tabsState)
  }
  let router = useRouter()
  return (
    <div className="relative z-50 ml-[2rem] flex overflow-hidden rounded-xl bg-teal-600/50  max-[1300px]:hidden">
      <div className="relative flex-1  focus:outline-none xl:order-last">
        {/* Tabs */}
        <div className="mt-0">
          <div className="">
            <div className="mx-auto max-w-5xl  px-0 sm:px-6 lg:px-0 ">
              <nav className="-mb-px flex space-x-2 " aria-label="Tabs">
                {tabs.map((tab) => (
                  <Link
                    onClick={() => setCurrentTab(tab.name)}
                    key={tab.name}
                    href={tab.href}
                    className={classNames(
                      tab.current
                        ? 'border-b-4 border-t-4 border-b-yellow-400 border-t-yellow-400  bg-teal-200  text-3xl text-teal-600  text-gray-900 '
                        : 'border-transparent text-white  hover:border-gray-300 hover:text-gray-700',
                      'whitespace-nowrap border-b-2 py-4  px-4 px-6  text-2xl text-sm font-medium  text-white hover:text-teal-600 '
                    )}
                    aria-current={tab.current ? 'page' : undefined}
                  >
                    {tab.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// a.articles
// featuredImageUrl
// featuredImageUrl
