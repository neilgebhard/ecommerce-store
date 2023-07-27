import { formatToUSD } from '@/lib/utils'
import { Product } from '@/types'
import { Expand, ShoppingCart } from 'lucide-react'
import Image from 'next/image'

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className='group space-y-4 cursor-pointer'>
      <div className='aspect-square bg-gray-100 relative'>
        <Image
          src={product?.images[0]?.url}
          alt={`Picture of ${product.name}`}
          fill
          className='object-cover'
        />
        <div className='absolute bottom-5 flex justify-center w-full gap-10 opacity-0 group-hover:opacity-100'>
          <Expand className='w-10 h-10 rounded-full hover:scale-110 transition cursor-pointer bg-white p-1' />
          <ShoppingCart className='w-10 h-10 rounded-full hover:scale-110 transition cursor-pointer bg-white p-1' />
        </div>
      </div>
      <div>
        <p className='text-lg font-semibold'>{product.name}</p>
        <p className='text-neutral-500'>{product.category.name}</p>
      </div>
      <div>{formatToUSD(Number(product.price))}</div>
    </div>
  )
}

export default ProductCard
