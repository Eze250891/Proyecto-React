import PropTypes from 'prop-types'

const Cart = (props) => {

    const totalPrecioCarrito = props.productos.reduce((accumulator, producto) => {
        return accumulator + producto.precio;
    }, 0);

    return (
        <div className={'fixed right-0 w-96 border-2 top-0 bottom-0 bg-pastelColor z-20 overflow-y-scroll'}>
            <div className={'border-2 m-2 p-2'}>
                Total $: {totalPrecioCarrito}
            </div>

            <button
                onClick={() => props.onClose()}
                className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                X
            </button>

            <button
                onClick={() => props.removerTodosLosProductos()}
                className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                LIMPIAR
            </button>

            {props.productos.map((producto, index) => {
                return (
                    <div className={'border-2 m-2 p-2'}>
                        <div>Cajita de producto Nro {index + 1}</div>
                        <div className={'font-bold'}>
                            {producto.name}
                        </div>
                        <div>
                            $ {producto.precio}
                        </div>
                        <button
                            onClick={() => { props.removerUnProducto(producto)   }}
                            className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            X
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

Cart.propTypes = {
    onClose: PropTypes.func.isRequired
}

export default Cart;
