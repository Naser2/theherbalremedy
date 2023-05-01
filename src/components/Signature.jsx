import clsx from 'clsx'
import Link from 'next/link'

export const Signature = ({ text }) => {
  return (
    <div className="flex flex-shrink-0 border-t border-gray-200 px-4 pt-4">
      <Link
        href="https://goo.gl/maps/b3U2ZaYAmsH8qoDN6"
        className="group block flex-shrink-0"
      >
        <p className="overflow-wrap text-center text-2xl  font-extrabold font-medium text-teal-500  group-hover:text-gray-700">
          The Herbal Remedy
        </p>
        <p className="overflow-wrap -mt-4 text-center text-2xl font-extrabold font-medium text-teal-500  group-hover:text-gray-700">
          Remedy
        </p>
      </Link>
    </div>
  )
}

export const Address = ({ text }) => {
  return (
    <div className={clsx(text ? text : 'text-sm', 'overflow-wrap ')}>
      <Link
        href="https://goo.gl/maps/b3U2ZaYAmsH8qoDN6"
        className="overflow-wrap  font-medium text-slate-500 group-hover:text-gray-700"
      >
        Address: 
        <span className="overflow-wrap text-slate-600 hover:underline">
          2154 2nd Ave, New York, NY 10029
        </span>
      </Link>
      <p className="font-medium text-gray-500 group-hover:text-gray-700">
        Phone: 
        <span className="text-blue-500 hover:text-blue-600 hover:underline">
          (678) 964-4655
        </span>
      </p>
    </div>
  )
}
