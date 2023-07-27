import { Button } from '@/components/ui/button'
import { ShoppingBag } from 'lucide-react'

const NavDropdown = () => {
  return (
    <div className='ml-auto'>
      <Button variant='outline' size='sm' className='rounded-full'>
        <ShoppingBag className='mr-2 h-4 w-4' /> 0
      </Button>
    </div>
  )
}

export default NavDropdown
