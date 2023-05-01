const features = [
  {
    name: 'Sleek design',
    description:
      'The machined kettle has a smooth black finish and contemporary shape that stands apart from most plastic appliances.',
  },
  {
    name: 'Comfort zone',
    description:
      "Our space is comfortable and welcoming wheter you're passing by or want to chill.",
  },
  {
    name: 'Stay in control',
    description:
      'The quality of our sourcing is uncompromised. We go to the source and offer you simply the best herbal life of Harlem.',
  },
  {
    name: 'Signature long shot',
    description:
      "Designed specifically for controlled pour-overs that don't slash or sputter.",
  },
]

export default function Features() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 pt-8  pb-24 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-10 lg:grid-cols-2 lg:gap-y-16">
          <div>
            <div className="border-b border-gray-200 lg:pb-10">
              <h2 className="font-medium text-gray-500">Herbal infused teas</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Herbal life simplicity
              </p>
            </div>

            <dl className="mt-10 space-y-10 max-[600px]:hidden">
              {features.map((feature) => (
                <div key={feature.name}>
                  <dt className="text-sm text-lg font-medium text-gray-900 lg:text-xl ">
                    {feature.name}
                  </dt>
                  <dd className="text-md mt-3 text-gray-500 lg:text-lg">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
              <img
                src="https://tailwindui.com/img/ecommerce-images/product-feature-09-main-detail.jpg"
                alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system."
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8">
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-09-detail-01.jpg"
                  alt="Detail of temperature setting button on kettle bass with digital degree readout."
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-09-detail-02.jpg"
                  alt="Kettle spout pouring boiling water into coffee grounds in pour-over mug."
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
