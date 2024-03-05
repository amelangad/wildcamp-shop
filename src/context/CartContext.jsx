import { createContext, useState } from "react";

export const CartContext = createContext({});


function CartProvider ({children}) {
    const [show, setShow] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const handleShow = () => setShow(!show);

    function getItemQuantity(id) {
        return cartItems.find(item =>item.id === id)?.quantity || 0;
    }

    const CartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)



    function increaseQuantity(id){
        setCartItems(items => {
            if(items.find(el=> el.id === id) == null){
                return [...items,  {id, quantity:1}]
            }
            else {
                return items.map(item => {
                    if (item.id ===id){
                        return { ...item, quantity: item.quantity + 1}
                    }
                    else {
                        return item
                    }
                })
            }
        })
        }
        function decreaseQuantity(id){
            setCartItems(currItems => {
                if(currItems.find(item=> item.id === id).quantity === 1){
                    return currItems.filter(item => item.id !== id)
                }
                else {
                    return currItems.map(item => {
                        if (item.id ===id){
                            return { ...item, quantity: item.quantity - 1}
                        }
                        else {
                            return item
                        }
                    })
                }
            })
            }

            function removeItem(id) {
                setCartItems(items => {
                    return items.filter(item => item.id !== id) 
                    })
            }


    return (
    <CartContext.Provider value ={{show, handleShow, getItemQuantity, increaseQuantity, decreaseQuantity, CartQuantity, removeItem, cartItems}}>
        {children}
    </CartContext.Provider>
    )
}

export default CartProvider;