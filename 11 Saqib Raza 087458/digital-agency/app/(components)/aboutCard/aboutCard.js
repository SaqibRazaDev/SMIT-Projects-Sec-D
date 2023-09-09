import React from 'react'
import Image from 'next/image'


export default function AboutCard(props) {
    return (
        <div className="max-w-md mx-auto flex flex-col items-center py-10 md:w-1/3 hover:bg-white border-2 hover:border-[#2370C8]">
            <Image
                src={props.img}
                width={100}
                height={100}
                alt="Picture of Servive"
                className="w-24 h-24 rounded-full shadow-lg mb-5"
            />
            <h5 className="mb-1 text-xl font-medium text-[#262A4E]">{props.title}</h5>
            <p className="text-base text-center text-[#646464] mx-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eiusmodtempor incididunt sit amet ut labore et dolore.
            </p>
        </div>
    )
}
