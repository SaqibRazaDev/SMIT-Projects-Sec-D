import React from 'react'
import magicartist from './Assets/MagicArtistCard.png'
import nftbtn from './Assets/SeeNFTButton.png'
import counter from './Assets/AuctionTimer.png'

export default function MagicMashroomSection() {
    return (
        <div className='container-fluid magic-section'>
            <div className="container magic-item-container">
            <div className="row">
                <div className="col-6">
                    <a className='' href="/">
                        <img className='py-3 img-fluid' src={magicartist} alt="" />
                    </a>
                    <h1 className='py-3'>
                        Magic Mashrooms
                    </h1>

                    <img src={counter} alt="" />

                    <a className='' href="/">
                        <img className='py-3 img-fluid' src={nftbtn} alt="" />
                    </a>

                </div>
                <div className="col-6"></div>
            </div>
            </div>

        </div>
    )
}
