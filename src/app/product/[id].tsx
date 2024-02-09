import { View, Image, Text } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { Feather } from "@expo/vector-icons";

import { useCardStore } from "@/stores/cart-store";

import { PRODUCTS } from "@/utils/data/products";
import { formatCurrency } from "@/utils/functions/format-currency";

import { Button } from "@/components/button";
import { LinkButton } from "@/components/link-button";

export default function Product() {
  const cartStore = useCardStore()
  const { id } = useLocalSearchParams()
  const navigation = useNavigation()

  const product = PRODUCTS.filter((item) => item.id === id)[0]

  function handleAddCart() {
    cartStore.add(product)
    navigation.goBack()
  }


  return (
    <View className="flex-1">
      <Image source={product.cover}
        className="w-full h-52"
        resizeMode="cover" />

      <View className="p-5 mt-8 flex-1">
        <Text className="text-lime-400 text-2xl font-heading my-2">{formatCurrency(product.price)}</Text>

        <Text className="text-slate-400 font-body text-base leading-6 mb-6">{product.description}</Text>

        {product.ingredients.map((ingredient) =>
          <Text key={ingredient} className="text-slate-400 font-body text-base leading-6" >{'\u2022'} {ingredient}</Text>)}
      </View>

      <View className="p-5 pb-8 gap-5" >
        <Button onPress={handleAddCart}>
          <Button.Icon>
            <Feather name="plus-circle" size={20} />
          </Button.Icon>
          <Button.Text >Adicionar ao Pedido</Button.Text>

        </Button>
        <LinkButton title="Voltar ao Cardápio" href="/" />
      </View>
    </View>
  )
}