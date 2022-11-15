// // import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
// // import React, { Component, useState } from 'react'


// // export default class City extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       City: '2.' +" " +  "Ahemdabad",
// //       aera: '2.' +" " +  "kakariya "
// //     }
// //   }


// //   change = () => {
// //     this.setState({
// //         City:  '2.' +" " + 'surat',
// //         aera:  '2.' +" " + 'dumas'
// //       })
// //   }



// //   render() {
// //     return (
// //       <View style={StyleSheet.container}>
// //         <Text style={styles.name}>{this.state.City}</Text>
// //         <Text style={styles.name}>{this.state.aera}</Text>
// //         <TouchableOpacity onPress={this.change}>
// //           <Text style={styles.btn}> Change Name </Text>

// //         </TouchableOpacity>

// //       </View>
// //     )
// //   }
// // }



// // import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'
// // import React, { useState } from 'react'

// // export default function City() {
// //     let [cityName,setCity]=useState("Mumbai");
// //     let [placeName,setPlace]=useState("Taj hotel");
    
// //     let cityChange=()=>{
// //         setCity("Delhi"),
// //     setPlace("India gate")
// // }
// // return (
// //     <View style={StyleSheet.container}>
// //       <Text style={styles.name}>{cityName}</Text>
// //       <Text style={styles.name}>{placeName}</Text>
// //       <TouchableOpacity onPress={cityChange} style={styles.btn1}>
// //         <Text style={styles.btn}>Change</Text>
// //       </TouchableOpacity>
// //     </View>
// //   )
  
// // }
// import { View, Text, Button ,StyleSheet} from 'react-native'
// import React, { useState } from 'react'

// export default function City() {
//     const[ccountryName,setcountry]=useState('us');
//     const[cityName,setcity]=useState('califonia');

//      const update=()=>{
//         setcountry('india');
//         setcity('delhi');
//     }

//   return (
//     <View style={StyleSheet.container}>
//       <Text style={styles.name} >{ccountryName}</Text>
//       <Text  style={styles.name}>{cityName}</Text>
//       <Button onPress={update} 
//       title='update' style={styles.btn1} />
//     </View>
//   )
// }

// let styles = StyleSheet.create({
//     btn: {
     
//       height: 50,
//       width: 200,
//       marginTop: 30,
//       marginLeft: 100,
//       // textAlign:"center",
//       color: 'white',
//       fontFamily: 'georgia',
//       fontSize: 25,
//       borderRadius: 50,
//       textAlign: 'center',
//       textAlignVertical: 'center',
    
  
//     },
//     name :{
//       marginTop: 30,
//       // marginLeft: 115,
//       fontFamily: 'georgia',
//       fontSize: 25,
//       textAlign: "center"
//     },
//     btn1 : {
//       textAlign: "center",
//       backgroundColor: 'black',
     
//     },
//     container :{

//     }
//   })
