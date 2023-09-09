import React from 'react'
import Image from 'next/image'

export default function PortfolioCard(props) {
    return (
        <>
            <div className="max-w-sm mx-auto md:mr-3 my-4  bg-white rounded-lg shadow-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
                <Image
                    src={props.image}
                    width={400}
                    height={500}
                    alt="Picture of Servive"
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 w-full px-4 py-2 bg-slate-500 transition duration-300 ease-in-out">
                    <p className="text-white text-2xl font-semibold text-center">{props.title}</p>
                </div>

            </div>


        </>
    )
}
