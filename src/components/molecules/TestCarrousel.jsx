import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



import React from 'react'
import CardTest from '../atoms/CardTest';
const options={
    margin: 0,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: false,
    navText: ["Anterior", "Siguiente"],
    smartSpeed: 500,
    responsive: {
        0: {
            items: 2,
            margin: 10,
            navText: ["Anterior", "Siguiente"],
        },
        400: {
            items: 2,
            margin:10,
            navText: ["Anterior", "Siguiente"],
        },
        600: {
            items: 2,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 5,

        }
    },
};


const TestCarrousel = () => {
   
  return (
    <>
    <OwlCarousel className='owl-theme bg-secondaryColor' {...options}>
    <div className='item flex justify-center mt-2.5'>
        <CardTest/>
    </div>
    <div className='item flex justify-center mt-2.5'>
        <CardTest/>
    </div>
    <div className='item flex justify-center mt-2.5'>
        <CardTest/>
    </div>
    <div className='item flex justify-center mt-2.5'>
        <CardTest/>
    </div>
    <div className='item flex justify-center mt-2.5'>
        <CardTest/>
    </div>
    <div className='item flex justify-center mt-2.5'>
        <CardTest/>
    </div>
    <div className='item flex justify-center'>
        <CardTest/>
    </div>
    <div className='item flex justify-center'>
        <CardTest/>
    </div>
    <div className='item flex justify-center'>
        <CardTest/>
    </div>
    <div className='item flex justify-center'>
        <CardTest/>
    </div>
    <div className='item flex justify-center'>
        <CardTest/>
    </div>
    <div className='item flex justify-center'>
        <CardTest/>
    </div>
    </OwlCarousel>
    </>
    
    
    
    
  )
}

export default TestCarrousel