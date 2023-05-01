import { useMemo } from 'react'
import Head from 'next/head'

// import { GoBackArrow } from '@/components/Goback'

export default function DietSpecificPage({ diets }) {
  console.log('Art in ART CLIENT', diets)
  return (
    <>
      <Head>
        <title>EventSpace</title>
        {/* <meta name="description" content={page.description} /> */}
      </Head>
      <article
        id="evenets-page"
        className="lg:border-t-0-16   border-slate-500 md:py-0 "
      ></article>
    </>
  )
}

// export async function getStaticProps({ params }) {
//   console.log()
//   let item = await getById(params.gender)

//   return {
//     props: {
//       art: await getById(params.id),
//     },
//     revalidate: 10,
//   }
// }

// export async function getStaticPaths() {
//   let items = await getAll("TEAS")

//   return {
//     paths: items.map(({ id }) => ({
//       params: {
//         gender: id.toString(),
//       },
//     })),
//     fallback: 'blocking',
//   }
// }
