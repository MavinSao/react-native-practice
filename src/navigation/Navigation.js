import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { View, Text,Image,Button } from 'react-native'
import CreatePostScreen from '../screens/CreatePostScreen';
import DetailsScreen from '../screens/DetailsScreen';
import Home from '../screens/Home';

const Stack = createStackNavigator();

function LogoTitle() {
    return (
      <Image
        style={{ width: 200, height: 50 }}
        source={require('../assets/fb.png')}
      />
    );
  }

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                    backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                    fontWeight: 'bold',
                    },
                }}
            >
                 <Stack.Screen  
                    options={{ title: 'Overview' }} 
                    name="Home"
                    component={Home}
                    //Custom Header with component
                    options={{ 
                        headerTitle: props => <LogoTitle {...props} />,
                        //Add Right Button
                        headerRight: () => (
                            <Button
                              onPress={() => alert('This is a button!')}
                              title="Info"
                              color="#fff"
                            />
                          ),
                    
                    }}
                    // options={{
                    //     title: 'My Home',
                    //     headerStyle: {
                    //         backgroundColor: '#f4511e'
                    //     },
                    //     headerTintColor: '#fff',
                    //     headerTitleStyle: {
                    //         fontWeight: 'bold'
                    //     }
                    // }}
                />
                 <Stack.Screen name="Details" component={DetailsScreen}/>   
                 <Stack.Screen name="CreatePost" component={CreatePostScreen}/>   
             </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
