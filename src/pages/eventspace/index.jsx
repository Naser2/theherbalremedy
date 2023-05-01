import Head from 'next/head'

import mainSpaceImage from '@/images/1e97ce93-9be6-4f4a-b6c9-2f0e84959243.JPG'
import { EventsSpace } from '@/components/OurSpace'
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

export default function EventSpace() {
  return (
    <>
      <Head>
        <title>H</title>
        <meta
          name="description"
          content="These are diets crafted by Herbal Remedy Teashop"
        />
      </Head>
      <div className="landing-hero-background lg:h-screen/2">
        <img
          className="-z-10 -mt-24 aspect-[818/452] h-[454px] w-full object-cover object-center md:h-full"
          src={mainSpaceImage.src}
          width={1900}
          height={1500}
          alt=""
        />
      </div>
      <EventsSpace />
    </>
  )
}
