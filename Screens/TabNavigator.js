// TabNavigator.js

import React from 'react';
import {StyleSheet,Image, TouchableOpacity, View} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home'; // Import your Home screen component
// import Screen2 from './Screen2'; // Import other screens you want in the tabs
import Icon from 'react-native-vector-icons/FontAwesome';
import Categories from './Categories';
import Designers from './Designers';
import Brands from './Brands';
import Sale from './Sale';
import Cart from './Cart';
import { Metrics } from '../themes';



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
    <Tab.Navigator screenOptions={{
      tabBarStyle: {backgroundColor: "#083166"}
    }}>
         <Tab.Screen name="Sale" component={Sale} options={{tabBarIcon: ({ color, size }) => (
           <Image source={require('../assets/Sale.png')}style={{width:22,height:22}}></Image>
           ),headerStyle: {
          backgroundColor: '#083166', // Set your desired header color
          
        }, headerTitle: () => (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          
            <Image
              source={require('../assets/Logo.png')}
              style={{ width: 110, height: 37 ,marginRight:40}}
            />
              <TouchableOpacity><Image
              source={require('../assets/Table.png')}
              style={{ width: 30, height: 27 ,left:20,marginRight:10}}
            /></TouchableOpacity>
              <TouchableOpacity><Image
              source={require('../assets/Matrix.png')}
              style={{ width: Metrics.ratio(30), height:Metrics.ratio(27) ,left:20,marginRight:Metrics.ratio(2)}}
            />
            </TouchableOpacity>
            <TouchableOpacity><Image
              source={require('../assets/Square.png')}
              style={{ width: Metrics.ratio(30), height: Metrics.ratio(27) ,left:Metrics.ratio(30),marginRight:Metrics.ratio(20)}}
            />
            </TouchableOpacity>
            <TouchableOpacity><Image
              source={require('../assets/Search.png')}
              style={styles.IconContainer}

            />
            </TouchableOpacity>
            <TouchableOpacity><Image
              source={require('../assets/Cart.png')}
              style={{  width: Metrics.ratio(20), height: Metrics.ratio(27) ,left:Metrics.ratio(30) ,marginRight:Metrics.ratio(2)}}
            />
            </TouchableOpacity>
          </View>
        ),}}/>
     
      
         <Tab.Screen name="Brands" component={Brands} options={{tabBarIcon: ({ color, size }) => (
           <Image source={require('../assets/Brands.png')}style={{width:22,height:21}} ></Image>
           ),headerStyle: {
          backgroundColor: '#083166', // Set your desired header color
          
        }, headerTitle: () => (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          
            <Image
              source={require('../assets/Logo.png')}
              style={{ width: 110, height: 37 ,marginRight:40}}
            />
              <TouchableOpacity><Image
              source={require('../assets/Table.png')}
              style={{ width: 30, height: 27 ,left:20,marginRight:10}}
            /></TouchableOpacity>
              <TouchableOpacity><Image
              source={require('../assets/Matrix.png')}
              style={{ width: Metrics.ratio(30), height:Metrics.ratio(27) ,left:20,marginRight:Metrics.ratio(2)}}
            />
            </TouchableOpacity>
            <TouchableOpacity><Image
              source={require('../assets/Square.png')}
              style={{ width: Metrics.ratio(30), height: Metrics.ratio(27) ,left:Metrics.ratio(30),marginRight:Metrics.ratio(20)}}
            />
            </TouchableOpacity>
            <TouchableOpacity><Image
              source={require('../assets/Search.png')}
              style={styles.IconContainer}

            />
            </TouchableOpacity>
            <TouchableOpacity><Image
              source={require('../assets/Cart.png')}
              style={{  width: Metrics.ratio(20), height: Metrics.ratio(27) ,left:Metrics.ratio(30) ,marginRight:Metrics.ratio(2)}}
            />
            </TouchableOpacity>
          </View>
        ), }}/>
         <Tab.Screen name="Categories" component={Categories}  options={{ tabBarIcon: ({ color, size }) => (
           <Image source={require('../assets/Categories.png')}style={{width:22,height:22}} ></Image>
           ),headerStyle: {
          backgroundColor: '#083166', // Set your desired header color
          
        },
        headerTitle: () => (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          
            <Image
              source={require('../assets/Logo.png')}
              style={{ width: 110, height: 37 ,marginRight:40}}
            />
              <TouchableOpacity><Image
              source={require('../assets/Table.png')}
              style={{ width: 30, height: 27 ,left:20,marginRight:10}}
            /></TouchableOpacity>
              <TouchableOpacity><Image
              source={require('../assets/Matrix.png')}
              style={{ width: Metrics.ratio(30), height:Metrics.ratio(27) ,left:20,marginRight:Metrics.ratio(2)}}
            />
            </TouchableOpacity>
            <TouchableOpacity><Image
              source={require('../assets/Square.png')}
              style={{ width: Metrics.ratio(30), height: Metrics.ratio(27) ,left:Metrics.ratio(30),marginRight:Metrics.ratio(20)}}
            />
            </TouchableOpacity>
            <TouchableOpacity><Image
              source={require('../assets/Search.png')}
              style={styles.IconContainer}

            />
            </TouchableOpacity>
            <TouchableOpacity><Image
              source={require('../assets/Cart.png')}
              style={{  width: Metrics.ratio(20), height: Metrics.ratio(27) ,left:Metrics.ratio(30) ,marginRight:Metrics.ratio(2)}}
            />
            </TouchableOpacity>
          </View>
        ),}}/>
        <Tab.Screen name="Designers" component={Designers} options={{tabBarIcon: ({ color, size }) => (
           <Image source={require('../assets/Designers.png')}style={{width:22,height:25}} ></Image>
           ),headerStyle: {
          backgroundColor: '#083166', // Set your desired header color
          
        },
        headerTitle: () => (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          
            <Image
              source={require('../assets/Logo.png')}
              style={{ width: 110, height: 37 ,marginRight:40}}
            />
              <TouchableOpacity><Image
              source={require('../assets/Table.png')}
              style={{ width: 30, height: 27 ,left:20,marginRight:10}}
            /></TouchableOpacity>
              <TouchableOpacity><Image
              source={require('../assets/Matrix.png')}
              style={{ width: Metrics.ratio(30), height:Metrics.ratio(27) ,left:20,marginRight:Metrics.ratio(2)}}
            />
            </TouchableOpacity>
            <TouchableOpacity><Image
              source={require('../assets/Square.png')}
              style={{ width: Metrics.ratio(30), height: Metrics.ratio(27) ,left:Metrics.ratio(30),marginRight:Metrics.ratio(20)}}
            />
            </TouchableOpacity>
            <TouchableOpacity><Image
              source={require('../assets/Search.png')}
              style={styles.IconContainer}

            />
            </TouchableOpacity>
            <TouchableOpacity><Image
              source={require('../assets/Cart.png')}
              style={{  width: Metrics.ratio(20), height: Metrics.ratio(27) ,left:Metrics.ratio(30) ,marginRight:Metrics.ratio(2)}}
            />
            </TouchableOpacity>
          </View>
        ),}}/>
         <Tab.Screen name="Mens & Kids" component={Cart} options={{tabBarIcon: ({ color, size }) => (
           <Image source={require('../assets/Men.png')}style={{width:35,height:31}} ></Image>
           ),headerStyle: {
          backgroundColor: '#083166', // Set your desired header color
          
        },  headerTitle: () => (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          
            <Image
              source={require('../assets/Logo.png')}
              style={{ width: 110, height: 37 ,marginRight:60}}
            />
              <TouchableOpacity><Image
              source={require('../assets/Table.png')}
              style={{ width: Metrics.ratio(30), height: Metrics.ratio(30) ,left:Metrics.ratio(30),marginRight:Metrics.baseMargin}}
              /></TouchableOpacity>
              <TouchableOpacity><Image
              source={require('../assets/Matrix.png')}
              style={{ width: Metrics.ratio(30), height: Metrics.ratio(30) ,left:Metrics.ratio(30),marginRight:Metrics.baseMargin}}

            />
            </TouchableOpacity>
            <TouchableOpacity><Image
              source={require('../assets/Square.png')}
              style={{ width: Metrics.ratio(30), height: Metrics.ratio(30) ,left:Metrics.ratio(30),marginRight:Metrics.baseMargin}}

            />
            </TouchableOpacity>
            <TouchableOpacity><Image
              source={require('../assets/Search.png')}
              style={styles.IconContainer}
            />
            </TouchableOpacity>

          </View>
              ),}}/>
      
    </Tab.Navigator>
  );
};
const styles=StyleSheet.create({
  IconContainer:{
    width: Metrics.ratio(30),
    height: Metrics.ratio(30) ,
    left:Metrics.ratio(20)
  }
  })
export default TabNavigator;
