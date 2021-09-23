import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

export const GifExpertApp = () => {

    //const categorias = ['Midori', 'Morrigan', 'Mercy', 'Widowmaker'];

    //const [categories, setCategories] = useState(['Midori', 'Morrigan', 'Mercy', 'Widowmaker']);
    const [categories, setCategories] = useState(['Midori']);

   /*  const handleAdd = () => {
        ///setCategories( [...categories, 'Felicia'] );
        setCategories( cats =>  [...categories, 'Felicia'] );
    } */

    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>

{/*             <button onClick={ handleAdd }>Agregar</button>
 */}
            <ol>
                {/* {
                    categories.map( (category, i) => {
                        return <li key={ category }>{ category }</li>
                    })
                } */}

                {
                    categories.map( category => (
                        <GiftGrid
                        key={ category } 
                        category={ category } />
                    ))
                }
            </ol>
        </>
    )
}
