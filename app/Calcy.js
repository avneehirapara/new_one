import { View, Text, Button, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import React, { useState } from 'react'

export default function Calcy() {

    const [equation, setEquation] = useState('');

    const handlePressDigit = (value) => {
        setEquation(equation + value);
    }

    handlePressEqual = () => {
        setEquation(eval(equation).toString())
    }

    const restart = () => {
        setEquation('');
    }

    const b = ['%', 'CE', 'C', 'B', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '/', '0', '.', '=']


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#61dafb" />
            
                <View style={styles.result}>
                    <Text>0</Text>
                </View>
                <View style={styles.buttons}>

                </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center'
    },

    result: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: '#888',
        alignItems: 'flex-end'
    },

    buttons: {
        flex: 1,
        backgroundColor: 'red',
    }

})