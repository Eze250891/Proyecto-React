import React from 'react'
import usuario from '../../graphics/imagenes/Varios/usuario.jpg'


const Navbar = () => {
  return (
    <>
    <nav className="
  sticky top-0
  z-40
  w-full
  flex flex-wrap
  items-center
  justify-between
  py-2
  bg-navbarColor
  text-gray-500
  navbar navbar-expand-lg navbar-light
  ">
  <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
  <button className="
      navbar-toggler
      sm:z-40
      border-0
      py-2
    " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
 className="w-7" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path fill="#957C65"
      d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
    </path>
  </svg>
  </button>
  <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
  <a className="
        flex
        items-center
        text-gray-900
        hover:text-gray-900
        focus:text-gray-900
        mt-2
        lg:mt-0
        mr-1
      " href="!#">
    <img src="./icon.png"  alt=""
      loading="lazy" className='h-9'/>
  </a>
  {/* <!-- Left links --> */}
  <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
    <li className="nav-item p-2">
      <a className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0 text-fontPrimary text-fontprimary" href="!#">Vintage Gentleman</a>
    </li>
    <li className="nav-item p-2">
      <a className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0 text-fontPrimary text-fontprimary" href="!#">Guia de talles</a>
    </li>
    <li className="nav-item p-2">
      <a className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0 text-fontPrimary" href="!#">Sucursales</a>
    </li>
    <li className="nav-item p-2">
      <a className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0 text-fontPrimary" href="!#">Nosotros</a>
    </li>
    <li className="nav-item p-2">
      <a className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0 text-fontPrimary" href="!#">Contacto</a>
    </li>
  </ul>
  {/* <!-- Left links --> */}
  </div>
  {/* <!-- Collapsible wrapper --> */}

  {/* <!-- Right elements --> */}
  <div className="flex items-center relative">
  {/* <!-- Icon --> */}
  <a className=" hover:text-gray-700 focus:text-gray-700 mr-2" href="!#">
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart"
     className="" role="img" xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24"><path fill="#957C65" d="M5 22h14a2 2 0 0 0 2-2V9a1 1 0 0 0-1-1h-3v-.777c0-2.609-1.903-4.945-4.5-5.198A5.005 5.005 0 0 0 7 7v1H4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2zm12-12v2h-2v-2h2zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zm-2 3h2v2H7v-2z"></path>
     
    </svg>
  
  </a>




  {/* <div className="dropdown relative">
    <a className="
          text-gray-500
          hover:text-gray-700
          focus:text-gray-700
          mr-4
          dropdown-toggle
          hidden-arrow
          flex items-center
        " href="!#" id="dropdownMenuButton1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell"
     className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path fill="currentColor"
          d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z">
        </path>
      </svg>
      <span className="text-white bg-red-700 absolute rounded-full text-xs -mt-2.5 ml-2 py-0 px-1.5">1</span>
    </a>
    <ul className="
      dropdown-menu
      min-w-max
      absolute
      hidden
      bg-white
      text-base
      z-50
      float-left
      py-2
      list-none
      text-left
      rounded-lg
      shadow-lg
      mt-1
     
      m-0
      bg-clip-padding
      border-none
      left-auto
      right-0
    " aria-labelledby="dropdownMenuButton1">
      <li>
        <a className="
          dropdown-item
          text-sm
          py-2
          px-4
          font-normal
          block
          w-full
          whitespace-nowrap
          bg-transparent
          text-gray-700
          hover:bg-gray-100
        " href="!#">Action</a>
      </li>
      <li>
        <a className="
          dropdown-item
          text-sm
          py-2
          px-4
          font-normal
          block
          w-full
          whitespace-nowrap
          bg-transparent
          text-gray-700
          hover:bg-gray-100
        " href="!#">Another action</a>
      </li>
      <li>
        <a className="
          dropdown-item
          text-sm
          py-2
          px-4
          font-normal
          block
          w-full
          whitespace-nowrap
          bg-transparent
          text-gray-700
          hover:bg-gray-100
        " href="!#">Something else here</a>
      </li>
    </ul>
  </div> */}
  <div className="dropdown relative ml-3">
    <a className="dropdown-toggle flex items-center hidden-arrow" href="!#" id="dropdownMenuButton2" role="button"
      data-bs-toggle="dropdown" aria-expanded="false">
      <img src={usuario} className="rounded-full h-12"
         alt="" loading="lazy" />
    </a>
    {/* <ul className="
    dropdown-menu
    min-w-max
    absolute
    hidden
    bg-white
    text-base
    z-50
    float-left
    py-2
    list-none
    text-left
    rounded-lg
    shadow-lg
    mt-1
    
    m-0
    bg-clip-padding
    border-none
    left-auto
    right-0
  " aria-labelledby="dropdownMenuButton2">
      <li>
        <a className="
        dropdown-item
        text-sm
        py-2
        px-4
        font-normal
        block
        w-full
        whitespace-nowrap
        bg-transparent
        text-gray-700
        hover:bg-gray-100
      " href="!#">Action</a>
      </li>
      <li>
        <a className="
        dropdown-item
        text-sm
        py-2
        px-4
        font-normal
        block
        w-full
        whitespace-nowrap
        bg-transparent
        text-gray-700
        hover:bg-gray-100
      " href="!#">Another action</a>
      </li>
      <li>
        <a className='
        dropdown-item
        text-sm
        py-2
        px-4
        font-normal
        block
        w-full
        whitespace-nowrap
        bg-transparent
        text-gray-700
        hover:bg-gray-100
      ' href="!!#">Something else here</a>
      </li>
    </ul> */}
  </div>
  </div>
  {/* <!-- Right elements --> */}
  </div>
</nav>
    </>
  )
}
 
export default Navbar




