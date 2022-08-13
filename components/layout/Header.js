/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useEffect, useState } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/solid'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

const user = {
    name: 'Chelsea Hagon',
    email: 'chelsea.hagon@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {
    const router = useRouter()
    const [path, setPath] = useState('/')
    const reloadPath = () => setPath(router.asPath)
    useEffect(() => {
        setPath(router.asPath)
    }, [router.asPath])

    const navigation = [
        { name: 'Accueil', href: '/', current: path === "/" ? true : false },
        { name: 'Services', href: '/#service', current: path === "/#service" ? true : false },
        { name: 'Qui sommes nous ?', href: '/#whoareyou', current: path === "/#whoareyou" ? true : false },
        { name: 'Contactez-nous', href: '/#contact', current: path === "/#contact" ? true : false },
    ]



    return (
        <>
            {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
            <Popover
                as="header"
                className={({ open }) =>
                    classNames(
                        open ? 'fixed inset-0 z-40 overflow-y-auto' : '',
                        'bg-white shadow-sm lg:static lg:overflow-y-visible drop-shadow'
                    )
                }
            >
                {({ open }) => (
                    <>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="relative flex justify-between items-center grid grid-cols-3 ">
                                <div className="flex   lg:static col-span-1">
                                    <div className="flex-shrink-0 flex justify-center py-2">
                                        <a href="#" className='relative flex items-center  h-[87px] w-[124px] '>
                                            <Image
                                                className="my-2"
                                                src="/images/logo.png"
                                                alt="logo"
                                                layout='fill'
                                                objectFit='contain'
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className="min-w-0 flex-1  justify-end    hidden lg:flex lg:col-span-2  ">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}>
                                            <a
                                                aria-current={item.current ? 'page' : undefined}
                                                className={classNames(
                                                    item.current ? '' : '',
                                                    ' block rounded-md  px-3 text-base font-medium  drop-shadow-xl text-black uppercase text-[16px]'
                                                )}
                                                onClick={reloadPath}
                                            >
                                                {item.name}
                                                <div className={classNames(
                                                    item.current ? 'flex' : 'hidden',
                                                    'bg-green w-2 h-2 rounded-full drop-shadow m-auto'
                                                )}></div>
                                            </a>
                                        </Link>
                                    ))}
                                </div>
                                <div className="flex items-center justify-end md:flex md:right-0 md:inset-y-0 lg:hidden col-span-2">
                                    {/* Mobile menu button */}
                                    <Popover.Button className="-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Open menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Popover.Button>
                                </div>
                            </div>
                        </div>

                        <Popover.Panel as="nav" className="lg:hidden block bg-red-500" aria-label="Global">
                            <div className="max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            item.current ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-50',
                                            'block rounded-md py-2 px-3 text-base font-medium'
                                        )}
                                        onClick={reloadPath}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="border-t border-gray-200 pt-4 pb-3">
                                <div className="max-w-3xl mx-auto px-4 flex items-center sm:px-6">
                                    <div className="flex-shrink-0">
                                        <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                                    </div>
                                    <div className="ml-3">
                                        <div className="text-base font-medium text-gray-800">{user.name}</div>
                                        <div className="text-sm font-medium text-gray-500">{user.email}</div>
                                    </div>
                                    <button
                                        type="button"
                                        className="ml-auto flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        <span className="sr-only">View notifications</span>
                                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>

                            </div>
                        </Popover.Panel>
                    </>
                )}
            </Popover>
        </>
    )
}
