import { View, Text, ScrollView } from "react-native";

import { Header } from "@/components/Header";
import { Product } from '@/components/product'

import { formatCurrency } from "@/utils/functions/format-currency";

import { useCardStore } from "@/stores/cart-store";

export default function Cart() {

  const cartStore = useCardStore()

  const total = formatCurrency(cartStore.products.reduce((total, product) => total + product.price * product.quantity, 0))

  return (
    <View className="flex-1 pt-8">
      <Header title="Seu Carrinho" />
      <ScrollView>

        {cartStore.products.length > 0 ?

          <View className="p-5 flex-1">
            {
              cartStore.products.map((product) => (
                <Product key={product.id} data={product} />
              ))
            }
          </View>
          :
          <Text className="font-body text-slate-400 text-center my-8">Seu Carrinho está vazio</Text>
        }

        <View className="flex-row gap-2 items-center mt-5 mb-4">
          <Text className="text-white text-xl font-subtitle">Total: </Text>
          <Text className="text-lime-400 text-2xl font-heading">{total}</Text>
        </View>
      </ScrollView>
    </View>
  )
}