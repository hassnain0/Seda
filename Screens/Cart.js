import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import * as Animatable from 'react-native-animatable';

const Cart = () => {
  const data = [
    {
      img: 'https://img.freepik.com/free-photo/stylish-beautiful-woman-posing-against-wooden-wall_285396-4810.jpg?size=626&ext=jpg&uid=R110769931&ga=GA1.1.687601769.1690259058&semt=ais',
      caption: 'Caption 1',
    },
    {
      img: 'https://img.freepik.com/free-photo/stylish-beautiful-woman-posing-against-wooden-wall_285396-4810.jpg?size=626&ext=jpg&uid=R110769931&ga=GA1.1.687601769.1690259058&semt=ais',
      caption: 'Caption 2',
    },
    {
      img: 'https://example.com/image3.jpg',
      caption: 'Caption 3',
    },
  ];

  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={false}
      autoplay={true}
    >
      {data.map((item, index) => (
        <View key={index} style={styles.slide}>
          <Image source={{ uri: item.img }} style={styles.image} />
          <Animatable.View animation="fadeIn" style={styles.captionContainer}>
            <Text style={styles.captionText}>{item.caption}</Text>
          </Animatable.View>
        </View>
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  captionContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  captionText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Cart;
