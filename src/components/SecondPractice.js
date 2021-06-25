import React from 'react'
import { View, Text, ImageBackground,StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import {useScreenDimensions} from '../hooks/useScreenDimensions'

const SecondPractice = () => {



    // const image =  { uri: "https://reactjs.org/logo-og.png" };
    return (
    <ImageBackground style={{flex:1}} source={require('../assets/background.jpeg')}>
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >     
        <View style={styles.container}>
            <View style={styles.subParent}>
            <Image
                style={{
                    tintColor:"#fff",
                    width: 90,
                    height: 90,
                    margin: 20
                }}
                source={require('../assets/logo.png')}
            />
             <TextInput
                style={styles.input}  
                placeholder="username"
            />
            <TextInput
                style={styles.input}  
                placeholder="password"
            />
            <TouchableOpacity style={styles.btnLogin}>
                <Text style={{color: 'white',padding: 10,textAlign:'center'}}>Login</Text>
            </TouchableOpacity>
            </View>
      </View>
      </KeyboardAvoidingView>
      </ImageBackground>
    )
}

const styles = StyleSheet.create({
    subParent:{
        width: 300,
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnLogin:{
        backgroundColor: 'black',
        width: 300,
        margin: 10,
        borderRadius:50,
    },
    container: {
      flex: 1,
      justifyContent:'center',
      alignItems:'center'
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    input: {
        height: 40,
        margin: 5,
        width: 300,
        borderWidth: 1,
        borderRadius: 50,
        backgroundColor: 'rgba(0,0,0,0.5)',
        fontSize: 13,
        color:'white',
        padding: 5,

      },
  });

export default SecondPractice
