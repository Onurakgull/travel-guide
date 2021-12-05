import React,{useState} from 'react'

const ImageSearch = ({searchText}) => {
    const [text,setText]=useState('')

    const onSubmit=(e)=>{
        e.preventDefault();

        searchText(text);
    }
    return (
        <div className="flex flex-1 w-full justify-center">
            <form onSubmit={onSubmit} className="w-full max-w-sm">
                <div className="flex items-center border-b border-primary-bold py-2">
                    <input onChange={e=>setText(e.target.value)} className="appearance-none placeholder-primary-dark bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:text-primary-dark focus:outline-none"
                    type="text" placeholder="What would you like to see?"/>
                    <button className="hover:bg-primary-base  hover:border-primary-dark text-sm border-4 text-primary-dark py-1 px-2 rounded transform transition-colors" type="submit">Search</button>
                </div>
            </form>
        </div>
    )
}

export default ImageSearch
