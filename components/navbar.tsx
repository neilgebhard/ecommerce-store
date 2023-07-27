import Link from 'next/link'
import Container from '@/components/container'
import MainNav from '@/components/main-nav'
import { getCategories } from '@/actions/get-categories'
import NavDropdown from '@/components/nav-dropdown'

const Navbar = async () => {
  const categories = await getCategories()

  return (
    <div className='border-b'>
      <Container>
        <div className='px-6 py-4 flex items-center gap-3'>
          <Link href='/' className='font-bold text-xl'>
            Store
          </Link>
          <MainNav data={categories} />
          <NavDropdown />
        </div>
      </Container>
    </div>
  )
}

export default Navbar
