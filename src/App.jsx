
import './App.css';
import CardSeccion from './components/CardSeccion.jsx';




function App() {
  return (
    <>  
      <div id='seccion1' className='bg-[#957C65] h-min-screen min-w-min items-center justify-center flex flex-col flex-wrap pb-44'>
      <h2 className='text-center font-bold my-14 text-6xl text-[#fefce8] capitalize'>últimas ofertas</h2>
      <CardSeccion />
      </div>
    </>
  );
}

export default App;
