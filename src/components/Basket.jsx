import React, { useContext, useState, useEffect } from 'react'
import products from '../products';
import { CartContext } from '../context/CartContext'
import CartItem from './CartItem'
import {Link} from 'react-router-dom'


export default function Basket() {
  const { cartItems, CartQuantity } = useContext(CartContext)
  let [result, setResult] = useState(0);

  useEffect(() => {
    let res = 0
    cartItems.forEach(item => {
      if (item.quantity > 0){
        let product = products.find(el =>el.id === item.id)
        res += product.price * item.quantity;
      }})
      setResult(res)
  }, [CartQuantity]);


  return (
    <div className="mt-20 w-full h-auto">
      <div className ="relative flex w-[70px] justify-start m-5 text-xl font-light uppercase after:absolute after:top-7 after:w-[0px] after:h-[1px]  hover:after:w-full after:transition-all duration-300  after:bg-black"><Link to ="/">Home</Link></div>
      <h1 className ="px-5">Your choice:</h1>
      {cartItems?.map(item => (
        <CartItem key={item.id} {...item} />
      ))}
      <div className ="flex mx-5 my-10 justify-end text-5xl ">{result} zł</div>
      <div className ="w-full flex justify-center items-center my-5">
      <button className ="p-5 border-black border-[1px]">Zapłać</button></div>
    </div>
  )
}
