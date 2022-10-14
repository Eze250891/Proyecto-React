import { TYPES } from "../actions/action"

export const shoppingInitialState = {
    products: [
        {id: 1, name: "Producto A", price: 10},
        {id: 2, name: "Producto B", price: 78},
        {id: 3, name: "Producto C", price: 50},
        {id: 4, name: "Producto D", price: 150},
        {id: 5, name: "Producto E", price: 178},
    ],
    cart: []
}

export function shoppingReducer (state, action) {
        switch (action.type) {
            case TYPES.ADD_TO_CART: {
                const newItem = state.products.find(product => product.id === action.payload)
                
                const itemInCart = state.cart.find(item => item.id === newItem.id)
                
                return  itemInCart 
                    ? {
                         ...state,
                         cart: state.cart.map( item => 
                             item.id === newItem.id
                             ? {...item, quantity: item.quantity + 1}
                             : item
                         )
                    }
                    : {
                        ...state,
                        cart: [...state.cart, {...newItem, quantity: 1}]

                    }
            }
            case TYPES.REMOVE_ONE_PRODUCT: {
                 const itemToDelete = state.cart.find(item => item.id === action.payload)

                 console.log(itemToDelete)
                    
                return itemToDelete.quantity > 1
                    ? {
                          ...state,
                          cart: state.cart.map( item => 
                              item.id === action.payload
                              ? {...item, quantity: item.quantity - 1 }
                              : item
                          )
                      }
                      : {
                         ...state,
                         cart: state.cart.filter(item => item.id !== action.payload)
                    }
                }

            case TYPES.REMOVE_ALL_PRODUCTS: {
                return {
                    ...state,
                         cart: state.cart.filter(item => item.id !== action.payload)
                }
            }
            case TYPES.CLEAR_CART: {
                return shoppingInitialState
            }
                
        
            default:
                return state
        }
    }
