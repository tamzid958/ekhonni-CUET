import ProductCard from './productCard';
import 'bootstrap/dist/css/bootstrap.min.css';
function CardSection({ data }) {

  return (
    <div className='p-5 '>
      <div className='border border-1 border-solid p-5 mb-5 '>
        <div className='row'>
          <div className='row-sm-3'>
            <ProductCard product={data} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardSection