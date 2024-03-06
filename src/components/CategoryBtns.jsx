import React from 'react'
import products from '../products'

export default function CategoryBtns({ categorysBtns, filterItems, setCategories }) {
    return (
        <div  className="w-full text-xl flex flex-col lg:flex-row flex-wrap justfy-center items-center gap-10 z-[60]">
            {categorysBtns.map(item => (
                <button type="button" className="uppercase" key={item}
                   onClick = {() => filterItems(item)}>
                    {item}
                </button>
            ))}
            <button type="button" className =" px-5 uppercase" onClick={() => {setCategories(products)}}
            >Wszystkie </button>
        </div>
    )
}
