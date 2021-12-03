import React,{useState} from 'react'

const ImageSearch = () => {
    const [text,setText]=useState('')
    return (
        <div className="max-w-sm rounded overflow-hidden my-10 max-auto">
            <form className="w-full max-w-sm">
                <div className="flex items-center border-b border-teal-500 py-2">
                    <input onChange={e=>setText(e.target.value)} className="appearance-none bg-transparent border-none w-full text-gray-900 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text" placeholder="What would you like to see?"/>
                    <button className="flex-shrink-0 text-sm border-4 text-gray-600 py-1 px-2 rounded bg-white-200" type="submit">Search</button>
                </div>
            </form>
        </div>
    )
}

export default ImageSearch
