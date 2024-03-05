import React, {useContext} from 'react'
import { CartContext } from '../context/CartContext';

export default function Card({categories}) {

  const { getItemQuantity,  increaseQuantity, decreaseQuantity } = useContext(CartContext);
  return (
    
    <>
    {categories?.map(product => 
    {
      const quantity = getItemQuantity(product.id);
return (
      <div  key= {product.name}className =" w-full lg:w-[29%] h-auto flex flex-col justify-center items-start gap-5 shadow-md hover:shadow-xl p-5">
      <div className ="w-full flex justify-center items-center">
        <img src={product.src} alt ={product.name} className ="w-[300px] h-[200px] object-contain object-center"/>
        </div>
        <h1 className ="text-2xl">{product.name}</h1>
        <div className="text-sm content-min font-light leading-7">{product.desc}</div>
        <div>{product.price} zł</div>
        {quantity === 0 ?
         (
           <button className="bg-[#c9f0b3] p-5" type="button" onClick= {() =>increaseQuantity(product.id)}>Add to basket</button>
          ) :
          (
        <div className =" w-full flex flex-row gap-3 justify-center items-center">
              <button  className="bg-[#f1b2a7] p-5" type="button" onClick={() => decreaseQuantity(product.id)}>-</button>
              <div  className={`${quantity === 0? 'bg-[#474545]' : 'bg-[#64eb76]'} p-5`}>{quantity} w koszyku</div>
              <button className="bg-[#c9f0b3] p-5" type="button" onClick= {() =>increaseQuantity(product.id)}>+</button>
              </div>)}
    </div>
)})}
    </>
 

    
  )
}
