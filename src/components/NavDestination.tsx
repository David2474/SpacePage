'use client'

import Link from "next/link"
import { usePathname } from "next/navigation";

const links = [
    {
        name: 'Moon',
        href: '/destination'
    },
    {
        name: 'Mars',
        href: '/destination/mars'
    },
    {
        name: 'Europa',
        href: '/destination/europa'
    },
    {
        name: 'Titan',
        href: '/destination/titan'
    },
]

export default function NavDestination() {
const pathname = usePathname();

  return (
    <nav>
        {
        links.map((link) =>{
            return( 
                <Link 
                    href={link.href}
                    key={link.name} 
                    className={` mr-5 py-1 uppercase 
                    ${ pathname === link.href ? 'border-b-2 border-white' : ''}
                    `}>
                    {link.name}
                </Link>
            )
        })
        }
    </nav>
  )
}
