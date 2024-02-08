import React, { useState } from 'react'
import { View, FlatList, SectionList, Text } from 'react-native'
import { CATEGORIES, MENU } from '@/utils/data/products'
import { Header } from '@/components/Header'
import { CategoryButton } from '@/components/category-button'
import { Product } from '@/components/product'

export default function Home() {

  const [category, setCategory] = useState(CATEGORIES[0])

  function handleCategorySelected(selectedCategory: string) {

    setCategory(selectedCategory)
  }

  return (
    <View className=' flex-1 pt-8'>
      <Header title='Faça seu pedido' carQuantityItems={3} />

      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item} renderItem={({ item }) => <CategoryButton title={item} onPress={() => handleCategorySelected(item)} isSelected={item === category} />}
        horizontal
        className='max-h-10 mt-5'
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }} />

      <SectionList
        sections={MENU}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={false}
        renderItem={({ item }) => (
          <Product data={item} />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text className='text-xl text-white font-heading mt-8 mb-3'>{title}</Text>
        )}
        className='flex-1 p-5'
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom : 100}}
      />

    </View>
  )
}
