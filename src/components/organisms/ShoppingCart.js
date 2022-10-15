import { TYPES } from "../actions/action"

import { useReducer } from "react"
import { shoppingInitialState, shoppingReducer } from "../reducer/shoppingReducer"

import CartItem from "../atoms/CartItem"
import CardSeccion from "./CardSeccion"



const ShoppingCart = () => {
    
        const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)
        
        const {products, cart} = state;

        const addToCart = (id) => {
          console.log("este ID " + id)
          dispatch({type: TYPES.ADD_TO_CART, payload: id})
        }

        const delFromCart = (id, all = false) => {
          if (all) {
            dispatch ({type: dispatch({type: TYPES.REMOVE_ALL_PRODUCTS, payload : id})})
          } else {
            dispatch ({type: TYPES.REMOVE_ONE_PRODUCT, payload : id})
          }
        }

        const clearCart= () => dispatch ({type: TYPES.CLEAR_CART})
        

  return (
    <>
  

        <CardSeccion products={products}addToCart={addToCart}/>

        <h3>Carrito</h3>
        <div className="bg-primary">
          {
            cart.map((item, index) => <CartItem 
                key={index}
                data={item}
                delFromCart={delFromCart}
            />)
          }

        </div>
        <button onClick={() => clearCart()}> Limpiar carrito</button>
    </>
  )
}

export default ShoppingCart





{/* <h2>Carrito de pro</h2>
        <h3>Productos</h3>
        <div className=" flex flex-wrap justify-between gap-9 bg-primary ">
          {
            products.map(product => <Product
             key={product.id}
             product={product}
             addToCart={addToCart}
            />)
          }
           

        </div>
        <h3>Carrito</h3>
        <div className="bg-primary">
          {
            cart.map((item, index) => <CartItem 
                key={index}
                data={item}
                delFromCart={delFromCart}
            />)
          }

        </div>
        <button onClick={() => clearCart()}> Limpiar carrito</button> */}