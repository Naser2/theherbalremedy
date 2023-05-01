import Head from 'next/head'

import Link from 'next/link'
// import { GoBackArrow } from '@/components/Goback'
import { findFeatured } from '@/lib/findFeatured'
import HerbItems from '@/components/HerbItems'
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

export default function Herbs({}) {
  return (
    <>
      <Head>
        <title>Herbal Teas Remedy Teas Harlem</title>
        <meta
          name="Diets"
          content="These are diets crafted by Herbal Remedy Teashop"
        />
      </Head>
      {/* <GoBackArrow /> */}
      <HerbItems number={-1} />
    </>
  )
}

// export async function getStaticProps() {
//   let diets = (await getItems('Diets')).map(({ component, ...meta }) => meta)
//   let articles = diets[0].resources.map((r) => {
//     console.log('RRRRR', r.articles)
//     return r.articles
//   })
//   let c = articles[0].concat(articles[1])
//   let featured = await findFeatured(c)
//   return {
//     props: {
//       diets: diets,
//       featured: featured,
//     },
//   }
// }
