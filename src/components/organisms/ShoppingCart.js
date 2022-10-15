import { TYPES } from "../actions/action"

import { useReducer } from "react"
import { shoppingInitialState, shoppingReducer } from "../reducer/shoppingReducer"

import CartItem from "../atoms/CartItem"
import CardSeccion from "./CardSeccion"

import React from "react"
import Navbar from "./navbar"


const ShoppingCart = () => {
    
        const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)
        
        const {products, cart} = state;

        const addToCart = (id) => {
          
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

        <Navbar cart={cart} delFromCart={delFromCart} clearCart={clearCart}/>
        
        <CardSeccion products={products}addToCart={addToCart}/>

        
    </>
  )
}

export default ShoppingCart




