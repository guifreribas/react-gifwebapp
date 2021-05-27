import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ( {category} ) => {


    // const [images, setimages] = useState([])

    const { data:images, loading } = useFetchGifs(category);
    

    
    // getGifs();
    
    return (
        <>
            <h3> { category } </h3>

            { loading && <p>Loading...</p> }
            
            <div className="card-grid animate__bounce animate__fadeIn">
            
            
                {
                    images.map( (img )=>  {
                        return <GifGridItem 
                            key = {img.id}
                            {...img}
                        />
                    })
                }
            

            </div>
        </>
            
    )
}
