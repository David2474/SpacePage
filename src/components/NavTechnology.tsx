'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'


const links = [
  {
    name: '1',
    href: '/technology'
  },
  {
    name: '2',
    href: '/technology/number2'
  },
  {
    name: '3',
    href: '/technology/number3'
  },
]
 
export default function NavTechnology() {
  const pathname = usePathname();
  return (
    <div className='flex flex-col'>
      {links.map((link) =>{
          return(
            <Link 
              href={link.href}
              key={link.name} 
              className={`border border-white text-white rounded-[50%] my-3 w-20 h-20 flex items-center justify-center text-center px-2
               ${pathname === link.href ? ' bg-white text-black' : ''}
              `}>
              {link.name}
            </Link>
          )
        })}
    </div>
  )
}
