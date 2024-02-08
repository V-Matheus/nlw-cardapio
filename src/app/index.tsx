import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Header } from '@/components/Header'

export default function Home() {
  return (
    <View className=' flex-1 pt-8'>
      <Header title='Faça seu pedido' carQuantityItems={1} />
    </View>
  )
}
