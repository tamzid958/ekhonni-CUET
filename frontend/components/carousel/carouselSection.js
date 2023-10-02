import ColorfulCarousel from "./carousel"
import CategoryList from "../categorylist"



const CarouselSection = () => {
    
  return (
    <div className='row'>
       <div className='col-sm-4'>
         <CategoryList/>
       </div>
      <div className='col-sm-8'>
      <ColorfulCarousel/>
       </div>

    </div>
  )
}

export default CarouselSection ;