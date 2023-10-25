import React from 'react';
import {View,Text, StyleSheet} from 'react-native';
import { ImageSlider } from "react-native-image-slider-banner";
import { Metrics } from '../themes';
const Brands=()=>{
return (
    <View>
         <Text style={styles.TextContainer}>Categories</Text>
    <View  style={styles.ImageContainer}>
      <ImageSlider 
    data={[
        {img: 'https://img.freepik.com/free-photo/stylish-beautiful-woman-posing-against-wooden-wall_285396-4810.jpg?size=626&ext=jpg&uid=R110769931&ga=GA1.1.687601769.1690259058&semt=ais'},
        {img: 'https://img.freepik.com/premium-psd/sweatshirt-mockup-design_1409-2407.jpg?size=626&ext=jpg&uid=R110769931&ga=GA1.1.687601769.1690259058&semt=sph'},
        {img: 'https://img.freepik.com/free-photo/men-s-beige-short-sleeve-shirt-casual-apparel_53876-103576.jpg?size=626&ext=jpg&uid=R110769931&ga=GA1.1.687601769.1690259058&semt=ais'},
        {img: 'https://img.freepik.com/free-psd/women-ideal-racerback-tank-mockup_126278-206.jpg?size=626&ext=jpg&uid=R110769931&ga=GA1.1.687601769.1690259058&semt=ais'}
    ]}
    autoPlay={true}
   
    closeIconColor="#fff"
/> 
    </View>
    {/* <Text style={styles.TextContainer}>Top Picks</Text> */}
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
export default Brands;