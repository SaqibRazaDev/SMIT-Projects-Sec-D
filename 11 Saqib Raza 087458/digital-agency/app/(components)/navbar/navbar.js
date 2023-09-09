import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import logo from '../../../public/images/logo.png'


export default function Navbar() {
  return (
    <div className="flex justify-between items-center">
      <Link href='/'>
        <Image
          src={logo}
          width={150}
          height={80}
          className='bg-slate-50 px-2 py-1 rounded-md'
        />
      </Link>
      <div className="navbar hidden md:block">
        <ul className='flex items-center space-x-6 text-white'>
          <li><Link className='font-semibold hover:font-bold' href="/">HOME</Link></li>
          <li><Link className='font-semibold hover:font-bold' href="/about">ABOUT</Link></li>
          <li><Link className='font-semibold hover:font-bold' href="/pages">PAGES</Link></li>
          <li><Link className='font-semibold hover:font-bold' href="/services">SERVICES</Link></li>
          <li><Link className='font-semibold hover:font-bold' href="/portfolio">PORTFOLIO</Link></li>
          <li><Link className='font-semibold hover:font-bold' href="/blog">BLOG</Link></li>
          <li><Link className='font-semibold hover:font-bold' href="/contact">CONTACT</Link></li>
        </ul>
      </div>
      <input type="text" placeholder="Search..." className='text-sm hidden lg:block lg:text-base px-2 py-1 rounded-2xl border-2 border-gray-800' />
    </div>
  )
}
