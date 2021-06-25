import React from 'react';
import { Alert } from 'react-native';
import {View, Text,Button} from 'react-native';

const Home = ({ navigation,route }) => {

  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
      const post = route.params?.post
      // Alert.alert(post)
    }
  }, [route.params?.post]);


  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
  title="Update the title"
  onPress={() => navigation.setOptions({ title: 'Updated!' })}
/>
      <Button
        title="Create Post"
        onPress={() => navigation.navigate('CreatePost')}
      />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details',{
          itemId: 86,
          otherParam: 'anything you want here',
        })}
      />
    </View>
  );
};

export default Home;
