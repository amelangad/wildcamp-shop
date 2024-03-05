import React from 'react'
import products from '../products'

export default function CategoryBtns({ categorysBtns, filterItems, setCategories, categories }) {
    return (
        <div  className="w-full text-xl flex flex-row flex-wrap justfy-center items-center gap-10">
            {categorysBtns.map(item => (
                <button  className="uppercase"
                   onClick = {() => filterItems(item) }>
                    {item}
                </button>
            ))}
            <button className =" px-5 uppercase" onClick={() => {setCategories(products) }}
            >Wszystkie </button>
        </div>
    )
}
