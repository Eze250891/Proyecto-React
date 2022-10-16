

const CartItem = ({item, delFromCart}) => {
  
  //const {id, title, price, quantity, img} = item;
  
  return (
    <div className='cart-item w-full border-black border-2 m-px rounded flex flex-col items-center'>
        <h4>{item.title.toUpperCase()}</h4>
        <img className="object-contain h-auto mt-1 rounded-full w-24 md:w-28 brightness-120" src={`${item.img}`} alt="" />
        <h5>$ {item.price} x {item.quantity} = {item.price * item.quantity}</h5>
        
        <div className="flex justify-around">
          <button className='border-black border-2 rounded-md' onClick={() => delFromCart(item)}>Eliminar uno</button>
          <button className='border-black border-2 rounded-md' onClick={() => delFromCart(item, true)}>Eliminar todo</button>
        </div>
    </div>
  )
}

export default CartItem