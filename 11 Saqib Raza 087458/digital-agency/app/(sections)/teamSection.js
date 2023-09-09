import React from 'react'
import img1 from "../../public/images/staff03.jpg"
import img2 from "../../public/images/staff02.jpg"
import img3 from "../../public/images/staff01.png"
import TeamCard from '../(components)/teamCard/teamCard'


export default function TeamSection() {
  return (
    <>
    <div className="bg-[#dee9f3]">
    <div className="section">
        <div className="content text-center">
          <h1 className="heading-title">
            OUR TEAM
          </h1>
          <h1 className="heading-tagline">
            Our top dedicated professionals.
          </h1>
        </div>
        <div className="cards my-6 md:flex">
          <TeamCard image={img1} name="Duglas Walker" position="SHIEF STAFF"/>
          <TeamCard image={img2} name="Caroline Harrison" position="FOUNDER & NANAGER"/>
          <TeamCard image={img3} name="Safia Simpson" position="WEB DESIGNER"/>
        </div>
      </div>
    </div>

    </>
  )
}
