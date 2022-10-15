


const CartItem = ({data, delFromCart}) => {

  const {id, title, price, quantity, img} = data;
  
  return (
    <div className='cart-item w-full border-black border-2 m-px rounded flex flex-col items-center'>
        <h4>{title.toUpperCase()}</h4>
        <img className="object-contain h-auto mt-1 rounded-full w-24 md:w-28 brightness-120" src={img} alt="" />
        <h5>$ {price} x {quantity} = {price * quantity}</h5>
        
        <div className="flex justify-around">
          <button className='border-black border-2 rounded-md' onClick={() => delFromCart(id)}>Eliminar uno</button>
          <button className='border-black border-2 rounded-md' onClick={() => delFromCart(id, true)}>Eliminar todo</button>
        </div>
    </div>
  )
}

export default CartItem