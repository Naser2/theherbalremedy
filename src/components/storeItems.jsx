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

// HERBAL

import herbalItem from '@/images/store/herb1.png'

import herbalItem1 from '@/images/store/herb1.webp'
import herbalItem2 from '@/images/store/herb2.webp'
import herbalItem3 from '@/images/store/herb3.webp'
import herbalItem4 from '@/images/store/herb4.webp'
// import herbalItem5 from '@/images/store/herb5.webp'
import herbalItem6 from '@/images/store/herb6.webp'

import herbalItem7 from '@/images/store/herb7.webp'
import herbalItem8 from '@/images/store/herb8.webp'
import herbalItem9 from '@/images/store/herb9.webp'
import herbalItem10 from '@/images/store/herb10.webp'
import herbalItem11 from '@/images/store/herb11.webp'
import Link from 'next/link'
const edibles = [
  {
    number: '4376',
    status: 'Delivered on January 22, 2021',
    href: '#',
    invoiceHref: '#',
    item: {
      id: 1,
      name: 'Machined Brass Puzzle',
      href: '#',
      price: '$95.00',
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
      name: 'Machined Brass Puzzle',
      href: '#',
      price: '$95.00',
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
      name: 'Machined Brass Puzzle',
      href: '#',
      price: '$95.00',
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
      name: 'Machined Brass Puzzle',
      href: '#',
      price: '$95.00',
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
      name: 'Machined Brass Puzzle',
      href: '#',
      price: '$95.00',
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
      name: 'Machined Brass Puzzle',
      href: '#',
      price: '$95.00',
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
      name: 'Machined Brass Puzzle',
      href: '#',
      price: '$95.00',
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
      name: 'Machined Brass Puzzle',
      href: '#',
      price: '$95.00',
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
      name: 'Machined Brass Puzzle',
      href: '#',
      price: '$95.00',
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
      name: 'Machined Brass Puzzle',
      href: '#',
      price: '$95.00',
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
      name: 'Machined Brass Puzzle',
      href: '#',
      price: '$95.00',
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
      name: 'Machined Brass Puzzle',
      href: '#',
      price: '$95.00',
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

export const EdibleItems = ({ number }) => {
  const router = useRouter()

  return (
    <div className="z-30 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:pb-32 sm:pt-24 lg:px-8">
      <div className="max-w-xl">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Our Infused Menu
        </h1>
        {router.pathname == '/herbs' && (
          <h2 class="font-medium text-gray-500">All herbal based edibles</h2>
        )}
        {router.pathname == '/' && (
          <div className="flex inline-flex ">
            <p className="mt-2 flex shrink-0 text-lg text-gray-500 lg:text-xl">
              Edible items.
            </p>{' '}
            <Link
              href="/edibles"
              className=" opacity-1 z-30 mt-1 flex max-h-[34px] w-full  items-center justify-center rounded-xl px-2.5 py-2 text-xl text-sm font-medium  text-teal-600 shadow-sm hover:bg-teal-600 hover:text-teal-100 focus:underline  focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-full sm:flex-grow-0 lg:max-h-[44px]"
            >
              View all
            </Link>
          </div>
        )}
      </div>

      <div className="mt-12 space-y-16 sm:mt-16 ">
        {/* {edibles.map((order) => (key={order.number} aria-labelledby={`${order.number}-heading`} */}
        <section>
          {/* <div className="space-y-1 md:flex md:items-baseline md:space-x-4 md:space-y-0">
              <h2
                id={`${order.number}-heading`}
                className="text-lg font-medium text-gray-900 md:flex-shrink-0"
              >
                Order #{order.number}
              </h2>
              <div className="space-y-5 sm:flex sm:items-baseline sm:justify-between sm:space-y-0 md:min-w-0 md:flex-1">
                <p className="text-sm font-medium text-gray-500">
                  {order.status}
                </p>
                <div className="flex text-sm font-medium">
                  <a
                    href={order.href}
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    Manage order
                  </a>
                  <div className="ml-4 border-l border-gray-200 pl-4 sm:ml-6 sm:pl-6">
                    <a
                      href={order.invoiceHref}
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      View Invoice
                    </a>
                  </div>
                </div>
              </div>
            </div> */}

          <div className="border-gray-20 -mb-6 mt-6 flow-root divide-y divide-gray-200 border-t md:grid md:grid-cols-2 ">
            {edibles.slice(0, number).map((product) => (
              <div key={product.id} className="py-6 sm:flex">
                <div className="flex space-x-4 sm:min-w-0 sm:flex-1 sm:space-x-6 lg:space-x-8">
                  <img
                    src={product.item.imageSrc.src}
                    alt={product.item.imageAlt}
                    className="h-20 w-20 flex-none rounded-md border border-2 border-sky-500 object-cover object-center sm:h-48 sm:w-48"
                  />
                  <div className="min-w-0 flex-1 pt-1.5 sm:pt-0">
                    <h3 className="text-lg font-medium text-gray-900 md:text-xl">
                      <a href={product.item.href}>{product.item.name}</a>
                    </h3>
                    <p className="text-md truncate text-gray-500">
                      <span>{product.color}</span>{' '}
                      <span className="mx-1 text-gray-400" aria-hidden="true">
                        &middot;
                      </span>{' '}
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
        </section>
        {/* ))} */}
      </div>
    </div>
  )
}

export const HearbItems = ({ number }) => {
  const router = useRouter()
  return (
    <div className="z-30 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:pb-32 sm:pt-24 lg:px-8">
      <div className="max-w-xl">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Herb Menu
        </h1>
        {router.pathname == '/herbs' && (
          <h2 class="font-medium text-gray-500">All our teas</h2>
        )}
        {router.pathname == '/' && (
          <div className="flex inline-flex ">
            <p className="mt-2 flex shrink-0 text-lg text-gray-500 lg:text-xl">
              Discover our herbal products. |{' '}
            </p>{' '}
            <Link
              href="/herbs"
              className="opacity-1 z-30  mt-1 flex max-h-[34px] w-full  items-center justify-center rounded-full px-2.5 py-2 text-xl text-sm font-medium  text-teal-600 shadow-sm hover:bg-teal-600 hover:text-teal-100 focus:underline  focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-full sm:flex-grow-0 lg:max-h-[44px]"
            >
              View all
            </Link>
          </div>
        )}
      </div>

      <div className="mt-12 space-y-16 sm:mt-16 ">
        <section>
          <div className="border-gray-20 -mb-6 mt-6 flow-root divide-y divide-gray-200 border-t md:grid md:grid-cols-2 ">
            {herbals.slice(0, number).map((product) => (
              <div key={product.id} className="py-6 sm:flex">
                <div className="flex space-x-4 sm:min-w-0 sm:flex-1 sm:space-x-6 lg:space-x-8">
                  <img
                    src={product.item.imageSrc.src}
                    alt={product.item.imageAlt}
                    className="h-20 w-20 flex-none rounded-md object-cover object-center sm:h-48 sm:w-48"
                  />
                  <div className="min-w-0 flex-1 pt-1.5 sm:pt-0">
                    <h3 className="text-sm font-medium text-gray-900">
                      <a href={product.href}>{product.item.name}</a>
                    </h3>
                    <p className="truncate text-sm text-gray-500">
                      <span>{product.color}</span>{' '}
                      <span className="mx-1 text-gray-400" aria-hidden="true">
                        &middot;
                      </span>{' '}
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
        </section>
      </div>
    </div>
  )
}

const herbals = [
  {
    number: '4376',
    status: 'Delivered on January 22, 2021',
    href: '#',
    invoiceHref: '#',
    item: {
      id: 1,
      name: 'Machined Brass Puzzle',
      href: '#',
      price: '$15.00',
      color: 'Brass',
      size: '3" x 3" x 3"',
      imageSrc: herbalItem11,
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
      name: 'Machined Brass Puzzle',
      href: '#',
      price: '$95.00',
      color: 'Brass',
      size: '3" x 3" x 3"',
      imageSrc: herbalItem,
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
      name: 'Machined Brass Puzzle',
      href: '#',
      price: '$95.00',
      color: 'Brass',
      size: '3" x 3" x 3"',

      imageSrc: herbalItem1,
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
      name: 'Machined Brass Puzzle',
      href: '#',
      price: '$95.00',
      color: 'Brass',
      size: '3" x 3" x 3"',
      imageSrc: herbalItem2,
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
      name: 'Machined Brass Puzzle',
      href: '#',
      price: '$95.00',
      color: 'Brass',
      size: '3" x 3" x 3"',
      imageSrc: herbalItem3,
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
      name: 'Machined Brass Puzzle',
      href: '#',
      price: '$95.00',
      color: 'Brass',
      size: '3" x 3" x 3"',
      imageSrc: herbalItem4,
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
      name: 'Machined Brass Puzzle',
      href: '#',
      price: '$95.00',
      color: 'Brass',
      size: '3" x 3" x 3"',
      imageSrc: herbalItem6,
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
      name: 'Machined Brass Puzzle',
      href: '#',
      price: '$95.00',
      color: 'Brass',
      size: '3" x 3" x 3"',
      imageSrc: herbalItem7,
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
      name: 'Machined Brass Puzzle',
      href: '#',
      price: '$95.00',
      color: 'Brass',
      size: '3" x 3" x 3"',
      imageSrc: herbalItem8,
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
      name: 'Machined Brass Puzzle',
      href: '#',
      price: '$95.00',
      color: 'Brass',
      size: '3" x 3" x 3"',
      imageSrc: herbalItem9,
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
      name: 'Machined Brass Puzzle',
      href: '#',
      price: '$95.00',
      color: 'Brass',
      size: '3" x 3" x 3"',
      imageSrc: herbalItem10,
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
      name: 'Machined Brass Puzzle',
      href: '#',
      price: '$95.00',
      color: 'Brass',
      size: '3" x 3" x 3"',
      imageSrc: herbalItem11,
      imageAlt:
        'Brass puzzle in the shape of a jack with overlapping rounded posts.',
    },
    // More products...
  },
  //   {
  //     number: '4376',
  //     status: 'Delivered on January 22, 2021',
  //     href: '#',
  //     invoiceHref: '#',
  //     item: {
  //       id: 1,
  //       name: 'Machined Brass Puzzle',
  //       href: '#',
  //       price: '$95.00',
  //       color: 'Brass',
  //       size: '3" x 3" x 3"',
  //       imageSrc: herbalItem12,
  //       imageAlt:
  //         'Brass puzzle in the shape of a jack with overlapping rounded posts.',
  //     },
  //     // More products...
  //   },
  // More edibles...
]
