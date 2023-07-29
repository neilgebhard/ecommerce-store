import { Size } from '@/types'

export const getSizes = async (): Promise<Size[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sizes`)
  return res.json()
}
