import React from 'react'
import nft1 from './Assets/moreNft1.png'
import nft2 from './Assets/moreNft2.png'
import nft3 from './Assets/moreNft3.png'
import avt from './Assets/Avatar.png'
import avt2 from './Assets/Avatar2.png'
import avt3 from './Assets/Avatar3.png'

export default function MoreNftSection() {
    return (
        <div className="container my-5">

            <h1>
                Discover More NFTs
            </h1>
            <p className="fs-5">
                Explore new trending NFTs
            </p>
            <div className="row">

                {/* <!-- First Card --> */}
                <div className="col-md-4 my-4">
                    <div className="card card-2 rounded-4">
                        <img src={nft1} className="card-img-top" alt="Phto" />
                        <div className="card-body">
                            <div>
                                <p className="fw-bold fs-4 text-white">Distant Galaxy</p>
                                <p className='text-white space-mono'>
                                    <img src={avt} alt='avt' /> MoonDancer
                                </p>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <p >Price</p>
                                    <p className='fw-bold text-white space-mono'>1.63 ETH</p>
                                </div>
                                <div className="col-6">
                                    <p className='text-end'>Highest Bid</p>
                                    <p className="text-end text-white fw-bold space-mono">0.33 wETH</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Second Card --> */}
                <div className="col-md-4 my-4">
                    <div className="card card-2 rounded-4">
                        <img src={nft2} className="card-img-top" alt="Photo2" />
                        <div className="card-body">
                            <div>
                                <p className="fw-bold fs-4 text-white">Life On Edena</p>
                                <p className='text-white space-mono'>
                                    <img src={avt2} alt='avt' /> NebulaKid
                                </p>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <p >Price</p>
                                    <p className='fw-bold text-white space-mono'>1.63 ETH</p>
                                </div>
                                <div className="col-6">
                                    <p className='text-end'>Highest Bid</p>
                                    <p className="text-end text-white fw-bold space-mono">0.33 wETH</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Third Card --> */}
                <div className="col-md-4 my-4">
                    <div className="card card-2 rounded-4">
                        <img src={nft3} className="card-img-top" alt="Photo3" />
                        <div className="card-body">
                            <div>
                                <p className="fw-bold fs-4 text-white">AstroFiction</p>
                                <p className='text-white space-mono'>
                                    <img src={avt3} alt='avt' /> Spaceone
                                </p>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <p >Price</p>
                                    <p className='fw-bold text-white space-mono'>1.63 ETH</p>
                                </div>
                                <div className="col-6">
                                    <p className='text-end'>Highest Bid</p>
                                    <p className="text-end text-white fw-bold space-mono">0.33 wETH</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
