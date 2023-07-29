'use client'

import { formatToUSD } from '@/lib/utils'
import { Product } from '@/types'
import { Expand, ShoppingBagIcon, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { useProductModal } from '@/context/product-modal'
import { MouseEventHandler } from 'react'

const ProductCard = ({ product }: { product: Product }) => {
  const router = useRouter()
  const { openProductModal } = useProductModal()

  const handleClick = () => router.push(`/product/${product.id}`)

  const handleExpand: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()
    openProductModal(product)
  }

  return (
    <div className='group space-y-4 cursor-pointer' onClick={handleClick}>
      <div className='aspect-square bg-gray-100 relative rounded overflow-hidden'>
        <Image
          src={product?.images[0]?.url}
          alt={`Picture of ${product.name}`}
          fill
          className='object-cover'
        />
        <div className='absolute bottom-5 flex justify-center w-full gap-10 opacity-0 group-hover:opacity-100'>
          <Button
            size='icon'
            variant='outline'
            className='rounded-full hover:scale-110 transition cursor-pointer'
            onClick={handleExpand}
          >
            <Expand />
          </Button>
          <Button
            size='icon'
            variant='outline'
            className='rounded-full hover:scale-110 transition cursor-pointer'
          >
            <ShoppingBagIcon />
          </Button>
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
