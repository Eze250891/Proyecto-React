


const CartItem = ({data, delFromCart}) => {

  const {id, name, price, quantity} = data;

  return (
    <div className='cart-item'>
        <h4>{name}</h4>
        <h5>$ {price} x {quantity} = {price * quantity}</h5>
        <button className='border mr-5' onClick={() => delFromCart(id)}>Eliminar uno</button>
        <button className='border' onClick={() => delFromCart(id, true)}>Eliminar dos</button>
    </div>
  )
}

export default CartItem