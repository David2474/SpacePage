import Link from 'next/link'

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
  return (
    <div className='flex flex-col'>
      {links.map((link) =>{
          return(
            <Link 
              href={link.href}
              key={link.name} 
              className='border border-white text-white rounded-[50%] my-3 w-20 h-20 flex items-center justify-center text-center px-2'>
              {link.name}
            </Link>
          )
        })}
    </div>
  )
}
