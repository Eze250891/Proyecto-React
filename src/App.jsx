
import './App.css';
import CardSeccion from './components/CardSeccion';




function App() {
  return (
    <>  
      <div id='seccion1' className='bg-[#957C65] h-min-screen min-w-min items-center justify-center flex flex-col flex-wrap pb-44'>
      <h2 className='text-center font-bold my-14 text-6xl text-[#fefce8] capitalize'>últimas ofertas</h2>
      <CardSeccion />

        <button type="button"
          class="inline-block px-6 py-2.5 bg-skinColor text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          data-bs-toggle="modal" data-bs-target="#exampleModalFullscreen">
          Launch demo modal full screen
        </button>
      </div>

<div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
  id="exampleModalFullscreen" tabindex="-1" aria-labelledby="exampleModalFullscreenLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen modal-lg relative w-auto pointer-events-none">
    <div
      class="modal-content border-none shadow-lg relative flex flex-col bg-pastelColor opacity-90 w-full pointer-events-auto bg-clip-padding rounded-md outline-none text-current">
      <div
        class="modal-header flex flex-shrink-0 items-center justify-between p-4 rounded-t-md">
        <button type="button"
          class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close">  
        </button>
      </div>
    <div class="relative flex justify-start h-2/3">
          <div class="relative w-1/2 ml-4 bg-darkColor">......</div>
      
          <div class="flex flex-col justify-between w-1/2 ml-4 px-4 space-y-16">
            <div>
                <h1 class="mb-2 text-2xl font-bold leading-tight">
                    Ideas and UI components in your inbox
                </h1>
                <p class="text-sm text-gray-700">
                    Sign up to receive ideas, free components and free resources plus 15% on all of our pro UI kits.
                </p>
            </div>
          </div>
    </div>        
      <div
        class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 rounded-b-md">
      </div>
    </div>
  </div>
</div>

    </>
  );
}

export default App;
