import Filter from '@/components/filter'
import NoResults from '@/components/no-results'
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
        <div className='col-span-2 md:col-span-4 mt-10 md:mt-0'>
          {products.length === 0 && <NoResults />}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Client
