import React,{useState} from 'react'
import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'

const TouchableDemo = () => {

    const [count, setCount] = useState(0)

    return (
        <View>
            <Text style={style.title}>Touchable</Text>
            <View style={style.containter}>
                <Text>Count: {count}</Text>
                <TouchableOpacity
                    style={{backgroundColor:'grey',padding: 10,width:100}}
                    activeOpacity={0.5}
                    onPress={()=>setCount(count+1)}
                >
                   <Text>Press Here</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    title:{
        fontSize: 25,
        textAlign:'center',
        margin:10,
        fontWeight: 'bold'
    }
})

export default TouchableDemo
