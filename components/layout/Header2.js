import { Fragment, useEffect, useState } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/solid'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Router, { useRouter } from 'next/router'
import Link from 'next/link'




const user = {
  name: 'Chelsea Hagon',
  email: 'chelsea.hagon@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header2(props) {
  const router = useRouter()
  const [path, setPath] = useState('/')
  const reloadPath = () => setPath(router.asPath)
  useEffect(() => {
    setPath(router.asPath)
  }, [router.asPath])

  const navigation = [{ name: 'Accueil', href: '/', current: router.asPath === "/" ? true : false },
  { name: 'Services', href: '/#services', current: router.asPath === "/#services" ? true : false },
  { name: 'Settings', href: '/#settings', current: router.asPath === "/#settings" ? true : false },
  { name: 'Dashboard', href: '/#dashboard', current: router.asPath === "/#dashboard" ? true : false },]

  return (
    navigation.map((item) => {
      return (
        <Link href={item.href} key={item.name}  >
          <a onClick={reloadPath} className={`${path === item.href ? "bg-red-500" : "bg-blue-500"}`}>{item.name}</a>
        </Link>
      )
    })
  )
}
