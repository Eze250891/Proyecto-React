

//const Modal = ({id, name, image, cost, addToCart}) => {
const Modal = (props) => {


  const ID= props.id,
        modalID= props.modalid,
        name= props.name,
        image = props.image,
        cost=props.cost;
  
        const addToCart= props.addToCart

  return (
    <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto pointer-events-none"
          id={modalID} tabIndex="-1" aria-labelledby="exampleModalFullscreenLabel" aria-hidden="true">
      <div className=" modal-dialog modal-dialog-centered modal-lg relative w-auto pointer-events-none">
        <div className="modal-content border-none shadow-lg relative flex flex-col bg-white opacity-95 w-full  bg-clip-padding rounded-md outline-none text-current">
          <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 rounded-t-md pointer-events-auto">
            <button type="button" className="btn-close pointer-events-auto box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                    data-bs-dismiss="modal" aria-label="Close">  
            </button>
          </div>

          <div className="relative flex flex-row h-3/4">
            <div className="relative w-5/6 flex justify-center">
              <img className="object-contain w-auto h-auto md:w-3/4 brightness-120" src= {image} alt="zapatos" />
            </div>
      
            <div className="flex flex-col w-2/4">
              <div className="flex justify-center h-1/4">
                <h1 className="font-extralight text-xl lg:text-2xl capitalize text-black pointer-events-auto">
                {name}
                
                </h1>
              </div>
              <div className="flex justify-center h-1/4">
                <h2 className="font-sans text-2xl font-light text-black">
                  ${cost}
                </h2>
              </div>
              <div className="flex flex-col justify-center w-auto mx-auto text-sm list-none">
                  <li>Frente con cordones</li>
                  <li>Suela de goma</li>
                  <li>Forrado en gamuza</li>
                  <li>Plantilla acolchada</li>
                  <li>Pulido a mano</li>
              </div>

            </div>
          </div> 

          <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end w-2/3 p-4 rounded-b-md pointer-events-auto"> 
          <button onClick={()=>addToCart(ID)}> Hola</button>
          
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Modal;
