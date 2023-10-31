import React, { useEffect, useState } from 'react';
import {View,Text, StyleSheet, FlatList,Image,ScrollView, Animated, TouchableOpacity} from 'react-native';
import { Metrics } from '../themes';

const RoundImage = ({ imageSource }) => (
    <View style={{ margin: 5, borderRadius: 50, overflow: 'hidden' }}>
      <Image
        source={imageSource}
        style={{ width: 65, height: 65 }}
      />
    </View>
  );
const Designers=()=>{
    const [blinkTextVisible, setBlinkTextVisible] = useState(true);
    const fadeAnim = new Animated.Value(1);

    useEffect(() => {
        // Blink animation
        const blinkAnimation = Animated.loop(
          Animated.sequence([
            Animated.timing(fadeAnim, { toValue: 0, duration: 1000, useNativeDriver: false }),
            Animated.timing(fadeAnim, { toValue: 1, duration: 1000, useNativeDriver: false }),
          ]),
          { iterations: -1 }
        );
    
        blinkAnimation.start();
    
        return () => {
          blinkAnimation.stop();
        };
      }, []);
    data=[
        { id: '1', imageSource: require('../assets/MinBoutique.png') },
  { id: '2', imageSource: require('../assets/Wahaj.png') },
  { id: '3', imageSource: require('../assets/Kai.png') },
  { id: '4', imageSource: require('../assets/Noma.png') },
  { id: '5', imageSource: require('../assets/Kour.png') },
    ]
    
return (
    <ScrollView>
    <View>
        <View>
        <View style={styles.underline} />
        <Text style={styles.TextContainer}>Top Designers</Text>
        <View style={styles.underline} />
        
        {/* The rest of your code for other sections... */}
      </View>
         <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <RoundImage imageSource={item.imageSource} />}
    />
     <Text style={styles.TextContainer}>The Best</Text>
     <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <RoundImage imageSource={item.imageSource} />}
    />
      <Text style={styles.TextContainer}>Featured</Text>
   
      <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.row}>
          
        <TouchableOpacity>
          <Image
            source={require('../assets/Featured.png')}
            style={styles.image}
          />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
            source={require('../assets/Accessories.png')}
            style={styles.image2}
          /></TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity>
          <Image
            source={require('../assets/Heels.png')}
            style={styles.image}
          />
          </TouchableOpacity>
          <TouchableOpacity><Image
            source={require('../assets/Abaya.png')}
            style={styles.image3}
          />
          </TouchableOpacity>
        </View>
      </View>
    </View>
       <Text style={styles.TextContainer}>Offers</Text>
       <Animated.View style={{ opacity: blinkTextVisible ? fadeAnim : 1 }}>
       <Text style={styles.blinkingText}>15%-50% </Text>
          <Text style={styles.blinkingText}>Summer </Text>
          <Text style={styles.blinkingText1}>Sale</Text>
        </Animated.View>
    </View>
    </ScrollView>
)
}
const styles=StyleSheet.create({
    TextContainer:{
        alignSelf:'center',
        alignItems:'center',
        marginTop:Metrics.ratio(20),
        fontSize:20,
        fontWeight:'bold', 
        color:'#083166',
       
      }, blinkingText: {
        fontSize: 60,
        textAlign: 'center',
        color: '#EFA61F', // Change the color as needed
      },
      blinkingText1: {
        fontSize: 60,
        textAlign: 'right',
        color: '#EFA61F', // Change the color as needed
      },
     
      ImageContainer:{
        alignItems:'center',
        width: Metrics.ratio(400), 
        height: Metrics.ratio(200),
        paddingTop:Metrics.ratio(20),
        borderRadius:20, 
      },
      FeaturedContainer:{
        width:Metrics.ratio(350),
        height:Metrics.ratio(220)
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      imageContainer: {
        flexDirection: 'column', // Images will be placed in columns
      },
      row: {
        flexDirection: 'row',
      },
      image: {
        width: Metrics.ratio(150), // Adjust the width to create square images
        height: Metrics.ratio(150), // Adjust the height to create square images
        margin: Metrics.smallMargin,
      },
      image3: {
        width: Metrics.ratio(210), // Adjust the width to create square images
        height: Metrics.ratio(250), // Adjust the height to create square images
        marginTop: Metrics.ratio(5),
      },
      image2: {
        width: Metrics.ratio(200), // Adjust the width to create square images
        height:Metrics.ratio(150), // Adjust the height to create square images
        marginTop: Metrics.ratio(5),
      },
})
export default Designers;