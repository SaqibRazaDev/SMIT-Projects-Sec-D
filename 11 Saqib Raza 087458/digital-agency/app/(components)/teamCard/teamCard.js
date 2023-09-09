import React from 'react'
import Image from 'next/image'

export default function TeamCard(props) {
    return (
        <div className="max-w-sm mx-auto md:mr-3 my-4  bg-white rounded-lg shadow-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
            <Image
                src={props.image}
                width={390}
                height={420}
                alt="Picture of Servive"
                className=""
            />
            <div className="bg-white text-right px-4 absolute bottom-2 w-full">
                <p className="text-xl font-semibold">
                    {props.name}
                </p>
                <p className="text-base text-slate-500">
                    {props.position}
                </p>
            </div>
        </div>
    )
}
