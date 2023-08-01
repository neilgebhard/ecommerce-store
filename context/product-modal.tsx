'use client'

import React, { createContext, useContext, useState } from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Product } from '@/types'
import Gallery from '@/components/gallery'
import ProductInfo from '@/components/product-info'

type Props = {
  openProductModal: (data: Product) => void
}

const Context = createContext<Props>({} as Props)

export const ProductModalProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [open, setOpen] = useState(false)
  const [product, setProduct] = useState<Product | null>(null)

  const openProductModal = (data: Product) => {
    setProduct(data)
    setOpen(true)
  }

  return (
    <Context.Provider value={{ openProductModal }}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className='overflow-scroll'>
          <div className='grid sm:grid-cols-2 gap-4'>
            {product && <Gallery images={product.images} />}
            {product && <ProductInfo product={product} />}
          </div>
        </DialogContent>
      </Dialog>
    </Context.Provider>
  )
}

export const useProductModal = () => useContext(Context)
