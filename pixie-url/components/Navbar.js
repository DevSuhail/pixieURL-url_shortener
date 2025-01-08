import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='bg-red-600 flex justify-between items-center h-12 p-4'>
      <div className='font-bold'>PIXIE-URL</div>
      <div className='flex gap-4 py-2'>
        <ul className='flex list-none gap-3'>
          <Link href="/"><li>Home</li></Link>
          <Link href="/about"><li>About</li></Link>
          <Link href="/contact"><li>Contact us</li></Link>
          <Link href="/generate"><li>Shorten</li></Link>
        </ul>
        <div className='flex gap-3'>
          <Link href="/generate"><button className='bg-red-400 hover:bg-red-500 font-bold p-1 py-0.5 rounded-md'>Try Now</button></Link>
          <Link href="https://github.com/DevSuhail" target="_blank"><button className='bg-red-400 hover:bg-red-500 font-bold p-1 py-0.5 rounded-md'>GitHub</button></Link>
        </div>

      </div>
    </nav>
  )
}

export default Navbar