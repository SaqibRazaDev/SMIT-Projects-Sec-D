import React from 'react'
import "../header/header.css"
import Navbar from '../navbar/navbar'
import Button from '../roundButton/button'


export default function Header() {
  return (
    <>
      <div className="section header-home py-8">
        <Navbar />
        <div className="py-24">
        <h1 className="headin-header text-white font-medium text-5xl lg:text-7xl ">
          Creative <br /> Digital Agency
        </h1>
        <p className='text-white my-5'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
          sed do eiusmod tempor incididunt.
        </p>
        <Button title="Learn More"/>
        </div>
        
      </div>


    </>

  )
}
