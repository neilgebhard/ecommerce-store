import { Color } from '@/types'

export const getColors = async (): Promise<Color[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/colors`)
  return res.json()
}
