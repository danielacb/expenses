'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  {
    url: '/',
    title: 'Transactions'
  },
  {
    url: '/accounts',
    title: 'Accounts'
  },
  {
    url: '/reports',
    title: 'Reports'
  },
  {
    url: '/cards',
    title: 'Cards'
  },
  {
    url: '/categories',
    title: 'Categories'
  }
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="border-b">
      <ul className="flex h-16 items-center space-x-4 lg:space-x-6 mx-6">
        {links.map((link) => (
          <li key={link.title}>
            <Link
              href={link.url}
              className={`text-sm font-medium transition-colors hover:text-primary${
                pathname !== link.url && ' text-muted-foreground'
              }`}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
