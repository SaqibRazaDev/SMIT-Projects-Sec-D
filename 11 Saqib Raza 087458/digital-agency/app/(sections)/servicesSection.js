import React from 'react'
import img from "../../public/images/icon-web-dev.png"
import img1 from "../../public/images/icon-graphics-design.jpg"
import img2 from "../../public/images/icon-digital-markeeting.jpg"
import ServiceCard from '../(components)/serviceCard/serviceCard'

export default function ServicesSection() {
  return (
    <>
      <div className="section service-section">
        <div className="content text-center">
          <h1 className="heading-title py-2">
            OUR SERVICES
          </h1>
          <h1 className="heading-tagline">
            We Are Providing Digital services
          </h1>
        </div>
        <div className="card-container my-6 md:flex">
          <ServiceCard img={img} title="Web Development"/>
          <ServiceCard img={img1} title="Graphic Design"/>
          <ServiceCard img={img2} title="Digital Marketing"/>
        </div>
      </div>

    </>
  )
}
