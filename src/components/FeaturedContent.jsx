export const FeaturedContent = ({ featured }) => {
  console.log('FEATURED CONTENT is', featured)
  return (
    <>
      <div key={featured.title} class="flex-block relative  font-sans">
        <div
          class="flex-block overflow-hidden rounded-lg bg-white shadow-lg transition-[filter] duration-500"
          // style="opacity:1;transform:none"
        >
          <img
            src={featured.featuredImageUrl ?? featured.imageUrl}
            // src="https://tailwindcss.com/_next/static/media/5.e8ff4aa4.jpg"
            alt=""
            class=" aspect-[900/500] h-full w-full object-cover md:min-w-[700px]"
            decoding="async"
            loading="lazy"
          />
        </div>

        <form class="p-6 md:flex-auto">
          {' '}
          {/* <div class="w-68 relative mb-4 flex-none  md:hidden lg:w-[20rem]">
            <img
              src={featured.featuredImageUrl}
              alt=""
              class="relative  inset-0 h-full w-full object-cover"
              loading="lazy"
            />{' '}
          </div> */}
          <div class=" mt-1 mb-2 flex items-baseline border-b border-slate-200 pb-0" />{' '}
          <h1 class="mt-0 flex-auto text-lg font-semibold text-slate-900">
            {featured.title}{' '}
            <span class="absolute right-[2%] top-[3%]  rounded-full bg-yellow-500 px-3 py-0.5 text-xs text-white ">
              <span class=" ">Featured</span>
            </span>
          </h1>
          {/* <p class="text-sm text-slate-700">{featured.description}</p> */}
        </form>
      </div>
    </>
  )
}
