import { products } from '../../data/data'
import CardFuture from '../CardFolder/CardProduct'


const CardProcess = () => { 
  return (
<>
  { 
    products.map((products) => {
        return <CardFuture
            {...products}
            key={products.id}
        />
    })
    }
</>
    
  )
}

export default CardProcess