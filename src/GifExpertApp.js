import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';




const GifExpertApp = ()=>{

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball']
    const [categories, setCategories] = useState(['One Punch'])
    
    // const handleAdd = ()=>{
    //     setCategories([...categories,'HunterX']);
    //     // setCategories( cats => [..cats, 'HunterX']);
    // }
    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>

            {/* <button onClick={ handleAdd }>Agregar</button> */}

            <ol>
                { 
                    categories.map( category => (
                        
                        <GifGrid
                            key={category}
                            category = {category}
                        />
                    ))
                }
            </ol>
        </>    
    )
}


export default GifExpertApp;