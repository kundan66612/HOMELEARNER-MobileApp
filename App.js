import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './App/Pages/Welcome';
import SignInScreen from './App/Pages/SignIn';
import HomeScreen from './App/Pages/Home';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerTitle:''}} />
        <Stack.Screen name="SignIn" component={SignInScreen} options={{headerTitle:''}} />
        <Stack.Screen name="Home" component={HomeScreen} options={{headerTitle:''}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;