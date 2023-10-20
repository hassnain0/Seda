// TabNavigator.js

import React from 'react';
import {Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home'; // Import your Home screen component
// import Screen2 from './Screen2'; // Import other screens you want in the tabs
import Icon from 'react-native-vector-icons/FontAwesome';
import Categories from './Categories';
import Designers from './Designers';
import Brands from './Brands';
import Sale from './Sale';
import Cart from './Cart';


const Tab = createBottomTabNavigator();
const tabBarOptions = {
    activeTintColor: 'blue', // Change this to your desired active tab color
    inactiveTintColor: 'gray', // Change this to your desired inactive tab color
    style: {
      backgroundColor: 'black', // Change this to your desired background color
    },
  };
const TabNavigator = () => {
  return (
    <Tab.Navigator tabBarOptions={tabBarOptions}>
         <Tab.Screen name="Sale" component={Sale} options={{headerTitleAlign:'center',tabBarIcon: ({ color, size }) => (
           <Image source={require('../assets/Sale.png')} style={{width:30,height:30}}></Image>
           ),headerStyle: {
          backgroundColor: '#083166', // Set your desired header color
          
        }}}/>
     
        <Tab.Screen name="Categories" component={Categories} options={{headerTitleAlign:'center',tabBarIcon: ({ color, size }) => (
           <Image source={require('../assets/Categories.png')}style={{width:30,height:30}} ></Image>
           ),headerStyle: {
          backgroundColor: '#083166', // Set your desired header color
          
        }}}/>
      <Tab.Screen name="Home" component={Home} options={{headerTitleAlign:'center',tabBarIcon: ({ color, size }) => (
           <Image source={require('../assets/Home.png')} style={{width:30,height:30}}></Image>
           ),headerStyle: {
          backgroundColor: '#083166', // Set your desired header color
          
        }}}/> 
      <Tab.Screen name="Designers" component={Designers} options={{headerTitleAlign:'center',tabBarIcon: ({ color, size }) => (
           <Image source={require('../assets/Designers.png')}style={{width:30,height:30}} ></Image>
           ),headerStyle: {
          backgroundColor: '#083166', // Set your desired header color
          
        }}}/>
         <Tab.Screen name="Brands" component={Brands} options={{headerTitleAlign:'center',tabBarIcon: ({ color, size }) => (
           <Image source={require('../assets/Brands.png')}style={{width:30,height:30}} ></Image>
           ),headerStyle: {
          backgroundColor: '#083166', // Set your desired header color
          
        }}}/>
         <Tab.Screen name="Cart" component={Cart} options={{headerTitleAlign:'center',tabBarIcon: ({ color, size }) => (
           <Image source={require('../assets/Cart.png')}style={{width:20,height:30}} ></Image>
           ),headerStyle: {
          backgroundColor: '#083166', // Set your desired header color
          
        }}}/>
      
    </Tab.Navigator>
  );
};

export default TabNavigator;
