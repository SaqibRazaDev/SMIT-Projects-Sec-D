import React from 'react'
import avtr1 from './Assets/ArtistAvatar1.png'
import avtr2 from './Assets/ArtistAvatar2.png'
import avtr3 from './Assets/ArtistAvatar3.png'
import avtr4 from './Assets/ArtistAvatar4.png'
import avtr5 from './Assets/ArtistAvatar5.png'
import avtr6 from './Assets/ArtistAvatar6.png'
import avtr7 from './Assets/ArtistAvatar7.png'
import avtr8 from './Assets/ArtistAvatar8.png'
import avtr9 from './Assets/ArtistAvatar9.png'
import avtr10 from './Assets/ArtistAvatar10.png'
import avtr11 from './Assets/ArtistAvatar11.png'
import avtr12 from './Assets/ArtistAvatar12.png'
import rankbtn from './Assets/RankButton.png'


export default function TopCreatorSection() {
    return (
        <div className="container my-5">
            <h1>
                Top creators
            </h1>
            <p className="fs-5">
                Checkout Top Rated Creators on the NFT Marketplace
            </p>

            <div className="row my-5">

                {/* card 1 */}
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="card card-2 p-4">
                        <p className="text-white">01</p>

                        <div className="card-body text-center">
                            <img src={avtr1} className="avtr-img img-fluid" alt="Employee1" />
                            <h5 className="card-title text-white mt-3">Keepitreal</h5>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <p>Total Sales:</p>
                            </div>
                            <div className="col-6">
                                <p className="mono-space text-end text-white">
                                    34.53 ETH
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card 2 */}
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="card card-2 p-4">
                        <p className="text-white">02</p>
                        <div className="card-body text-center">
                            <img src={avtr2} className=" img-fluid" alt="Employee1" />
                            <h5 className="card-title text-white mt-3">DigiLab</h5>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <p>Total Sales:</p>
                            </div>
                            <div className="col-6">
                                <p className="mono-space text-end text-white">
                                    34.53 ETH
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card3 */}
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="card card-2 p-4">
                        <p className="text-white">03</p>
                        <div className="card-body text-center">
                            <img src={avtr3} className=" img-fluid" alt="Employee1" />
                            <h5 className="card-title text-white mt-3">GravityOne</h5>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <p>Total Sales:</p>
                            </div>
                            <div className="col-6">
                                <p className="mono-space text-end text-white">
                                    34.53 ETH
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card4 */}
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4 d-none d-md-block d-lg-block d-xl-block">
                    <div className="card card-2 p-4">
                        <p className="text-white">04</p>
                        <div className="card-body text-center">
                            <img src={avtr4} className=" img-fluid" alt="Employee1" />
                            <h5 className="card-title text-white mt-3">Juanie</h5>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <p>Total Sales:</p>
                            </div>
                            <div className="col-6">
                                <p className="mono-space text-end text-white">
                                    34.53 ETH
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card5 */}
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4 d-none d-md-block d-lg-block d-xl-block">
                    <div className="card card-2 p-4">
                        <p className="text-white">05</p>
                        <div className="card-body text-center">
                            <img src={avtr5} className=" img-fluid" alt="Employee1" />
                            <h5 className="card-title text-white mt-3">BlueWhale</h5>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <p>Total Sales:</p>
                            </div>
                            <div className="col-6">
                                <p className="mono-space text-end text-white">
                                    34.53 ETH
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card6 */}
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4 d-none d-md-block d-lg-block d-xl-block">
                    <div className="card card-2 p-4">
                        <p className="text-white">06</p>
                        <div className="card-body text-center">
                            <img src={avtr6} className=" img-fluid" alt="Employee1" />
                            <h5 className="card-title text-white mt-3">Mr Fox</h5>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <p>Total Sales:</p>
                            </div>
                            <div className="col-6">
                                <p className="mono-space text-end text-white">
                                    34.53 ETH
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card7 */}
                <div className="col-lg-3 col-md-6 col-sm-6 mb-4 d-none d-lg-block d-xl-block">
                    <div className="card card-2 p-4">
                        <p className="text-white">07</p>
                        <div className="card-body text-center">
                            <img src={avtr7} className=" img-fluid" alt="Employee1" />
                            <h5 className="card-title text-white mt-3">Shro omie</h5>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <p>Total Sales:</p>
                            </div>
                            <div className="col-6">
                                <p className="mono-space text-end text-white">
                                    34.53 ETH
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card8 */}
                <div className="col-lg-3 col-md-6 col-sm-6 mb-4 d-none d-lg-block d-xl-block">
                    <div className="card card-2 p-4">
                        <p className="text-white">08</p>
                        <div className="card-body text-center">
                            <img src={avtr8} className="img-fluid" alt="Employee1" />
                            <h5 className="card-title text-white mt-3">Robotica</h5>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <p>Total Sales:</p>
                            </div>
                            <div className="col-6">
                                <p className="mono-space text-end text-white">
                                    34.53 ETH
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card9 */}
                <div className="col-lg-3 col-md-6 col-sm-6 mb-4 d-none d-lg-block d-xl-block">
                    <div className="card card-2 p-4">
                        <p className="text-white">05</p>
                        <div className="card-body text-center">
                            <img src={avtr9} className=" img-fluid" alt="Employee1" />
                            <h5 className="card-title text-white mt-3">RustyRobot</h5>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <p>Total Sales:</p>
                            </div>
                            <div className="col-6">
                                <p className="mono-space text-end text-white">
                                    34.53 ETH
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card10 */}
                <div className="col-lg-3 col-md-6 col-sm-6 mb-4 d-none d-lg-block d-xl-block">
                    <div className="card card-2 p-4">
                        <p className="text-white">06</p>
                        <div className="card-body text-center">
                            <img src={avtr10} className=" img-fluid" alt="Employee1" />
                            <h5 className="card-title text-white mt-3">Animakid</h5>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <p>Total Sales:</p>
                            </div>
                            <div className="col-6">
                                <p className="mono-space text-end text-white">
                                    34.53 ETH
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card11 */}
                <div className="col-lg-3 col-md-6 col-sm-6 mb-4 d-none d-lg-block d-xl-block">
                    <div className="card card-2 p-4">
                        <p className="text-white">07</p>
                        <div className="card-body text-center">
                            <img src={avtr11} className=" img-fluid" alt="Employee1" />
                            <h5 className="card-title text-white mt-3">Dotgu</h5>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <p>Total Sales:</p>
                            </div>
                            <div className="col-6">
                                <p className="mono-space text-end text-white">
                                    34.53 ETH
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card12 */}
                <div className="col-lg-3 col-md-6 col-sm-6 mb-4 d-none d-lg-block d-xl-block">
                    <div className="card card-2 p-4">
                        <p className="text-white">08</p>
                        <div className="card-body text-center">
                            <img src={avtr12} className="img-fluid" alt="Employee1" />
                            <h5 className="card-title text-white mt-3">Ghiblier</h5>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <p>Total Sales:</p>
                            </div>
                            <div className="col-6">
                                <p className="mono-space text-end text-white">
                                    34.53 ETH
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row d-flex justify-content-center">
                <div className="col-">
                    <a href="/"><img src={rankbtn} alt="" className="img-fluid d-lg-none" /></a>
                </div>
            </div>



        </div>
    )
}
