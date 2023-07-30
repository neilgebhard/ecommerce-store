'use client'

import { Product } from '@/types'
import { createContext, useContext, useState } from 'react'
import toast from 'react-hot-toast'

type Props = {
  items: Product[]
  addItem: (id: Product) => void
  removeItem: (id: string) => void
  clearItems: () => void
  isInCart: (id: string) => boolean
}

export const Context = createContext({} as Props)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<Product[]>([])

  const addItem = (item: Product) => {
    if (isInCart(item.id)) return toast.error('Item already in cart')
    toast.success('Item added to cart')
    setItems((items) => [...items, item])
  }

  const removeItem = (id: string) => {
    setItems((items) => items.filter((item) => item.id !== id))
    toast.success('Item removed from cart')
  }

  const clearItems = () => {
    setItems([])
    toast.success('Cart cleared')
  }

  const isInCart = (id: string) => items.map((item) => item.id).includes(id)

  return (
    <Context.Provider
      value={{ items, addItem, removeItem, clearItems, isInCart }}
    >
      {children}
    </Context.Provider>
  )
}

export const useCart = () => useContext(Context)
