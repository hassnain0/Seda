import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './Screens/Splash';
import Login from './Screens/Login';
import Register from './Screens/Register';


const Stack=createNativeStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='SplashScreen' component={SplashScreen} options={{ headerShown:false,}}/>
      <Stack.Screen name='Login' component={Login}options={{ headerShown:false,statusBarColor:'#083166'}}/>
      <Stack.Screen name='Register' component={Register}options={{ headerShown:false,statusBarColor:'#083166'}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}