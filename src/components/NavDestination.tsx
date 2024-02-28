import Link from "next/link"

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
  return (
    <nav>
        {
        links.map((link) =>{
            return( 
                <Link 
                href={link.href}
                key={link.name} 
                className='border border-violet-700 mr-2'>
                {link.name}
              </Link>
            )
        })
        }
    </nav>
  )
}
