import { getColors } from '@/actions/get-colors'
import { getProducts } from '@/actions/get-products'
import { getSizes } from '@/actions/get-sizes'
import Container from '@/components/container'
import Client from './client'

type Props = {
  params: {
    categoryId: string
  }
  searchParams: {
    colorId: string
    sizeId: string
  }
}

const Page: React.FC<Props> = async ({ params, searchParams }) => {
  const { categoryId } = params
  const { colorId, sizeId } = searchParams

  const [products, sizes, colors] = await Promise.all([
    getProducts({ categoryId, colorId, sizeId }),
    getSizes(),
    getColors(),
  ])

  return (
    <Container>
      <div className='px-6 my-10'>
        <Client products={products} sizes={sizes} colors={colors} />
      </div>
    </Container>
  )
}

export default Page
