import { Product } from '@/types'
import queryString from 'query-string'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

type Query = {
  categoryId?: string
  sizeId?: string
  colorId?: string
  isFeatured?: boolean
}

export const getProducts = async (query: Query): Promise<Product[]> => {
  const url = queryString.stringifyUrl({
    url: URL,
    query: {
      colorId: query?.colorId,
      sizeId: query?.sizeId,
      categoryId: query?.categoryId,
      isFeatured: query?.isFeatured,
    },
  })
  const res = await fetch(url, { next: { revalidate: 60 } })
  return res.json()
}
