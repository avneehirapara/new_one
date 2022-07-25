import { View, Text, TouchableOpacity,StyleSheet,Image, ScrollView } from 'react-native'
import React, { useState } from 'react'


export default function Decrement_Increment() {
    let[Number,setNumber]=useState(0);
    let increment= () => {
        setNumber(prvNumber => prvNumber + 1);
    }
    let decrement = () => {
        setNumber(prvNumber => prvNumber - 1);
    }
  return (
   <ScrollView>
     <View style={StyleSheet.container}>
      <Text style={styles.number}>NUMBERS =  {Number}</Text>
     <View style={styles.flax}>
     <TouchableOpacity onPress={increment}>
        <Text style={styles.btn}>INCREMENT</Text>
      </TouchableOpacity>
 
      <TouchableOpacity onPress={decrement}>
        <Text style={styles.btn}>DECREMENT</Text>
      </TouchableOpacity>
     </View>

    </View>
   </ScrollView>
  )
}
let styles = StyleSheet.create({

  number:{
  fontSize:25,
  textAlign:'center',
  textAlignVertical:'center',
  marginTop:50,
  backgroundColor:"gray",
  color:'black',
  height:50,
  width:290,
  borderRadius:10,
  marginLeft:55,
  
 },
 btn:{
  height:50,
  width:130,
  fontSize:20,
  marginTop:70,
  textAlign:'center',
  textAlignVertical:'center',
  marginTop:50,
  backgroundColor:"gray",
  color:'black',
  borderRadius:20,
  marginBottom:40,
 
 },
 flax:{
  alignItems:'center',
  flexDirection:'row',
  justifyContent:'space-around',
 },


})