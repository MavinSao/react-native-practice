import React,{useState} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native';
import Data from '../data/data'

const Item = ({title,backgroundColor,textColor}) => (
  <View style={[styles.item,{backgroundColor:backgroundColor}]}>
    <Text style={[styles.title, textColor]}>{title}</Text>
  </View>
);

const FlatListDemo = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {

      const background = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
      const color = item.id === selectedId ? 'white' : 'black';

      return <TouchableOpacity
                onPress={()=>setSelectedId(item.id)}
            >
                <Item title={item.title} backgroundColor={background}  textColor={{ color }} />
            </TouchableOpacity>
  }

  return (
    <View>
      <ActivityIndicator size="small" color="#0000ff" />
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={(item)=>item.id}
        extraData={selectedId}
        // onEndReached={()=>alert('End Data')}
      
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default FlatListDemo;
