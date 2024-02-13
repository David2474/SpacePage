import Link from 'next/link'

 
export default function Nav() {
  return (
    <>
        <Link href="/home" className='bg-blue-400 mx-3 p-2'>Home</Link>
        <Link href="/destination" className='bg-blue-400 mx-3 p-2'>Destination</Link>
        <Link href="/crew" className='bg-blue-400 mx-3 p-2'>Crew</Link>
        <Link href="/technology" className='bg-blue-400 mx-3 p-2'>Technology</Link>
    </>
  )
}
