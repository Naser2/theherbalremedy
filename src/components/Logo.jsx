import Image from 'next/image'

import logo from '@/images/logo.JPG'
import Link from 'next/link'
export const Logo = () => {
  return (
    <Link href="/">
      <Image
        className="absolute top-0 left-4 z-50 h-10 w-10 rounded-full max-[1300px]:hidden max-[600px]:hidden  lg:h-[4rem] lg:w-[4rem] xl:top-[0%] xl:h-[6rem]  xl:w-[6rem] "
        src={logo.src}
        alt="the herbal remedy logo"
        width={40}
        height={40}
      />
    </Link>
  )
}
