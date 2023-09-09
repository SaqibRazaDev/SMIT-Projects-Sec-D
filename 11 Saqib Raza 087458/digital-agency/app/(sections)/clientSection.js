import React from 'react'
import ClientCard from '../(components)/clientCard/clientCard'
import client from "../../public/images/client.jpg"

export default function ClientSection() {
  return (
    <>
      <div className="bg-[#2370C8]">
        <div className="section">
          <div className="content">
            <h1 className="heading-title text-white">
              OUR PRICING
            </h1>
            <h1 className="heading-tagline text-white">
              Choose A Plan That’s Right For You
            </h1>
          </div>
          <div className="cards my-6 md:flex">
            <ClientCard image={client} />

          </div>
        </div>
      </div>

    </>
  )
}
