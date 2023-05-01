// HERBAL
import { useRouter } from 'next/router'
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
import teasBg from '@/images/herbal-remedies-shutterstock.jpeg'
import Link from 'next/link'
import Image from 'next/image'

const HerbItems = ({ number }) => {
  const router = useRouter()
  return (
    <div className="">
      {router.pathname !== '/' && (
        <Image
          src={teasBg.src}
          alt="landing-hero-background"
          width="1658"
          height="1660"
          className="inset-0 -z-10  -mt-14 aspect-[418/252] h-[484px] h-[284px] w-full overflow-hidden object-cover object-center lg:-mt-24"
        />
      )}
      <div className="z-30 mx-auto max-w-7xl px-4 pt-6   sm:px-6 sm:pb-32 sm:pt-24 lg:py-16 lg:px-8">
        <div className="flex justify-center rounded-md bg-white px-4 px-2 lg:py-4">
          <h1 className="text-center text-3xl font-bold tracking-tight  text-teal-500 lg:text-5xl">
            Teas
          </h1>
          {/* {router.pathname == '/herbs' && (
          <h2 class="mt-0.5 pl-2 text-xl  font-medium text-gray-500 lg:mt-4  lg:pl-6  lg:text-2xl">
            / Teas
          </h2>
        )} */}
        </div>

        <div className="space-y-16 pt-6 sm:mt-16 lg:mt-12 ">
          <section>
            <div className="border-gray-20 -mb-6 mt-0 flow-root divide-y divide-gray-200 border-t md:grid md:grid-cols-2 ">
              {herbals.slice(0, number).map((product) => (
                <div key={product.id} className="py-6 sm:flex">
                  <div className="flex space-x-4 sm:min-w-0 sm:flex-1 sm:space-x-6 lg:space-x-8">
                    <img
                      src={product.item.imageSrc.src}
                      alt={product.item.imageAlt}
                      className="h-20 w-20 flex-none rounded-md object-cover object-center sm:h-48 sm:w-48 "
                    />
                    <div className="min-w-0 flex-1 pt-1.5 sm:pt-0">
                      <h3 className="lg:  text-sm text-xl font-medium text-gray-900 lg:mt-5">
                        <a href={product.href}>{product.item.name}</a>
                      </h3>
                      <p className=" text-sm text-sm text-gray-500  lg:text-lg">
                        <span>{product.item.color}</span>{' '}
                        <span className="mx-1 text-gray-400" aria-hidden="true">
                          &middot;
                        </span>{' '}
                        {/* <span>{product.item.size}</span> */}
                      </p>
                      <p className=" -m-2 pl-2 text-sm font-medium  text-gray-900 lg:mt-3 lg:text-xl">
                        {product.item.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>{' '}
            {router.pathname == '/' && (
              <div className="z-50 order-first  mt-4  flex space-x-2  text-sm font-semibold lg:mt-6 lg:justify-center ">
                <nav
                  aria-label="Breadcrumbs"
                  className="z-50 order-first  mt-4 flex justify-center space-x-2 text-sm font-semibold lg:mt-24 "
                >
                  <Link
                    href="/herbs"
                    className="rounded-md bg-teal-500 py-2  px-4 text-xl text-sm font-medium  text-white  md:block lg:text-4xl "
                  >
                    View more teas
                    <span aria-hidden="true"> →</span>
                  </Link>
                </nav>
              </div>
            )}
          </section>
        </div>
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
      name: 'Yuletide toddy herbal',
      href: '#',
      price: '$12.00',
      color: '24¢ / cup',
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
      name: 'Aya Bonifire',
      href: '#',
      price: '$23.00',
      color: '20¢ / cup',
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
      name: 'Red Eye Toddy',
      href: '#',
      price: '$20.00',
      color: '23¢ / cup',
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
      name: 'Yo Lele Rules again',
      href: '#',
      price: '$16.00',
      color: '21¢ / cup',
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
      name: 'Sampler Life',
      href: '#',
      price: '$12.00',
      color: '25¢ / cup',
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
      name: 'Yeye Mafrika',
      href: '#',
      price: '$15.50',
      color: '26¢ / cup',
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
      name: 'Mango Mate',
      href: '#',
      price: '$15.00',
      color: '23¢ / cup',
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
      name: 'Citrus World',
      href: '#',
      price: '$17.00',
      color: '28¢ / cup',
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
      name: 'Arabicas Toast ',
      href: '#',
      price: '$14.00',
      color: '20¢ / cup',
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
      name: 'It takes two ',
      href: '#',
      price: '$17.00',
      color: '20¢ / cup',
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
      name: 'Pomegranate  Toast ',
      href: '#',
      price: '$17.00',
      color: '20¢ / cup',
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
      name: 'Yerba Grove',
      href: '#',
      price: '$18.00',
      color: '20¢ / cup',
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
      name: 'King Sinatra',
      href: '#',
      price: '$20.00',
      color: '15¢ / cup',
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
      name: 'King Sinatra Upgraded ',
      href: '#',
      price: '$10.00',
      color: '15¢ / cup',
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
  //       name: 'Yuletide Herbal',
  //       href: '#',
  //       price: '$11.00',
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

export default HerbItems
