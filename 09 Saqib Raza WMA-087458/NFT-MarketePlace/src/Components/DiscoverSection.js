import React from 'react'
import spacewalking from './Assets/space-walking.png'
import getstarted from './Assets/get-started-btn.png'

export default function DiscoverSection() {
  return (
    <div className='container py-3'>
        <div className="row py-5">
            <div className="col-md-6 col-sm-12">
                <h1 className='fw-bolder lh-sm section-1-heading text-capitalize'>Discover digital art & Collect NFTs</h1>
                <p className='fs-5'>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
                <a className='m' href="/"><img className='my-3 mb-4 img-fluid' src={getstarted} alt="" /></a>
                <div className="sec-1-container d-flex justify-content-between">
                    <div>
                        <p className='fs-2'>240k+</p>
                        <p>Total Sales</p>
                    </div>
                    <div>
                        <p className='fs-2'>100k+</p>
                        <p>Auctions</p>
                    </div>
                    <div>
                        <p className='fs-2'>240k+</p>
                        <p>Artists</p>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-sm-12 p-0">
                <a href="/"><img className='img-fluid' src={spacewalking} alt="" /></a>
            </div>
        </div>
      
    </div>
  )
}
