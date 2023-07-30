'use client'

import { Button } from '@/components/ui/button'
import { useCart } from '@/context/cart'
import { ShoppingBag } from 'lucide-react'
import { useRouter } from 'next/navigation'

const NavDropdown = () => {
  const router = useRouter()

  const { items } = useCart()

  return (
    <div className='ml-auto'>
      <Button
        variant='outline'
        size='sm'
        className='rounded-full'
        onClick={() => router.push('/cart')}
      >
        <ShoppingBag className='mr-2 h-4 w-4' /> {items?.length}
      </Button>
    </div>
  )
}

export default NavDropdown
