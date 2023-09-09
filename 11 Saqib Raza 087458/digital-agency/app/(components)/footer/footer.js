import React from 'react'
import Link from 'next/link';
import Button from '../roundButton/button';

export default function Footer() {
    return (
        <>
            <div className="section mt-3 footer bg-[#dee9f3] md:flex">
                <div className="w-full md:w-2/5">
                    <Link className='logo text-blue-600 font-bold text-3xl' href="">LOGO.</Link>
                    <p className="text-base text-gray-600 my-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        sed do eiusmod tempor incididunt labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip
                        ea commodo consequat.
                    </p>
                    <div className="hidden lg:block">
                        <Button title="About Us" />
                    </div>

                </div>
                <div className="my-5 md:my-0 md:mx-8 w-full flex md:justify-around">
                    <div className="w-1/2 md:w-1/3">
                        <h3 className="text-[#262A4E] text-xl lg:text-2xl font-medium">
                            Our Links
                        </h3>
                        <ul className='my-6'>
                            <li><Link className='text-gray-600 hover:text-blue-600' href="/">Home</Link></li>
                            <li><Link className='text-gray-600 hover:text-blue-600' href="/about">About Us</Link></li>
                            <li><Link className='text-gray-600 hover:text-blue-600' href="/services">Services</Link></li>
                            <li><Link className='text-gray-600 hover:text-blue-600' href="/portfolio">Team</Link></li>
                            <li><Link className='text-gray-600 hover:text-blue-600' href="/blog">Blog</Link></li>
                            <li><Link className='text-gray-600 hover:text-blue-600' href="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="w-1/2 md:w-1/3">
                        <h3 className="text-[#262A4E] text-xl lg:text-2xl font-medium">
                            Our Services
                        </h3>
                        <ul className='my-6'>
                            <li><Link className='text-gray-600 hover:text-blue-600' href="/">App Development</Link></li>
                            <li><Link className='text-gray-600 hover:text-blue-600' href="/">Web Development</Link></li>
                            <li><Link className='text-gray-600 hover:text-blue-600' href="/">Graphics Design</Link></li>
                            <li><Link className='text-gray-600 hover:text-blue-600' href="/">Web Solutions</Link></li>
                            <li><Link className='text-gray-600 hover:text-blue-600' href="/">App Design</Link></li>
                            <li><Link className='text-gray-600 hover:text-blue-600' href="/">Product Design</Link></li>
                        </ul>
                    </div>
                    <div className="w-1/2 md:w-1/3 hidden lg:block">
                        <h3 className="text-[#262A4E] text-xl lg:text-2xl font-medium">
                            Our Company
                        </h3>
                        <ul className='my-6'>
                            <li><Link className='text-gray-600 hover:text-blue-600' href="/">About Company</Link></li>
                            <li><Link className='text-gray-600 hover:text-blue-600' href="/">Our Testimonials</Link></li>
                            <li><Link className='text-gray-600 hover:text-blue-600' href="/">Latest News</Link></li>
                            <li><Link className='text-gray-600 hover:text-blue-600' href="/">Our Mission</Link></li>
                            <li><Link className='text-gray-600 hover:text-blue-600' href="/">Get a Free Qout</Link></li>
                        </ul>
                    </div>

                </div>

            </div>

        </>
    )
}
