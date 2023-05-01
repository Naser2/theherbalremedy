import EventSpace2 from '@/images/event-space-2.jpeg'
import EventSpace3 from '@/images/event-space-3.jpeg'

export default function OurSpace() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        {/* Details section */}
        <section aria-labelledby="details-heading">
          <div className="flex flex-col items-center text-center">
            <h2
              id="details-heading"
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Even Space and Space
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-600">
              Our patented padded snack sleeve construction protects your
              favorite treats from getting smooshed during all-day adventures,
              long shifts at work, and tough travel schedules.
              <div className="border-b border-gray-200 pb-10 text-center ">
                <h2 className="font-medium text-gray-500">
                  Email from for renting
                </h2>
                <p className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-7xl ">
                  Contsact
                </p>
              </div>
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
            <div>
              <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg"
                  alt="Drawstring top with elastic loop closure and textured interior padding."
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <p className="mt-8 text-base text-gray-500">
                The 20L model has enough space for 370 candy bars, 6 cylinders
                of chips, 1220 standard gumballs, or any combination of
                on-the-go treats that your heart desires. Yes, we did the math.
              </p>
            </div>
            <div>
              <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-02.jpg"
                  alt="Front zipper pouch with included key ring."
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <p className="mt-8 text-base text-gray-500">
                Up your snack organization game with multiple compartment
                options. The quick-access stash pouch is ready for even the most
                unexpected snack attacks and sharing needs.
              </p>
            </div>
          </div>
          <h2 className="font-medium text-gray-500">Email from for renting</h2>
        </section>
      </div>
    </div>
  )
}
const features = [
  {
    name: 'Contact',

    description: 'Call Aby or Ryan abetween 9-5pm at',
    number: '(678) 964-4655',
  },
  {
    name: 'Refillablity',
    description:
      'In order to ensure you get the spcae, contacts us at least 2 Weeks prior to the date of your event.',
  },
  {
    name: 'Catering',
    description:
      "The comfortable Herbal Remedy space also offers catering if you rent our space and includes a flat fees based on number of guesses. Also auto 'Herbal Signature Fruit Punch' refills throughout the venet.",
  },
  {
    name: 'Inhouse Food only',
    description:
      'You can bring your own drinks, however we have a policy to foster local food merchands thus only purchase or arange a food plan with our management',
  },
]

export const EventsSpace = () => {
  return (
    <div className="bg-white">
      <section aria-labelledby="features-heading" className="relative">
        <div class="max-w-container mx-auto flex w-full max-w-2xl flex-col px-4  py-6  text-center text-center text-3xl sm:px-6 md:mx-auto md:py-14 lg:max-w-4xl lg:px-8 lg:text-6xl ">
          <h1 class="mt-3   font-extrabold tracking-tight text-slate-900 ">
            Events Details
          </h1>
          <nav
            aria-label="Breadcrumbs"
            className="justtify-center  order-first mx-auto flex max-w-2xl  space-x-2 text-center text-center text-lg text-sm font-semibold text-slate-500 lg:max-w-4xl lg:text-2xl"
          >
            <h2
              class=" hover:text-slate-600"
              href="/components#product-ecommerce"
            >
              Performances
            </h2>
            <div aria-hidden="true" class="select-none text-teal-300">
              /
            </div>
            <h2
              class="hover:text-slate-600"
              href="/components#product-ecommerce-components"
            >
              Birthdays
            </h2>
            <div aria-hidden="true" class="select-none  text-teal-300 ">
              /
            </div>
            <h2
              class="hover:text-slate-600"
              href="/components#product-ecommerce-components"
            >
              Talks
            </h2>
            <div aria-hidden="true" class="select-none  text-teal-300 ">
              /
            </div>
            <h2
              class="hover:text-slate-600"
              href="/components#product-ecommerce-components"
            >
              Events
            </h2>
          </nav>
        </div>
        <div className="aspect-h-2 aspect-w-3 sm:aspect-w-5 lg:aspect-none overflow-hidden lg:absolute lg:h-full lg:w-1/2 lg:px-24 lg:pr-4 xl:pr-16">
          <div className="grid-clos-1 grid space-y-2 px-2 lg:mt-14 ">
            <img
              src={EventSpace2.src}
              alt="event-space-2.jpeg"
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
            <img
              src={EventSpace3.src}
              alt="event-space-2.jpeg"
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
        </div>

        <div className="mx-auto max-w-2xl px-4 pb-24 pt-1 sm:px-6 sm:pb-32 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-4">
          <div className="lg:col-start-2 lg:mt-14 ">
            <h2
              id="features-heading"
              className="text-lg font-medium text-teal-600 xl:text-xl"
            >
              How to rent or use our space
            </h2>
            <p className="mt-4 text-4xl font-bold tracking-tight text-gray-900 xl:text-5xl">
              Events | Space Details
            </p>
            <p className="mt-4 text-xl text-gray-500 xl:text-2xl">
              We&apos;re haveing multiple events at Herbal Remedy Location. If
              you&apos; interested in having a event plese contact up to see the
              availablity.
            </p>

            <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 text-sm sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.name}>
                  <dt className="text-xl font-semibold  text-teal-600 text-gray-900 xl:text-2xl">
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-lg font-medium  text-gray-500 xl:text-xl">
                    {feature.description}{' '}
                    {feature.number && (
                      <span className="mt-2 text-lg font-medium  text-blue-500 xl:text-xl">
                        {feature.number}
                      </span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <div
              id="contact"
              className="mt-12 bg-slate-100  px-4 py-6 md:text-center "
            >
              <p className="t mt-4 text-4xl font-bold tracking-tight ">
                Address
              </p>
              <p className="mt-4 text-xl text-gray-500 ">
                2154 2nd Ave, New York, NY 10029{' '}
                <dd className="mt-2 text-lg font-medium  text-blue-500 text-gray-500">
                  Phone: (678) 964-4655
                </dd>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
