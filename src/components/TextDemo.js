import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

const TextDemo = () => {
    return (
        <View>
            <Text 
              style={style.text}
              ellipsizeMode={"middle"}
              numberOfLines={3}
            //   onPress={()=>alert('Press')}
              onLongPress={()=>alert('Long Press')}
              selectable={true}
            >
                Veniam eiusmod duis velit est est.
                Veniam eiusmod duis velit est est.
                Veniam eiusmod duis velit est est.
                Veniam eiusmod duis velit est est.
                Veniam eiusmod duis velit est est.
                Veniam eiusmod duis velit est est.
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    text:{
        backgroundColor: 'yellow'
    }
})

export default TextDemo
