import { getProducts } from '@/actions/get-products'
import Container from '@/components/container'
import ProductList from '@/components/product-list'

const Page = async () => {
  const products = await getProducts({ isFeatured: true })

  return (
    <Container>
      <main className='px-6 my-10'>
        <ProductList products={products} title='Featured' />
      </main>
    </Container>
  )
}

export default Page
