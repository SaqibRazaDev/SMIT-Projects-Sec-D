import React from 'react'
import ctg1 from './Assets/ctg1.png'
import ctg2 from './Assets/ctg2.png'
import ctg3 from './Assets/ctg3.png'
import ctg4 from './Assets/ctg4.png'
import ctg5 from './Assets/ctg5.png'
import ctg6 from './Assets/ctg6.png'
import ctg7 from './Assets/ctg7.png'
import ctg8 from './Assets/ctg8.png'

export default function CatagoriesSection() {
    return (
        <div className='container my-5'>
            <h1>
                Browse Categories
            </h1>
            <p className="fs-5">
                Checkout Top Rated Creators on the NFT Marketplace
            </p>

            <div className="row mt-5">
                {/* card */}
                <div className='col-lg-3 col-md-3 col-sm-3 my-3 ctg-card'>
                    <div className="card card-2 rounded-4">
                            <img src={ctg1} alt="" />
                            <p className="fs-4 fw-bold text-white m-4 ctg-heading">Art</p>
                    </div>
                </div>
                {/* card */}
                <div className='col-lg-3 col-md-3 col-sm-3 my-3 ctg-card'>
                    <div className="card card-2 rounded-4">
                            <img src={ctg2} alt="" />
                            <p className="fs-5 fw-bold text-white m-4 ctg-heading">Collectibles</p>
                    </div>
                </div>
                {/* card */}
                <div className='col-lg-3 col-md-3 col-sm-3 my-3 ctg-card'>
                    <div className="card card-2 rounded-4">
                            <img src={ctg3} alt="" />
                            <p className="fs-4 fw-bold text-white m-4 ctg-heading">Music</p>
                    </div>
                </div>
                {/* card */}
                <div className='col-lg-3 col-md-3 col-sm-3 my-3 ctg-card'>
                    <div className="card card-2 rounded-4">
                            <img src={ctg4} alt="" />
                            <p className="fs-4 fw-bold text-white m-4 ctg-heading">Photos</p>
                    </div>
                </div>
                {/* card */}
                <div className='col-lg-3 col-md-3 col-sm-3 my-3 ctg-card'>
                    <div className="card card-2 rounded-4">
                            <img src={ctg5} alt="" />
                            <p className="fs-4 fw-bold text-white m-4 ctg-heading">Video</p>
                    </div>
                </div>
                {/* card */}
                <div className='col-lg-3 col-md-3 col-sm-3 my-3 ctg-card'>
                    <div className="card card-2 rounded-4">
                            <img src={ctg6} alt="" />
                            <p className="fs-4 fw-bold text-white m-4 ctg-heading">Utility</p>
                    </div>
                </div>
                {/* card */}
                <div className='col-lg-3 col-md-3 col-sm-3 my-3 ctg-card'>
                    <div className="card card-2 rounded-4">
                            <img src={ctg7} alt="" />
                            <p className="fs-4 fw-bold text-white m-4 ctg-heading">Sport</p>
                    </div>
                </div>
                {/* card */}
                <div className='col-lg-3 col-md-3 col-sm-3 my-3 ctg-card'>
                    <div className="card card-2 rounded-4">
                            <img src={ctg8} alt="" />
                            <p className="fs-4 fw-bold text-white m-4 ctg-heading">Virtuals</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
