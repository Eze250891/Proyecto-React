import Card from './Card.jsx'
import ImgCard from './ImgCard.jsx'


export const CardSeccion1 = () => {
  return (
    <>
      <div id='seccion1' className='bg-[#957C65] h-min-screen min-w-min items-center justify-center flex flex-col flex-wrap pb-10'>
        <h2 className='text-center font-bold my-14 text-6xl text-[#fefce8] capitalize'>últimas ofertas</h2>
          <div className='flex flex-wrap justify-center w-auto gap-6 my-4 space-x-1 sm:gap-4 h-min-screen md:grid md:grid-cols-3 xl:grid-cols-5'>
            {ImgCard.map((item,i) =>
              <Card key={i} value={item} index={i} />
              )}
          </div>
      </div>
    </>
  )
}

export default CardSeccion1;
