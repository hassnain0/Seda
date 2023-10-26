import React from 'react';
import {View,Text, StyleSheet,FlatList,Image} from 'react-native';
import { ImageSlider } from "react-native-image-slider-banner";
import { Metrics } from '../themes';

const RoundImage = ({ imageSource }) => (
  <View style={{ margin: 5, borderRadius: 50, overflow: 'hidden' }}>
    <Image
      source={imageSource}
      style={{ width: 65, height: 65 }}
    />
  </View>
);
data=[
  { id: '1', imageSource: require('../assets/MinBoutique.png') },
{ id: '2', imageSource: require('../assets/Wahaj.png') },
{ id: '3', imageSource: require('../assets/Kai.png') },
{ id: '4', imageSource: require('../assets/Noma.png') },
{ id: '5', imageSource: require('../assets/Kour.png') },
]
const Brands=()=>{
return (
    <View>
    <View  style={styles.ImageContainer}>
      <ImageSlider 
    data={[
        {img: 'https://img.freepik.com/free-photo/stylish-beautiful-woman-posing-against-wooden-wall_285396-4810.jpg?size=626&ext=jpg&uid=R110769931&ga=GA1.1.687601769.1690259058&semt=ais'},
        {img: 'https://img.freepik.com/free-photo/young-woman-beautiful-red-dress_1303-17506.jpg?size=626&ext=jpg&ga=GA1.1.2097605529.1691319045&semt=ais'},
        {img: 'https://img.freepik.com/premium-photo/woman-black-long-skirt-shirt-with-colored-patterns-sneakers-white-background-studio-shot_481253-384.jpg?size=626&ext=jpg&ga=GA1.1.2097605529.1691319045&semt=ais'},
        {img: 'https://img.freepik.com/free-photo/emotional-brunette-woman-blue-coat-posing-purple-wall-indoor-photo-beautiful-short-haired-female-model-trendy-midi-dress_197531-5181.jpg?size=626&ext=jpg&ga=GA1.1.2097605529.1691319045&semt=ais'}
    ]}
    autoPlay={true}
   
    closeIconColor="#fff"
/> 
    </View>
    <Text style={styles.TextContainer}>Categories</Text>
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <RoundImage imageSource={item.imageSource} />}
    />
       <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <RoundImage imageSource={item.imageSource} />}
    />
       <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <RoundImage imageSource={item.imageSource} />}
    />
      <Text style={styles.TextContainer2}>Brands</Text>
      <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <RoundImage imageSource={item.imageSource} />}
    />
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <RoundImage imageSource={item.imageSource} />}
    />
    </View>
)
}
const styles=StyleSheet.create({
    TextContainer:{
     justifyContent:'center',
      alignSelf:'center',
        marginTop:Metrics.ratio(20),
        fontSize:20,
        fontWeight:'bold', 
        color:'#083166',
       
      },
      TextContainer2:{
      
           marginTop:Metrics.ratio(20),
           fontSize:20,
           fontWeight:'bold', 
           color:'#083166',
           left:Metrics.ratio(15)
          
         },
      ImageContainer:{
        width: Metrics.ratio(400), 
        height: Metrics.ratio(150),
        paddingTop:Metrics.ratio(5),
        borderRadius:20, 
      }
})
export default Brands;