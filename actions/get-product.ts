import { Product } from '@/types'

export const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`)
  return res.json()
}
