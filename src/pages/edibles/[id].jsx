import { useMemo } from 'react'
import Head from 'next/head'

export default function fitness({ art }) {
  console.log('Art in ART CLIENT', art)
  return (
    <>
      <Head>
        <title> The Herbal</title>
        <meta name="The herbal remedy Harlem" />
      </Head>
      <article
        id="project-page"
        className="lg:border-t-0-16   border-slate-500 md:py-0 "
      >
        {/* <GoBackArrow /> */}

        {/* <ProjectLayout project={art} /> */}
      </article>
    </>
  )
}

// export async function getStaticProps({ params }) {
//   console.log('PARAMS-IN-[ART]', params.artId)

//   let item = await getArt(params.artId)

//   return {
//     props: {
//       art: await getArt(params.artId),
//     },
//     revalidate: 10,
//   }
// }

// export async function getStaticPaths() {
//   let items = await getAllArts()

//   return {
//     paths: items.map(({ id }) => ({
//       params: {
//         artId: id.toString(),
//       },
//     })),
//     fallback: 'blocking',
//   }
// }
