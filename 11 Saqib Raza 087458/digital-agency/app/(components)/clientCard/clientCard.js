import React from 'react'
import Image from 'next/image'


export default function ClientCard(props) {
    return (
        <div className="w-full mx-auto md:mr-3 my-4 border-2 flex flex-col items-center py-10 md:w-1/2 bg-white hover:bg-[#3782D7] border-[#CFEAFF] hover:border-white hover:text-white">
            <Image
                src={props.image}
                width={100}
                height={100}
                alt="Picture of Servive"
                className="w-24 h-24 rounded-full shadow-lg mb-5"
            />
            <h5 className="mb-1 text-xl font-medium">{props.name}</h5>
            <h5 className="mb-1 text-base">{props.name}</h5>
            <p className="text-base text-center mx-4">
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmodtempor
                incididunt ut labore et dolore
            </p>
        </div>
    )
}
