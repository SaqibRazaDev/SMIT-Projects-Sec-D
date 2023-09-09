import React from 'react'

export default function Button(props) {
    return (
        <button class="bg-blue-600 hover:bg-white text-white hover:text-blue-600 font-medium py-2 px-8 border-2 border-white hover:border-blue-600 rounded-full">
            {props.title}
        </button>
    )
}
