import { View, Text } from 'react-native'
import React, { useEffect, useState,StyleSheet } from 'react'


export default function TImeFun() {
    const [time, setTime] = useState(new Date()); //1

    const tick = () => {
        setTime(new Date());
    }

    // Componenet lifecycle method implement in function based component
    useEffect(() => {
        //3, 4
        const t = setInterval(() => {
            tick();
        }, 1000);

        //5
        return () => {
            clearInterval(t)
        }
    }, []);

    //2
    return (
        <View style={StyleSheet.container}>
            <Text style={style.watch}>{time.toLocaleTimeString()}</Text>
            <FontAwesome5 name={'stopwatch'} size={100} color={'red'} solid />;
            <FontAwesome5 name={'watch-later'} size={100} color={'red'} solid />;
        </View>
    )
}
let styles = StyleSheet.create({
    watch:{
    
    }
})