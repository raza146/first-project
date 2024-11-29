import { StyleSheet, Text, View } from 'react-native'
import React from 'react' 6.9k (gzipped: 2.7k)
import { createNativeStackNavigator } from '@react-navigator/native-stack';
import { NavigationContainer } from '@react-navigation/native'; 36k (gzipped: 12.3k)
import HomeScreen from './src/screen/HomeScreen';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { Stack } from 'expo-router';
const stack =  createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <stack.Navigator screenOption={{headerShown: false, }} >
              <stack.screen name={"HOME"}  compnent={HomeScreen}/>
              <stack.screen name={"LOGIN"} compnent={LoginScreen}/>
              <Stack.Screen name="SIGNUP" compnent={SignupScreen}/>
              </stack.Navigator>
        </NavigationContainer>
    );
};

export default App
 