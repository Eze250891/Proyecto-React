
import React from 'react'
import header from '../assets/img/header.jpg';
<link rel="stylesheet" href="./Header.css" />

const Header = () => {
  return (
    
        <main >
              <div className='flex justify-start justify-items-center content-between items-center h-screen'>
                 <img src={header} alt=""/>
                <div className='mx-auto absolute pt-11'>
                    <a href="" className='m-5 text-2xl md:text-5xl xl:text-7xl  text-primary'> Vintage shop</a>
                </div>
              </div>
         
        </main>
           
    
    
  )
}

export default Header

