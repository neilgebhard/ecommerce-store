import Filter from '@/components/filter'
import ProductCard from '@/components/product-card'
import { Color, Product, Size } from '@/types'

type Props = {
  products: Product[]
  sizes: Size[]
  colors: Color[]
}

const Client: React.FC<Props> = ({ products, sizes, colors }) => {
  return (
    <div>
      <div className='md:grid md:grid-cols-5 md:gap-8'>
        <div className='space-y-8'>
          <Filter valueKey='sizeId' title='Sizes' data={sizes} />
          <Filter valueKey='colorId' title='Colors' data={colors} />
        </div>
        <h1 className='md:col-span-4'>
          <div className='grid grid-cols-3 gap-3'>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </h1>
      </div>
    </div>
  )
}

export default Client
