import React, {useState,useEffect} from 'react'
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';

const Content = () => {
    const [images,setImages]=useState([]);
    const [term, setTerm]=useState('');

    useEffect(()=>{
        fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
        .then(res=>res.json())
        .then(data=>{
            setImages(data.hits);
        })
        .catch(err=>console.log(err))
    },[term]);

    return (
        <div className="container">
            <div className="max-w-full">
                <ImageSearch searchText={(text)=>setTerm(text)}/>
            </div>
          <div className="grid grid-cols-3 gap-4">
            {images.map(image=>(
                <ImageCard key={image.id} image={image}/>
            ))}
          </div>
        </div>
    )
}

export default Content
