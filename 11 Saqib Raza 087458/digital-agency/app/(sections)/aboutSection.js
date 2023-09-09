import React from 'react'
import Image from 'next/image'
import aboutImg from "../../public/images/office.jpg"
import img1 from "../../public/images/icon-smart-planning.png"
import img2 from "../../public/images/icon-super-idea.png"
import img3 from "../../public/images/icon-partnership.jpg"
import Button from '../(components)/roundButton/button'
import AboutCard from '../(components)/aboutCard/aboutCard'

export default function AboutSection() {
  return (
    <>
      <div className="section about-section flex flex-col md:flex-row">
        <div className="img md:w-2/5 order-2 md:order-1">
          <Image
            src={aboutImg}
            width={400}
            height={590}
            alt="Picture of Servive"
            className="border-2 border-blue-500"
          />
        </div>

        <div className="content mb-5 md:mb-0 md:w-3/5 md:ml-6 order-1 md:order-2">
          <h1 className="heading-title mb-2">ABOUT US</h1>
          <h1 className="heading-tagline my-2">We design, build brands & digital projects.</h1>
          <p className="text-base my-4 text-[#646464]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="text-base my-4 text-[#646464] hidden lg:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="text-base my-4 text-[#646464] hidden xl:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <Button title="Learn More"/>
        </div>
      </div>

      <div className=" bg-[#dee9f3]">
        <div className="section">
          <div className='md:flex border-4 border-white rounded-md'>
            <AboutCard img={img1} title="Smart planing"/>
            <AboutCard img={img2} title="Super ideas"/>
            <AboutCard img={img3} title="Our partnership"/>
          </div>
        </div>
      </div>

    </>
  )
}
