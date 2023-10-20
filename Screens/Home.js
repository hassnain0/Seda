import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Text from '../components/Text'
import { Colors, Metrics } from '../themes'
import Icon from '../helpers/Icons'
import TabNavigator from './TabNavigator'

const Home=({navigation})=>{
    
  <View style={{ flex: 1 }}>
  <TabNavigator />
</View>
    
}
const styles=StyleSheet.create({
    header: {
        backgroundColor: Colors.themeColor,
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: Metrics.ratio(15),
        // paddingHorizontal:Metrics.ratio(5),
      },
      leftIconView: {
        paddingHorizontal: Metrics.ratio(10),
        height: Metrics.ratio(40),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.transparent,
      },
})
export default Home;