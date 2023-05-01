import Link from 'next/link'

import { Container } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="text-xl transition hover:text-white dark:hover:text-teal-400 lg:text-2xl"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 min-h-[20rem] bg-teal-500 ">
      <Container.Outer>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-white">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/herbs">Teas</NavLink>
                <NavLink href="/edibles">Edibles</NavLink>
                <NavLink href="/eventspace">Space</NavLink>
              </div>
              <p className="text-lg text-zinc-100 lg:text-xl ">
                &copy; {new Date().getFullYear()} Herbal Remedy Teashop. All
                rights reserved.
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
