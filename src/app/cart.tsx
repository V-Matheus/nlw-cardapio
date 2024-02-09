import { View } from "react-native";

import { Header } from "@/components/Header";
import {Product} from '@/components/product'

import { useCardStore } from "@/stores/cart-store";

export default function Cart() {

  const cartStore = useCardStore()

  return (
    <View className="flex-1 pt-8">
      <Header title="Seu Carrinho" />

      <View className="p-5 flex-1">
        {
          cartStore.products.map((product) => (
            <Product key={product.id} data={product} />
          ))
        }
      </View>
    </View>
  )
}