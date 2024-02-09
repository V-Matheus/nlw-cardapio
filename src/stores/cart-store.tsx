import { ProductProps } from '@/utils/data/products'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as cardInMemory from './helpers/cart-in-memory'

export type ProductCartProps = ProductProps & {
  quantity: number
}

type StateProps = {
  products: ProductCartProps[]
  add: (produc: ProductProps) => void
  remove: (productId: string) => void
  clear: () => void
}

export const useCardStore = create(
  persist<StateProps>((set) => ({
    products: [],
    add: (produc: ProductProps) => set((state) => ({
      products: cardInMemory.add(state.products, produc)
    })),

    remove: (productId: string) => set((state) => ({
      products: cardInMemory.remove(state.products, productId)
    })),

    clear: () => set(() => ({ products: [] })),
  }), {
    name: 'nlw-cardapio:cart',
    storage: createJSONStorage(() => AsyncStorage)
  }))