import React from 'react'
import PortfolioCard from '../(components)/portfolioCard/portfolioCard'
import image1 from '../../public/images/work-graphic-designing.jpg'
import image2 from '../../public/images/work-web-dev.jpg'
import image3 from '../../public/images/work-ui-desin.jpg'
import image4 from '../../public/images/work-photography.jpg'
import image5 from '../../public/images/work-ecommerce.jpg'
import image6 from '../../public/images/work-seo.jpg'

export default function PortfolioSection() {
  return (
    <>
      <div className="section">
        <div>
          <h1 className="heading-title py-3">
            OUR PORTFOLIO
          </h1>
          <h1 className="heading-tagline ">
            Take A Look At Our Latest Work
          </h1>
        </div>

        <div className="my-6 md:flex">
          <PortfolioCard image={image1} title="Graphics Designing" />
          <PortfolioCard image={image2} title="Web Development" />
          <PortfolioCard image={image3} title="UI/UX Design" />
        </div>
        <div className="hidden md:block my-6 md:flex">
          <PortfolioCard image={image4} title="Photography" />
          <PortfolioCard image={image5} title="e-Commerce Web" />
          <PortfolioCard image={image6} title="Web Seo" />
        </div>

      </div>
    </>
  )
}
