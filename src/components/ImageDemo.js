import React from 'react'
import { View, Text,StyleSheet, Image } from 'react-native'

const ImageDemo = () => {
    return (
        <View style={styles.root}>
            <Text style={styles.title}>Title</Text>
            <Image
                style={styles.thumbnail}
                source={{uri: 'https://theclassychicvideo.files.wordpress.com/2020/09/31a9b-banner.png?w=1024&h=576'}}
            />
            <Text>
                Et tempor non et aute id.
                Et tempor non et aute id.
                Et tempor non et aute id.
                Et tempor non et aute id.
                Et tempor non et aute id.
                Et tempor non et aute id.
                Et tempor non et aute id.
                Et tempor non et aute id.
                Et tempor non et aute id.
                Et tempor non et aute id.
                Et tempor non et aute id.
                Et tempor non et aute id.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
        root:{
            margin:10,
        },
        title:{
            fontWeight: 'bold',
            fontSize:25,
        },
        thumbnail:{
            width: '100%',
            height: 200,
            resizeMode: 'stretch',
        }
})

export default ImageDemo
