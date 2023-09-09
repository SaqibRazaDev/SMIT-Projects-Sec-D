import React from 'react'
import PriceCard from '../(components)/priceCard/priceCard'
import image1 from '../../public/images/icon-basic.jpg'
import image2 from '../../public/images/icon-standard.jpg'
import image3 from '../../public/images/icon-premium.png'


export default function PriceSection() {
  return (
    <>
      <div className="section">
        <div className="content">
          <h1 className="heading-title">
            OUR PRICING
          </h1>
          <h1 className="heading-tagline">
            Choose A Plan That’s Right For You
          </h1>
        </div>
        <div className="cards my-6 md:flex">
          <PriceCard plan="Basic Plan" image={image1} price="$50"/>
          <PriceCard plan="Standard Plan" image={image2} price="$99"$50/>
          <PriceCard plan="Premium Plan" image={image3} price="$150"/>

        </div>
      </div>

    </>
  )
}
