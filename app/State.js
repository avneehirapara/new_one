
// Country      countryName
// City         cityName, famousPlace   // ternary operator
import { Text, TouchableOpacity, View ,StyleSheet ,Image, ScrollView} from 'react-native'
import React, { Component } from 'react'

export default class State  extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '1.' +" " + 'amit'
        }
    }

    handleChangeName = () => {
        this.setState({
           name: '1.' +" " +  'patel' 
        })
    }

    render() {
        return (
           <ScrollView>
             <View style = {StyleSheet.container}>
                     <Image  style={styles.Image}source={require('../new_one/app/img.jpg')} />
                <Text  style={styles.name}>{this.state.name}</Text>
                <TouchableOpacity 
                    onPress={this.handleChangeName}
                >
                    <Text  style = {styles.btn}>Change Name</Text>
                </TouchableOpacity>
            </View>
           </ScrollView>
        )
    } 
}   

let styles = StyleSheet.create({
    name :{
        marginTop: 30,
        marginLeft: 115,
        fontFamily: 'georgia',
        fontSize: 25,
      },
      btn: {
        backgroundColor: 'grey',
        height: 35,
        width: 550,
        marginTop: 30,
        marginLeft: -69,
        color: 'white',
        fontFamily: 'georgia',
        fontSize: 20,
        borderRadius: 50,
        textAlign: 'center',
        textAlignVertical: 'center',
    
      },
      Image:{
        height:250,
        width:400,
        justifyContent:'center',
        marginLeft:0,
        
       }

})
