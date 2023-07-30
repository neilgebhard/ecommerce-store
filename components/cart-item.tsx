import { Product } from '@/types'
import Image from 'next/image'
import { formatToUSD } from '@/lib/utils'
import { useCart } from '@/context/cart'

const CartItem = ({ item }: { item: Product }) => {
  const { removeItem } = useCart()

  return (
    <div className='flex gap-3'>
      <div className='relative h-48 w-48 rounded overflow-hidden aspect-square border'>
        <Image
          className='object-cover'
          src={item.images[0].url}
          alt={`${item.name} image`}
          fill
        />
      </div>
      <div>
        <div className='text-lg'>{item.name}</div>
        <div className='font-bold mb-4'>{formatToUSD(Number(item.price))}</div>
        <div className='text-muted-foreground'>{item.size.name}</div>
        <div className='flex items-center gap-2'>
          <div className='text-muted-foreground'>{item.color.name}</div>
          <div
            className='h-4 w-4 border rounded-full'
            style={{ backgroundColor: item.color.value }}
          />
        </div>
        <button
          className='text-blue-500 hover:underline text-sm mt-3'
          onClick={() => removeItem(item.id)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default CartItem
