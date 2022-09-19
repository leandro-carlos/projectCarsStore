import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from './src/screens/Home';
import AddNewCar from './src/screens/AddNewCar'
import CarDetails from './src/screens/CarDetails'
import Login from './src/screens/Login';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
        <Stack.Screen name='AddNewCar' component={AddNewCar} options={{ headerShown: false }} />
        <Stack.Screen name='CarDetails' component={CarDetails} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}