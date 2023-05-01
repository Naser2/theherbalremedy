import Head from 'next/head'

import { EdibleItems } from '@/components/storeItems'
const people = [
  {
    name: 'Women',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Men',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  // More people...
]

export default function Art({ reiki, featured }) {
  const grid = 'grid-clols-1 grid md:grid-cols-2'
  const shadow =
    'md:shadow-zinc-400/5 md:backdrop-blur hover:shadow-zinc-200/5 max-h-24'
  console.log('DIETS COMPONENT -->', reiki)
  return (
    <>
      <Head>
        <title>Edibles Herbal Remediies Harlem</title>
        <meta
          name="description"
          content="These are diets crafted by Herbal Remedy Teashop"
        />
      </Head>
      {/* <Page pageContent={reiki} featured={featured} /> */}
      <div className="relative">
        <EdibleItems number={-1} />
      </div>
    </>
  )
}
const ToggleButtons = () => {
  return (
    <div id="cta" className="lg:grid-cols2 z-50 grid grid-cols-1">
      <div class="mt-6 flex justify-center space-x-6 text-sm sm:mt-10">
        <button
          type="button"
          class="dark:highlight-white/5 hidden h-12 w-72 items-center space-x-3 rounded-lg bg-white px-4 text-left text-slate-400 shadow-sm ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:bg-slate-800 dark:text-slate-300 dark:ring-0 dark:hover:bg-slate-700 sm:flex"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="flex-none text-slate-300 dark:text-slate-400"
            aria-hidden="true"
          >
            <path d="m19 19-3.5-3.5"></path>
            <circle cx="11" cy="11" r="6"></circle>
          </svg>
          <span class="flex-auto">Meditation..</span>
          <kbd class="font-sans font-semibold dark:text-slate-500">
            <abbr
              category="Command"
              class="text-slate-300 no-underline dark:text-slate-500"
            >
              ⌘
            </abbr>{' '}
            K
          </kbd>
        </button>
        <a
          class="dark:highlight-white/20 flex h-12 w-full items-center justify-center rounded-lg bg-slate-900 px-6 font-semibold text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:bg-sky-500 dark:hover:bg-sky-400 sm:w-auto"
          href="/docs/installation"
        >
          Search
        </a>
      </div>
    </div>
  )
}

// Strategy Development
// Analysis and Planning
// UI/UX Design
// App Development
// Application Testing
// Deployment
// Support and Performance Monitoring
