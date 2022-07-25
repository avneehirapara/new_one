import { View, Text } from 'react-native'
import React from 'react'
import Calcy from './app/Calcy'
import City from './app/City'
import State from './app/State'
import Decrement_Increment from './app/Decrement_Increment'

export default function App() {
 return (
    <View>
      <City />
      <State />
      <Decrement_Increment />
      <Calcy />
    </View>
  )
}