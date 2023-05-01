import NoContent from '@/images/noContent.webp'

const Events = () => {
  return (
    <div class="mx-auto mt-24 max-w-2xl px-6  lg:mt-[20rem] lg:max-w-5xl  ">
      <header class="max-w-2xl">
        <h1 class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Events Page
        </h1>
        <h1 class="text-2xl font-bold tracking-tight text-zinc-600 dark:text-zinc-100 sm:text-5xl">
          Comme back again soon.
        </h1>
      </header>
      <div class="mt-16 sm:mt-20">
        <div id="nocontent-main-WRAPPER" class="periwinkle">
          <div class="nocontent-image grid grid-cols-1 sm:grid-cols-2">
            <div class="mx-2 mt-10 flex items-center py-2 sm:sr-only sm:mt-44">
              <h1 class="nocontent-code px-4 dark:text-slate-400  ">503</h1>
              <h2 class="nocontent-text-h1 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 sm:text-3xl">
                Page under development
              </h2>
            </div>
            <img
              alt="No Content"
              src={NoContent.src}
              width="500"
              height="400"
              decoding="async"
              data-nimg="1"
              loading="lazy"
            />
            <div>
              <div class="sr-only mt-10 flex items-center sm:not-sr-only sm:mt-44">
                <h1 class="nocontent-code mx-4 text-2xl lg:mx-24  ">503</h1>
                <h2 class="nocontent-text-h1 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 sm:text-3xl">
                  Events Page under development
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events
