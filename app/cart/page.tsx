'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useCart } from '@/context/cart'
import CartItem from '@/components/cart-item'
import Container from '@/components/container'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { formatToUSD } from '@/lib/utils'
import axios from 'axios'
import toast from 'react-hot-toast'

const Page = () => {
  const { items, clearItems } = useCart()
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(false)

  const success = searchParams.get('success')
  const canceled = searchParams.get('canceled')

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        toast.success('Payment successful')
        clearItems()
      }, 500)
    }

    if (canceled) {
      setTimeout(() => {
        toast.error('Payment canceled')
      }, 500)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams])

  // if (items.length === 0)
  //   return (
  //     <div className='my-20 text-xl text-muted-foreground text-center'>
  //       Cart is empty.
  //     </div>
  //   )

  const subTotal = items.reduce((acc, item) => acc + Number(item.price), 0)

  const handleClick = async () => {
    setLoading(true)
    const productIds = items.map((item) => item.id)
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
        { productIds }
      )
      window.location = response.data.url
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <Container>
        <div className='px-6 my-10'>
          <h1 className='text-2xl font-bold'>Shopping Cart</h1>
          <Separator className='my-8' />
          <div className='sm:grid sm:grid-cols-12 sm:gap-4'>
            <div className='col-span-7 space-y-4'>
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
              <div className='my-20 text-xl text-muted-foreground text-center'>
                Cart is empty.
              </div>
            </div>
            <div className='col-span-5 mt-10 sm:mt-0'>
              <div className='bg-neutral-50 p-4 rounded border'>
                <h2 className='text-lg font-semibold'>Order Summary</h2>
                <Separator className='my-4' />
                <div className='flex justify-between items-center'>
                  <div>Subtotal ({items.length} item):</div>
                  <div className='font-bold'>{formatToUSD(subTotal)}</div>
                </div>
                <Button
                  className='mt-6 w-full'
                  onClick={handleClick}
                  disabled={loading}
                >
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Page
