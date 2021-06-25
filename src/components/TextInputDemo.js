import React from 'react'
import { View, Text, TextInput,StyleSheet } from 'react-native'
import {useScreenDimensions} from '../hooks/useScreenDimensions'

const TextInputDemo = () => {
    const [text, onChangeText] = React.useState('');

    const dimension = useScreenDimensions()

    return (
        <View>
            <Text>Text Input</Text>
            <TextInput
                style={styles.input}
                value={text}
                autoCorrect
                onChangeText={onChangeText}
            />
             <Text>Input: {text}</Text>
             <TextInput
                style={{
                    borderBottomColor: '#000000',
                    borderBottomWidth: 1
                }}
                multiline
                numberOfLines={4}
                editable
                maxLength={40}
            />
             <Text>Password</Text>
            <TextInput
                style={styles.input}
                value={text}
                secureTextEntry={true}

                placeholder={"Password"}
                onChangeText={onChangeText}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    },
  });

export default TextInputDemo
