import { useRouter } from 'next/router'

import storeItem from '@/images/store/storItem.png'

import storeItem1 from '@/images/store/storItem1.png'
import storeItem2 from '@/images/store/storItem2.webp'
import storeItem3 from '@/images/store/storItem3.webp'
import storeItem4 from '@/images/store/storItem4.webp'
import storeItem5 from '@/images/store/storItem5.webp'
import storeItem6 from '@/images/store/storItem6.webp'

import storeItem7 from '@/images/store/storItem7.webp'
import storeItem8 from '@/images/store/storItem8.webp'
import storeItem9 from '@/images/store/storItem9.jpeg'
import storeItem10 from '@/images/store/storItem10.webp'
import storeItem11 from '@/images/store/storItem11.jpeg'
// import teasBg from '@/images/herbal-remedies-shutterstock.jpeg'
import ediblesBG from '@/images/teasBgMain.png'
import Link from 'next/link'
import Image from 'next/image'
export const EdibleItems = ({ number }) => {
  const router = useRouter()

  return (
    <div className="">
      {router.pathname !== '/' && (
        <Image
          src={ediblesBG.src}
          alt="landing-hero-background"
          width="1658"
          height="1660"
          className="inset-0 -z-10  -mt-14 aspect-[418/252] h-[484px] h-[284px] w-full overflow-hidden object-cover object-center lg:-mt-24"
        />
      )}

      <div className="z-30 mx-auto max-w-7xl px-4  py-6  sm:px-6 sm:pb-32 sm:pt-24 lg:py-16 lg:px-8">
        <div className="max-w-xl">
          <h1 className="text-center text-3xl font-bold tracking-tight  text-teal-500 lg:text-5xl">
            Edibles
          </h1>
          {router.pathname == '/' && (
            <h2 class="font-medium text-gray-500 lg:text-2xl">
              Heerbal based edibles{' '}
            </h2>
          )}
          {router.pathname == '/herbs' && (
            <h2 class="font-medium text-gray-500">
              All herbal based edibles{' '}
              {router.pathname == '/' && (
                <Link
                  href="/herbs"
                  className="text-4xl text-slate-500  hover:text-slate-600"
                >
                  TEAS
                </Link>
              )}
            </h2>
          )}
        </div>

        <div className="space-y-16 pt-6  sm:mt-16 lg:mt-12 ">
          {/* <Image
          src={teasBg.src}
          alt="landing-hero-background"
          width="1658"
          height="1660"
          className="lg: absolute inset-0 -z-10  -mt-4 aspect-[418/252] h-[484px] h-[284px] w-full object-cover object-center "
        /> */}
          {/* {edibles.map((order) => (key={order.number} aria-labelledby={`${order.number}-heading`} */}
          <section>
            <div className="border-gray-20 -mb-6 mt-0 flow-root divide-y divide-gray-200 border-t md:grid md:grid-cols-2 ">
              {edibles.slice(0, number).map((product) => (
                <div key={product.id} className="py-6 sm:flex">
                  <div className="flex space-x-4 sm:min-w-0 sm:flex-1 sm:space-x-6 lg:space-x-8">
                    <img
                      src={product.item.imageSrc.src}
                      alt={product.item.imageAlt}
                      className="h-20 w-20 flex-none rounded-md border border-2 border-sky-100 object-cover object-center sm:h-48 sm:w-48 lg:h-64 lg:w-64"
                    />
                    <div className="min-w-0 flex-1 pt-1.5 sm:pt-0">
                      <h3 className="text-lg font-medium text-gray-900 md:text-xl">
                        <a href={product.item.href}>{product.item.name}</a>
                      </h3>
                      <p className="text-md truncate text-gray-500">
                        <span className="text-md  text-gray-500">
                          {product.item.color}
                        </span>

                        {/* <span>{product.item.size}</span> */}
                      </p>
                      <p className="mt-1 font-medium text-gray-900">
                        {product.item.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {router.pathname == '/' && (
              <div className="z-50 order-first mt-4   flex space-x-2  text-sm font-semibold lg:mt-6 lg:justify-center ">
                <nav
                  aria-label="Breadcrumbs"
                  className="z-50 order-first  mt-4 flex justify-center space-x-2 text-sm font-semibold lg:mt-24 "
                >
                  <Link
                    href="/herbs"
                    className="rounded-md bg-teal-500 py-2  px-4 text-xl text-sm font-medium text-white  md:block lg:text-4xl "
                  >
                    View more edibles
                    <span aria-hidden="true"> →</span>
                  </Link>
                </nav>
              </div>
            )}
          </section>
          {/* ))} */}
        </div>
      </div>
    </div>
  )
}

const edibles = [
  {
    number: '4376',
    status: 'Delivered on January 22, 2021',
    href: '#',
    invoiceHref: '#',
    item: {
      id: 1,
      name: 'Pina Coloda Muchkinz',
      href: '#',
      price: '$11.00',
      color: 'Brass',
      size: '3" x 3" x 3"',
      imageSrc: storeItem,
      imageAlt:
        'Brass puzzle in the shape of a jack with overlapping rounded posts.',

      // More item...
    },
  },
  {
    number: '4376',
    status: 'Delivered on January 22, 2021',
    href: '#',
    invoiceHref: '#',
    item: {
      id: 1,
      name: 'James Brown Funky Chai',
      href: '#',
      price: '$12.00',
      color: 'Brass',
      size: '3" x 3" x 3"',

      imageSrc: storeItem1,
      imageAlt:
        'Brass puzzle in the shape of a jack with overlapping rounded posts.',
    },
    // More item...
  },
  {
    number: '4376',
    status: 'Delivered on January 22, 2021',
    href: '#',
    invoiceHref: '#',
    item: {
      id: 1,
      name: 'yuletide toddy',
      href: '#',
      price: '$12.00',
      color: 'Brass',
      size: '3" x 3" x 3"',
      imageSrc: storeItem2,
      imageAlt:
        'Brass puzzle in the shape of a jack with overlapping rounded posts.',
    },
    // More item...
  },
  {
    number: '4376',
    status: 'Delivered on January 22, 2021',
    href: '#',
    invoiceHref: '#',
    item: {
      id: 1,
      name: 'Yuletide toddy',
      href: '#',
      price: '$12.00',
      color: 'Brass',
      size: '3" x 3" x 3"',
      imageSrc: storeItem3,
      imageAlt:
        'Brass puzzle in the shape of a jack with overlapping rounded posts.',
    },
    // More item...
  },
  {
    number: '4376',
    status: 'Delivered on January 22, 2021',
    href: '#',
    invoiceHref: '#',
    item: {
      id: 1,
      name: 'Sour Apple',
      href: '#',
      price: '$12.00',
      color: 'Brass',
      size: '3" x 3" x 3"',
      imageSrc: storeItem4,
      imageAlt:
        'Brass puzzle in the shape of a jack with overlapping rounded posts.',
    },
    // More item...
  },
  {
    number: '4376',
    status: 'Delivered on January 22, 2021',
    href: '#',
    invoiceHref: '#',
    item: {
      id: 1,
      name: 'ChiroChico Realm',
      href: '#',
      price: '$17.00',
      color: 'Brass',
      size: '3" x 3" x 3"',
      imageSrc: storeItem5,
      imageAlt:
        'Brass puzzle in the shape of a jack with overlapping rounded posts.',
    },
    // More products...
  },
  {
    number: '4376',
    status: 'Delivered on January 22, 2021',
    href: '#',
    invoiceHref: '#',
    item: {
      id: 1,
      name: 'Hit me again',
      href: '#',
      price: '$17.00',
      color: 'Brass',
      size: '3" x 3" x 3"',
      imageSrc: storeItem6,
      imageAlt:
        'Brass puzzle in the shape of a jack with overlapping rounded posts.',
    },
    // More products...
  },
  {
    number: '4376',
    status: 'Delivered on January 22, 2021',
    href: '#',
    invoiceHref: '#',
    item: {
      id: 1,
      name: 'Dewy Chewy',
      href: '#',
      price: '$17.00',
      color: 'Brass',
      size: '3" x 3" x 3"',
      imageSrc: storeItem7,
      imageAlt:
        'Brass puzzle in the shape of a jack with overlapping rounded posts.',
    },
    // More products...
  },
  {
    number: '4376',
    status: 'Delivered on January 22, 2021',
    href: '#',
    invoiceHref: '#',
    item: {
      id: 1,
      name: 'Lemon Grass paper',
      href: '#',
      price: '$17.00',
      color: 'Brass',
      size: '3" x 3" x 3"',
      imageSrc: storeItem8,
      imageAlt:
        'Brass puzzle in the shape of a jack with overlapping rounded posts.',
    },
    // More products...
  },
  {
    number: '4376',
    status: 'Delivered on January 22, 2021',
    href: '#',
    invoiceHref: '#',
    item: {
      id: 1,
      name: 'Berry Blues ',
      href: '#',
      price: '$17.00',
      color: 'Brass',
      size: '3" x 3" x 3"',
      imageSrc: storeItem9,
      imageAlt:
        'Brass puzzle in the shape of a jack with overlapping rounded posts.',
    },
    // More products...
  },
  {
    number: '4376',
    status: 'Delivered on January 22, 2021',
    href: '#',
    invoiceHref: '#',
    item: {
      id: 1,
      name: 'red Macaroons Divine',
      href: '#',
      price: '$17.00',
      color: 'Brass',
      size: '3" x 3" x 3"',
      imageSrc: storeItem10,
      imageAlt:
        'Brass puzzle in the shape of a jack with overlapping rounded posts.',
    },
    // More products...
  },
  {
    number: '4376',
    status: 'Delivered on January 22, 2021',
    href: '#',
    invoiceHref: '#',
    item: {
      id: 1,
      name: 'Cha Cha Cha',
      href: '#',
      price: '$17.00',
      color: 'Brass',
      size: '3" x 3" x 3"',
      imageSrc: storeItem11,
      imageAlt:
        'Brass puzzle in the shape of a jack with overlapping rounded posts.',
    },
    // More products...
  },
  // More edibles...
]

export default EdibleItems
