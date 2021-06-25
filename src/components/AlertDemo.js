import React from 'react'
import { View, Text,StyleSheet,Button,Alert } from 'react-native'

const AlertDemo = () => {

    const onAlertA = ()=>{
        Alert.alert(
            'Alert Title',
            'Alert Message',
            [
                {
                    text: 'Cancel',
                    onPress: ()=> console.log('Cancel Press'),
                    style: "cancel"
                },
                {
                    text: 'OK',
                    onPress: ()=> console.log('Ok Press')
                }
            ]
        )
    }
    const onAlertB = ()=>{
        Alert.alert(
            "Alert Title",
            "My Alert Msg",
            [
              {
                text: "Ask me later",
                onPress: () => console.log("Ask me later pressed")
              },
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]);
    }

    return (
        <View style={styles.container}>
            <Button title='Alert A' onPress={onAlertA}/>
            <Button title='Alert B' onPress={onAlertB}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        display:'flex',
        height: '100%',
        justifyContent: "space-around",
        alignItems: 'center'
    }
})

export default AlertDemo
