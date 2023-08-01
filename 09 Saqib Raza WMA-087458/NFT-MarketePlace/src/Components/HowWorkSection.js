import React from 'react'
import workimg1 from './Assets/work-img1.png'
import workimg2 from './Assets/work-img2.png'
import workimg3 from './Assets/work-img3.png'

export default function HowWorkSection() {
    return (
        <div className='container my-5'>
            <h1>
                How it works
            </h1>
            <p className="fs-5">
                Find out how to get started
            </p>

            <div className="row py-4">

                {/* card1 */}
                
                <div className="col-4 my-2 work-card-container">
                    <div className="card card-2 p-4 work-card rounded-4 d-flex align-items-center">
                        <div>
                            <img className='img-fluid work-img' src={workimg1} alt="" />
                        </div>
                        <div>
                            <p className="fs-4 fw-bold text-white text-center mt-3">Setup Your wallet</p>
                            <p className='text-white text-center'>Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.</p>
                        </div>
                    </div>
                </div>

                {/* card2 */}

                <div className="col-4 my-2 work-card-container">
                    <div className="card card-2 p-4 work-card rounded-4 d-flex align-items-center">
                        <div>
                            <img className='img-fluid work-img' src={workimg2} alt="" />
                        </div>
                        <div>
                            <p className="fs-4 fw-bold text-white text-center mt-3">Create Collection</p>
                            <p className='text-white text-center'>Upload your work here and setup your very own collection. Add a description, social links and floor price.</p>
                        </div>
                    </div>
                </div>

                {/* card3 */}

                <div className="col-4 my-2 work-card-container">
                    <div className="card card-2 p-4 work-card rounded-4 d-flex align-items-center">
                        <div>
                            <img className='img-fluid work-img' src={workimg3} alt="" />
                        </div>
                        <div>
                            <p className="fs-4 fw-bold text-white text-center mt-3">Start Earning</p>
                            <p className='text-white text-center'>Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.</p>
                        </div>
                    </div>
                </div>


            </div>


        </div>
    )
}
