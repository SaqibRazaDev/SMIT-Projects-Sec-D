import React from 'react'
import "../header/header.css"
import Navbar from '../navbar/navbar'
import Button from '../roundButton/button'

export default function HeaderSub(props) {
    return (
        <>
            <div className="header-sub lg:px-16">
                <Navbar />
                <div className="mx-3 md:mx-8 lg:mx-14 py-16">
                    <h1 className="text-white font-medium text-2xl lg:text-4xl ">
                        {props.title}
                    </h1>
                    <h1 className="text-white font-medium text-5xl md:text-6xl lg:text-7xl ">
                        {props.tagline}
                    </h1>
                    <p className='text-white my-5'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
                        sed do eiusmod tempor incididunt.
                    </p>
                    <Button title="Learn More" />
                </div>


            </div>
        </>
    )
}
