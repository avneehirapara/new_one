import { View, Text } from 'react-native'
import React from 'react'
import Calcy from './app/Calcy'
import City from './app/City'
import State from './app/State'
import Decrement_Increment from './app/Decrement_Increment'
import Sub_course from './app/Sub_course'
import Course from './app/Course'
import TimerClass from './app/TimerClass'
import TImeFun from './app/TImeFun'
import Home from './app/Home'

export default function App() {
 return (
    <View>
      <Home />
      <City />
      <State />
      <Decrement_Increment />
      <Course />
      <Sub_course />
      <Calcy />
      <TimerClass />
      <TImeFun />
    </View>
  )
}