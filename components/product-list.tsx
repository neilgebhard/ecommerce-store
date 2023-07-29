import { Product } from '@/types'
import NoResults from '@/components/no-results'
import ProductCard from '@/components/product-card'

type Props = {
  title: string
  products: Product[]
}

const ProductList: React.FC<Props> = ({ title, products }) => {
  return (
    <div>
      <h2 className='font-bold text-2xl mb-3'>{title}</h2>
      {products.length === 0 && <NoResults />}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductList
