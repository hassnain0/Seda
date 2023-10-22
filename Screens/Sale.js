import React from 'react';
import {View,Text, StyleSheet} from 'react-native';
import { ImageSlider } from "react-native-image-slider-banner";
import { Metrics } from '../themes';
const Sale=()=>{
return (
    <View>
         <Text style={styles.TextContainer}>Noma</Text>
    <View  style={styles.ImageContainer}>
      <ImageSlider 
    data={[
        {img: 'https://img.freepik.com/free-psd/mens-short-sleeve-t-shirt-mockups-04_126278-125.jpg?size=626&ext=jpg&uid=R110769931&ga=GA1.1.687601769.1690259058&semt=sph'},
        {img: 'https://img.freepik.com/free-psd/mens-short-sleeve-t-shirt-mockups_126278-122.jpg?size=626&ext=jpg&uid=R110769931&ga=GA1.1.687601769.1690259058&semt=sph'},
        {img: 'https://img.freepik.com/free-psd/blank-white-polo-shirt-isolated-background_1409-4100.jpg?size=626&ext=jpg&uid=R110769931&ga=GA1.1.687601769.1690259058&semt=sph'}
    ]}
    autoPlay={true}
   
    closeIconColor="#fff"
/> 
    </View>
    <Text style={styles.TextContainer}>Top Picks</Text>
    </View>
)
}
const styles=StyleSheet.create({
    TextContainer:{
        marginTop:Metrics.ratio(20),
        fontSize:20,
        fontWeight:'bold', 
        color:'#083166',
        left:Metrics.ratio(20),
      },
      ImageContainer:{
        width: Metrics.ratio(400), 
        height: Metrics.ratio(200),
        paddingTop:Metrics.ratio(20),
        borderRadius:20, 
      }
})
export default Sale;