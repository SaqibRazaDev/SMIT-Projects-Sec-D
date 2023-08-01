import React from 'react'
import animal1 from './Assets/animal-1.png'
import animal2 from './Assets/animal-2.png'
import animal3 from './Assets/animal-3.png'
import mashrom1 from './Assets/mashroom-1.png'
import mashrom2 from './Assets/mashroom-2-3.png'
import machine1 from './Assets/machine-1.png'
import machine2 from './Assets/machine-2.png'
import machine3 from './Assets/machine-3.png'
import nfts from './Assets/additional-nfts.png'

export default function TrendingSection() {
    return (
        <div className="container my-5">

            <h1>
                Trending Collection
            </h1>
            <p className="fs-5">
                Checkout our weekly updated trending collection.
            </p>
            <div className="row">
                {/* <!-- First Card --> */}
                <div className="col-md-4 my-4">
                    <div className="card card-1">
                        <img src={animal1} className="card-img-top" alt="" />
                        <div className="card-body">
                            <div className="row">
                                <div className="col-4">
                                    <img src={animal2} className="img-fluid" alt="" />
                                </div>
                                <div className="col-4">
                                    <img src={animal3} className="img-fluid" alt="" />
                                </div>
                                <div className="col-4">
                                    <img src={nfts} className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="fw-bold fs-4 text-white">DSGN Animals</p>
                            <p className='text-white'>MrFox</p>
                        </div>
                    </div>
                </div>

                {/* <!-- Second Card --> */}
                <div className="col-md-4 my-4">
                    <div className="card card-1">
                        <img src={mashrom1} className="card-img-top" alt="" />
                        <div className="card-body">
                            <div className="row">
                                <div className="col-4">
                                    <img src={mashrom2} className="img-fluid" alt="" />
                                </div>
                                <div className="col-4">
                                    <img src={mashrom2} className="img-fluid" alt="" />
                                </div>
                                <div className="col-4">
                                    <img src={nfts} className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="fw-bold fs-4 text-white">Magic Mushrooms</p>
                            <p className='text-white'>Shroomie</p>
                        </div>
                    </div>
                </div>

                {/* <!-- Third Card --> */}
                <div className="col-md-4 my-4">
                    <div className="card card-1">
                        <img src={machine1} className="card-img-top" alt="" />
                        <div className="card-body">
                            <div className="row">
                                <div className="col-4">
                                    <img src={machine2} className="img-fluid" alt="" />
                                </div>
                                <div className="col-4">
                                    <img src={machine3} className="img-fluid" alt="" />
                                </div>
                                <div className="col-4">
                                    <img src={nfts} className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="fw-bold fs-4 text-white">Disco Machines</p>
                            <p className='text-white'>BeKind2Robots</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
