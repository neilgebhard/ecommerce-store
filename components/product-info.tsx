'use client'

import { Product } from '@/types'
import { formatToUSD } from '@/lib/utils'
import { ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

type Props = {
  product: Product
}

const ProductInfo: React.FC<Props> = ({ product }) => {
  const handleClick = () => {
    console.log('click')
  }

  return (
    <div>
      <h1 className='text-3xl font-bold'>{product.name}</h1>
      <p className='text-2xl mt-2'>{formatToUSD(Number(product.price))}</p>
      <Separator className='my-3 bg-neutral-200' />
      <div className='text-xl'>
        <div>
          <strong>Size</strong>: {product.size.name}
        </div>
        <div>
          <div>
            <div>
              <strong>Color</strong>:{' '}
              <div className='inline-flex items-center gap-2'>
                {product.color.name}
                <span
                  className='h-6 w-6 rounded-full border border-neutral-400 inline-block'
                  style={{ backgroundColor: product.color.value }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button className='text-lg mt-5' onClick={handleClick}>
        <ShoppingCart className='mr-2 h-6 w-6' /> Add To Cart
      </Button>
    </div>
  )
}

export default ProductInfo
