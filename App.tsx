import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './Screens/Splash';
import Login from './Screens/Login';
import Register from './Screens/Register';
import Home from './Screens/Home';
import TabNavigator from './Screens/TabNavigator';
import Join from './Screens/Join';



const Stack=createNativeStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen name='Home' component={TabNavigator} options={{ headerShown:false,statusBarColor:'#083166',headerTitleAlign:'center',headerTintColor:'white',headerStyle: {
          backgroundColor: '#083166', // Set your desired header color
        },}}/>
      <Stack.Screen name='SplashScreen' component={SplashScreen} options={{ headerShown:false,}}/>
      <Stack.Screen name='Login' component={Login}options={{ headerShown:false,statusBarColor:'#083166'}}/>
      <Stack.Screen name='Register' component={Register}options={{ headerShown:false,statusBarColor:'#083166'}}/>
      <Stack.Screen name='Join' component={Join} options={{ headerShown:false,statusBarColor:'#083166'}}/>
    
      </Stack.Navigator>
    </NavigationContainer>
  );
}