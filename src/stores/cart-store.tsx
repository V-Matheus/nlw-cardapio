import { ProductProps } from '@/utils/data/products'
import { create } from 'zustand'
import * as cardInMemory from './helpers/cart-in-memory'

export type ProductCartProps = ProductProps & {
  quantity: number
}

type StateProps = {
  products: ProductCartProps[]
  add: (produc: ProductProps) => void
  remove: (productId: string) => void
}

export const useCardStore = create<StateProps>((set) => ({
  products: [],
  add: (produc: ProductProps) => set((state) => ({
    products: cardInMemory.add(state.products, produc)
  })),

  remove: (productId: string) => set((state) => ({
    products: cardInMemory.remove(state.products, productId)
  }))
}))