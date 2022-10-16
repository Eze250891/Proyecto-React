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
        //cart.map((cartItem, i)=> console.log(cartItem.id))
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
         

          dispatch ({type: TYPES.READ_STATE, payload:{products: productList, cart:cartList}})
        }

        useEffect(() => {
          updateState()
        }, [])
        

        const addToCart = async (product) => {
          
          const isProductInCart= cart.find(item => item.id === product.id)
          console.log("Chequeo")
          console.log(isProductInCart)
          if (isProductInCart) {
            // Borrar Rey
            console.log("si señor")
            
          } else {

            console.log("no papu")
            const options={
              method:"POST",
              headers: {'Content-Type': 'application/json'},
              data: JSON.stringify(product)
            }
            const res = await axios("http://localhost:5000/cart", options),
            resproducto= await res.data
            //Borrar Rey
            if (resproducto) {
              alert("Producto Agregado!")
            } else {
              console.log("fallo la agrega")
            }
          
          }
         


         
          
          //dispatch({type: TYPES.ADD_TO_CART, payload: resproducto.id})


        }

        const delFromCart = (id, all = false) => {
          if (all) {
            dispatch ({type: dispatch({type: TYPES.REMOVE_ALL_PRODUCTS, payload : id})})
          } else {
            dispatch ({type: TYPES.REMOVE_ONE_PRODUCT, payload : id})
          }
        }
        // CAMBIE ACA
        //const clearCart= () => dispatch ({type: TYPES.CLEAR_CART})
        
        const clearCart= () => {
          dispatch ({type: TYPES.CLEAR_CART})
          dispatch ({type: TYPES.UPDATE_STATE})
        }
       
  return (
    <>


        <Navbar cart={cart} delFromCart={delFromCart} clearCart={clearCart}/>
        
        <CardSeccion products={products}addToCart={addToCart}/>
        

        
    </>
  )
}

export default ShoppingCart




