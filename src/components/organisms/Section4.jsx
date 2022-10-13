
import React from 'react'
import img1 from '../../graphics/imagenes/Varios/img2Seccion4.jpg'
import banner1 from '../../graphics/imagenes/Varios/img1Seccion4.jpg'
import img3 from '../../graphics/imagenes/Varios/img3Seccion4.jpeg'





const Section4 = () => {
  return (
    <div className='w-screen flex bg-backgroundSeccion5 items-center p-8 gap-3 flex-col  md:flex-row md:justify-center'>
    
            <div className='p-2 mt-5 flex-auto w-16'>
                <h3 className='text-fontPrimary text-2xl sm:text-3xl sm:ml-5 sm:mt-9 md:text-5xl lg:text-6xl 2xl:text-7xl 2xl:ml-9 font-bold'>Titulo 1</h3>
                <div className='mb-2'> Lorem 1 ipsum dolor sit amet consectetur adipisicing elit. Facere doloremque harum pariatur
                 sunt quisquam, sequi esse excepturi eius maiores nesciunt corrupti voluptas! Tempora
                  obcaecati tenetur soluta dolorum neque, optio voluptas.</div>
                  <img src={img1} alt="" className='h-25 shadow-md rounded-md border-2' />
            </div>
            <div className=' p-5 mt-5 flex-auto w-72 '>
                <img src={banner1} alt="" className='rounded-md border-2' />
                <h3 className='text-fontPrimary font-bold'>Titulo 2</h3>
                <div className='mb-2'> Lorem 2 ipsum dolor sit amet consectetur adipisicing elit. Facere doloremque harum pariatur
                 sunt quisquam, sequi esse excepturi eius maiores nesciunt corrupti voluptas! Tempora
                  obcaecati tenetur soluta dolorum neque, optio voluptas.</div>
            </div>
            <div className='p-2 mt-5 flex-auto w-24 '>
                <h3 className='text-fontPrimary font-bold'>Titulo 3</h3>
                  <div className='mb-2'> Lorem 3 ipsum dolor sit amet consectetur adipisicing elit. Facere doloremque harum pariatur
                 sunt quisquam, sequi esse excepturi eius maiores nesciunt corrupti voluptas! Tempora
                  obcaecati tenetur soluta dolorum neque, optio voluptas.</div>
                  <img src={img3} alt="" className='rounded-md border-2'/>
            </div>
    </div>
  )
}

export default Section4

