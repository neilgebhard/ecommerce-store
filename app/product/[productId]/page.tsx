import { getProduct } from '@/actions/get-product'
import { getProducts } from '@/actions/get-products'
import Container from '@/components/container'
import Gallery from '@/components/gallery'
import ProductList from '@/components/product-list'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { formatToUSD } from '@/lib/utils'
import { ShoppingCart } from 'lucide-react'

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
            <h1 className='text-3xl font-bold'>{product.name}</h1>
            <p className='text-2xl mt-2'>
              {formatToUSD(Number(product.price))}
            </p>
            <Separator className='my-3 bg-neutral-200' />
            <div className='text-xl'>
              <div>
                <strong>Size</strong>: {product.size.name}
              </div>
              <div>
                <div className='flex gap-2 items-center'>
                  <div>
                    <strong>Color</strong>: {product.color.name}
                  </div>
                  <div
                    className='h-6 w-6 rounded-full border border-neutral-400'
                    style={{ backgroundColor: product.color.value }}
                  />
                </div>
              </div>
            </div>
            <Button className='text-lg mt-5'>
              <ShoppingCart className='mr-2 h-6 w-6' /> Add To Cart
            </Button>
          </div>
        </div>
        <Separator className='my-10 bg-neutral-200' />
        <ProductList products={suggestedProducts} title='Related Items' />
      </div>
    </Container>
  )
}

export default Page
