import { getProduct } from '@/actions/get-product'
import { getProducts } from '@/actions/get-products'
import Container from '@/components/container'
import Gallery from '@/components/gallery'
import ProductInfo from '@/components/product-info'
import ProductList from '@/components/product-list'
import { Separator } from '@/components/ui/separator'

type Props = {
  params: {
    productId: string
  }
}

const Page: React.FC<Props> = async ({ params }) => {
  const product = await getProduct(params.productId)

  const suggestedProducts = await getProducts({
    categoryId: product.category.id,
  })

  return (
    <Container>
      <div className='px-6 my-10'>
        <div className='md:grid md:grid-cols-2 md:gap-8'>
          <Gallery images={product.images} />
          <div className='mt-10 md:mt-0'>
            <ProductInfo product={product} />
          </div>
        </div>
        <Separator className='my-10 bg-neutral-200' />
        <ProductList products={suggestedProducts} title='Related Items' />
      </div>
    </Container>
  )
}

export default Page
