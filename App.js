import React from 'react'
import { View, Text, SafeAreaView,StyleSheet, ImageBackground, RefreshControl } from 'react-native'
import AlertDemo from './src/components/AlertDemo'
import FlatListDemo from './src/components/FlatListDemo'
import ImageDemo from './src/components/ImageDemo'
import ModalDemo from './src/components/ModalDemo'
import RefreshDemo from './src/components/RefreshDemo'
import SecondPractice from './src/components/SecondPractice'
import TextDemo from './src/components/TextDemo'
import TextInputDemo from './src/components/TextInputDemo'
import TouchableDemo from './src/components/TouchableDemo'
import Navigation from './src/navigation/Navigation'
const App = () => {
  return (
    <SafeAreaView style={styles.root}>  
      {/* <TextDemo/> */}
      {/* <TouchableDemo/> */}
      {/* <AlertDemo/> */}
      {/* <ImageDemo/> */}
      {/* <TextInputDemo/> */}
      {/* <SecondPractice/> */}
      {/* <FlatListDemo/> */}
      {/* <RefreshDemo/> */}
      <Navigation/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root:{
    flex:1
  }
})


export default App
