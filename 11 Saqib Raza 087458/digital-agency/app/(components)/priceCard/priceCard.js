import React from 'react'
import Image from 'next/image'
import Button from '../roundButton/button'

export default function PriceCard(props) {
    return (
        <>
            <div className="max-w-sm mx-auto md:mr-3 my-4 w-full bg-white rounded-lg shadow-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl py-8 flex flex-col items-center text-center hover:text-white hover:bg-[#2370C8]">

                <h3 className="text-lg font-semibold py-4">
                    {props.plan}
                </h3>
                <Image
                    src={props.image}
                    width={90}
                    height={90}
                    alt="Picture of Servive"
                    className="rounded-full"
                />

                <p className="text-sm pt-4">
                    <span className="text-xl font-semibold text-blue-400">{props.price}</span> /month
                </p>
                <p className="text-base my-4">
                    Graphic Design <br />
                    Web Design <br />
                    UI/UX <br />
                    HTML/CSS <br />
                    SEO Marketing <br />
                    Business Analysis
                </p>
                <Button title="Start Now"/>


                </div>


            

        </>
    )
}
