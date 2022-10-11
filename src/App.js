import {useState} from "react";

import Main from "./components/atoms/main";
import Navbar from "./components/atoms/navbar";
import Footer from "./components/organisms/Footer";
import Seccion3 from './components/atoms/seccion3.jsx';
import Seccion5 from './components/atoms/seccion5.jsx';

import Cart from "./components/organisms/cart/Cart";

function App() {
  const [showCart, setShowCart] = useState(false);

  const [productos, setProductos] = useState([]);

    //producto = {id: 2, name: "un nombre", precio: 10}
  const agregarProductoAlCarrito = (producto) => {
      const nuevosProductos = [...productos];

      nuevosProductos.push(producto)

      setProductos(nuevosProductos);

      setShowCart(true);
  }

  const removerUnProducto = (productoParaRemover) => {
      const indiceDeProductoParaRemover = productos.indexOf(productoParaRemover);

      const nuevosProductos = [...productos];

      nuevosProductos.splice(indiceDeProductoParaRemover, 1);

      setProductos(nuevosProductos);
  }

  const removerTodosLosProductos = () => {
      setProductos([])
  }

  return (
    <>
      {showCart === true &&
          <Cart
              onClose={() => setShowCart(false)}
              productos={productos}
              removerTodosLosProductos={removerTodosLosProductos}
              removerUnProducto={removerUnProducto}
          />
      }
      <Main/>
      <Navbar
        openCart={() => setShowCart(true)}
      />
        <div className={'w-30 m-3 border-2 p-2'}>
            ZAPATO 1
            <img src="https://equus.vtexassets.com/arquivos/ids/194486-1200-auto?v=637242078205870000&width=1200&height=auto&aspect=truehttps://equus.vtexassets.com/arquivos/ids/194486-1200-auto?v=637242078205870000&width=1200&height=auto&aspect=true" width={200} alt=""/>
            <button
                className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
                type="button"
                onClick={() => agregarProductoAlCarrito({id: 1, name: "ZAPATO 123", precio: 10})}>
                agregar ZAPATO
            </button>
        </div>
        <div className={'w-30 m-3 border-2 p-2'}>
            JAMON
            <img src="data:image/jpeg;base64,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" alt=""/>
            <button
                className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
                onClick={() => agregarProductoAlCarrito({id: 2, name: "jamon", precio: 9})}>
                agregar JAMON
            </button>
        </div>

      <Seccion3 />
      <Seccion5 />
      <Footer/>
    </>
  );
}

export default App;

