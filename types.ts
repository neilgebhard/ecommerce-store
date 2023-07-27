export type Category = {
  id: string
  name: string
}
export type Product = {
  id: string
  category: Category
  name: string
  price: string
  isFeatured: boolean
  size: Size
  color: Color
  images: Image[]
}

export type Image = {
  id: string
  url: string
}

type Size = {
  id: string
  name: string
  value: string
}

export type Color = {
  id: string
  name: string
  value: string
}
