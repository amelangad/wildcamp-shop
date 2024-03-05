import React, { useState, useContext } from 'react'
import transition from '../transition'
import { IoMdBasket } from "react-icons/io";
import products from '../products'
import Card from '../components/Card'
import CategoryBtns from '../components/CategoryBtns';
import { CartContext } from '../context/CartContext'
import Basket from '../components/Basket'


function Shop() {
  const { show, handleShow, CartQuantity } = useContext(CartContext);
  const [categories, setCategories] = useState(products);

  let categorysBtns = [...new Set(products.map(product => product.category))]

  const filterItems = (category) => {
    const newItems = products.filter(product => product.category === category)
    setCategories(newItems)
  }
  return (
    <div className="w-screen h-auto flex flex-col  items-center gap-2 relative ">
      <div className="fixed top-10 right-40 cursor-pointer z-50" onClick={handleShow}><IoMdBasket size={35} /></div>
      <div className =" fixed top-[55px] right-[135px] p-1 px-2 bg-[#759bcc] text-green text-xl rounded-full z-50">{CartQuantity}</div> 
        <div className={`${show ? 'vis' : 'hid'}  fixed  top-[0px] right-0  w-[500px] h-0 bg-[#425e3ede] `}>
        <Basket />
        </div>
      <div className="mt-40">
        <CategoryBtns
          categorysBtns={categorysBtns}
          filterItems={filterItems}
          setCategories={setCategories} />
      </div>
      <div className="w-full lg:w-4/5 h-auto justify-between items-center mt-40 flex flex-col lg:flex-row flex-wrap gap-20 mb-10">
        <Card categories={categories} />
      </div>
    </div>
  )
}



export default transition(Shop)
