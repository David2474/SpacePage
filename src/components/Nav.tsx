import Link from 'next/link'

const links = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Destination',
    href: '/destination'
  },
  {
    name: 'Crew',
    href: '/crew'
  },
  {
    name: 'Technology',
    href: '/technology'
  },
]
 
export default function Nav() {
  return (
    <nav className='flex bg-green-400 h-16 items-center w-6/12 '>
      {links.map((link) =>{
          return(
            <Link 
              href={link.href}
              key={link.name} 
              className='bg-blue-500 text-white ml-7 mx-3 rounded-sm w-24 h-8 flex items-center justify-center text-center px-2 hover:bg-blue-600'>
              {link.name}
            </Link>
          )
        })}
    </nav>
  )
}
