import React from 'react'
import ImageSearch from './components/ImageSearch'

const Sidebar = () => {
    return (
        <div className="w-2/5 p-4 h-screen flex justify-center">
            <h1 className="text-2xl text-pink-900 text-opacity-90">
            What are you looking for?
            <ImageSearch/>
               <p className="text-red-500 text-lg opacity-60">
               The places you will visit are not far away!
               </p>
            </h1>    
        </div>
    )
}

export default Sidebar
