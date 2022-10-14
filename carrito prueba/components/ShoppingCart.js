import { TYPES } from "../actions/action"

import { useReducer } from "react"
import { shoppingInitialState, shoppingReducer } from "../reducer/shoppingReducer"
import Product from "./Product"
import CartItem from "./CartItem"



const ShoppingCart = () => {
    
        const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)
        
        const {products, cart} = state;

        const addtoCart = () => {}

        const delFromCart = () => {}

        const cleanCart= () => {}
        

  return (
    <>
        <h2>Carrito de pro</h2>
        <h3>Productos</h3>
        <div className=" flex flex-wrap justify-between gap-9 bg-primary ">
          {
            products.map(product => <Product
             key={product.id}
             product={product}
            />)
          }
            <Product/>

        </div>
        <h3>Carrito</h3>
        <div className="bg-primary">
          <CartItem/>

        </div>
        <button> Limpiar carrito</button>
    </>
  )
}

export default ShoppingCart