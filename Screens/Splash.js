import React ,{useEffect} from 'react';
import {StyleSheet,ImageBackground} from 'react-native';
import LottieView from 'lottie-react-native';
import Login from './Login';
import { Metrics } from '../themes';

const  SplashScreen = ({navigation}) => {

  
  useEffect(() => {
   setTimeout(() => {
      navigation.navigate('Login');
    },3000 );

    return () => {
    };
  }, []);
  return (
   <ImageBackground source={require('../assets/ImageBackground.png')} style={styles.image}>
    <LottieView source={require('../assets/Rotator.json')}  style={styles.LottieView} autoPlay loop />
   </ImageBackground>
  );
};
const styles = StyleSheet.create({
    image: {
        width: Metrics.ratio(380),
        height: Metrics.ratio(900),
      
      },
      LottieView:{
        paddingTop:650,
        left:160,
        width: Metrics.ratio(50),
        height: Metrics.ratio(100),
      }
 
});

export default SplashScreen;
