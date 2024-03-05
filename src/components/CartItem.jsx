import products from '../products';
import {useContext} from 'react';
import {CartContext} from '../context/CartContext'


export default function CardItem({id, quantity}) {

const { removeItem } = useContext(CartContext);
function priceItems (id) {
return (quantity * item.price)}

const item = products.find(item => item.id === id)
  if (item == null) return null
  return (
    <>
<div className ="w-full flex flex-row p-5 gap-5 justify-center items-center">
      <img src={item.src} style={{objectFit:"scale-down", width: "120px", height: "80px"}}></img>
      <p>{item.name}</p>
      <p>{item.price} zł</p>
      <p>x{quantity}</p>
      <p className ="font-weight-bold font-xl">{priceItems(id)} zł</p>
      <button  className ="border-1 border-black uppercase"
      onClick ={() => removeItem(id) }>usuń</button>
    </div>
      <hr className ="m-auto"style={{width: "50%",}}></hr>
      </>
  )
}