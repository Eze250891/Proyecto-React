import { TYPES } from "../../actions/action"

import { useEffect, useReducer } from "react"
import { shoppingInitialState, shoppingReducer } from "../reducer/shoppingReducer"

import CartItem from "../atoms/CartItem"
import CardSeccion from "./CardSeccion"

import React from "react"
import Navbar from "./navbar"
import axios from "axios"


const ShoppingCart = () => {
    
        const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)
        
        const {products, cart} = state;
  // ACA IMPORTO DEL JSONSERVER .  Se hace ASINCRONICA porque puede tardar
        const updateState = async ()=> {

          //PASO 1 Declaro los enpoint a usar
          const URL_PRODUCTS = "http://localhost:5000/products";
          const URL_CART = "http://localhost:5000/cart";
          //PASO 2 -> Hago la petición al endpoint con axios. el await implica que puede tardar
          const resProducts = await axios.get(URL_PRODUCTS);
          const resCart = await axios.get(URL_CART);

          //PASO 3 -> las cosas que devuelve axios vienen como objetos. lo que me interesa es la .data
          const productList = resProducts.data;
          const cartList = resCart.data;
          
          console.log("shopping cart")
          console.log(productList)

          dispatch ({type: TYPES.READ_STATE, payload:{products: productList, cart:cartList}})
        }

        useEffect(() => {
          updateState()
        }, [])
        

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




