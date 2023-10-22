import  React,{useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import { StyleSheet} from 'react-native';
import {Colors, Metrics} from '../themes';
import MainTextInput from '../components/MainTextInput';
import Icon from '../helpers/Icons';
import NetInfo from '@react-native-community/netinfo'
import Button from '../components/Button';
import Toast from 'react-native-toast-message';
import util from '../helpers/util';
import { auth, db } from './Firebase';
import ImagePicker,{launchImageLibrary} from 'react-native-image-picker';

const Join=({navigation})=> {

 
  
 const [loader,setLoader]=React.useState(false);
 const [ImageData,setImageData]=useState(null);
  const [state, setState] = React.useState({
    image:null,
    email: '',
   phone:'',
   Nationality:'',
   website:'',
   brandName:'',
   dateofBrand:'',
   AvailableDesign:'',
   PiecesDesign:'',
    name: '',
    birthday:'',
  

  });
  const [isConnected,setIsConnected]=React.useState(true)

  const _handleTextChange = (name, val) => {
    setState({
      ...state,
      [name]: val,
    });
  };

  React.useEffect(()=>{
  
    const unsubscribe=NetInfo.addEventListener(state=>{
    setIsConnected(state.isConnected);
    })
    return ()=>{
      unsubscribe();
    }
}) 
 

  const _validation = () => {
    const {email, name,Nationality,phone,brandName,dateofBrand,website,SocialMedia,AvailableDesign,PiecesDesign,birthday } =
      state;
    if (util.stringIsEmpty(name)) {
      util.errorMsg('Enter  Name');
      setLoader(false);
      return false;
    }
    if (util.stringIsEmpty(birthday)) {
        util.errorMsg('Enter Birthday Date');
        setLoader(false);
        return false;
      }
      if (util.stringIsEmpty(phone)) {
        util.errorMsg('Enter Phone Number');
        setLoader(false);
        return false;
      }
    if (util.stringIsEmpty(email)) {
        util.errorMsg('Enter Email Address');
        setLoader(false);
        return false;
      }
      if (util.stringIsEmpty(Nationality)) {
        util.errorMsg('Enter Nationality');
        setLoader(false);
        return false;
      }
    if (util.stringIsEmpty(brandName)) {
      util.errorMsg('Enter Brand Name');
      setLoader(false);
      return false;
    }
    if (util.stringIsEmpty(dateofBrand)) {
      util.errorMsg('Enter Brand Date');
      setLoader(false);
      return false;
    }
    if (util.stringIsEmpty(website)) {
      util.errorMsg('Enter website');
      setLoader(false);
      return false;
    }
  
    if (util.stringIsEmpty(AvailableDesign)) {
        util.errorMsg('Enter Available Design');
        setLoader(false);
        return false;
      }
      if (util.stringIsEmpty(PiecesDesign)) {
        util.errorMsg('Enter Pieces Design');
        setLoader(false);
        return false;
      }
    return true;
  };
  const onRegister = () => {
    setLoader(true);
    if (!_validation()) {
      setLoader(false)
      return false;
    } 
    else{
      setLoader(false)
    }
    if( ImageData==null){
      util.errorMsg("Please select Images")
      setLoader(false);
      return false;
      
    }
   
    
    
  };
//Options For Media Selection
  const options = {
    mediaType: 'mixed', // Allow both photos and videos
    quality: 0.5, // Adjust image quality as needed
    maxWidth: 800, // Adjust the maximum image width
    maxHeight: 600, // Adjust the maximum image height
    allowsEditing: false, // Whether to allow image editing
    noData: true, // If true, removes the base64-encoded data field from the response
    mimeTypes: ['image/jpeg', 'image/jpg', 'image/png',],
    selectionLimit:5,
  };
  const ImageSelect=async()=>{
    if (!_validation()) {
      util.errorMsg("Please enter above Details")
      return false;
      
    }

// You can also use as a promise without 'callback':
const result = await launchImageLibrary(options);
console.log(result);
if (result.didCancel) {
  console.log('Image picker was canceled');
} else if (result.error) {
  console.log('Image picker error:', result.error);
} else {
  const { uri, type,} = result;

  if (['image/jpeg', 'image/jpg', 'image/png'].includes(type)) {
    // The selected file is a JPG, JPEG, or PNG image
    setImageData(uri);
    // You can handle the image here
  } else {
    // The selected file is not a supported format
    console.log('Unsupported file format');
  }
}
  }
  const onRegisterApiCall = async ()=> {
  
    await db.collection("Shops").add({
        Name:state.name,
        Email:state.email,
        BirthdayDate:state.birthday,
        Phone:state.phone,
        Nationality:state.Nationality,
        BrandName:state.brandName,
        Website:state.website,
        AvailableDesign:state.AvailableDesign,
        PiecesDesign:state.PiecesDesign,
        ImageChoose:ImageData,
       }).then(()=>{
        setLoader(false);

       }).catch((error)=>console.log(error))
  
   resetForm();
   util.successMsg(" Congratulations You're Successfully Registered")
  };

  const resetForm = () => {
    setState({
        email: '',
        name: '',
        phone: '',
        website:'',
        brandName:'',
        Nationality:'',
        AvailableDesign:'',
        birthday:'',
    });
  };

  return (
      <SafeAreaView style={styles.container}>
         <View style={styles.logoView}>
         
        </View>
        
        <ScrollView>
        <Text style={styles.TextContainer}>Open a SEDA Shop</Text>
          <View style={styles.registeredContainer}>
            <MainTextInput
             
              onChangeText={t => _handleTextChange('name', t)}
              value={state.name}
              label="Name"
              placeholder=""
            
              autoCapitalize={'none'}
            />

            <MainTextInput
              
              onChangeText={t => _handleTextChange('birthday', t)}
              value={state.birthday}
              label="Date of Birth"
              placeholder=""
              keyboardType={'numeric'}
              autoCapitalize={'none'}
            />
            
            <MainTextInput
            
              onChangeText={t => _handleTextChange('phone', t)}
              value={state.phone}
              label="Phone Number"
              placeholder=""
              keyboardType="number-pad"
              autoCapitalize={'none'}
            />
              <MainTextInput
            
            onChangeText={t => _handleTextChange('email', t)}
            value={state.email}
            label="Email"
            placeholder=""
            autoCapitalize={'none'}
          />
           <MainTextInput
            
            onChangeText={t => _handleTextChange('Nationality', t)}
            value={state.Nationality}
            label="Nationality"
            placeholder=""
            autoCapitalize={'none'}
          />
           <MainTextInput
            
            onChangeText={t => _handleTextChange('brandName', t)}
            value={state.brandName}
            label="Brand Name"
            placeholder=""
            
            autoCapitalize={'none'}
          />
           <MainTextInput
            
            onChangeText={t => _handleTextChange('dateofBrand', t)}
            value={state.dateofBrand}
            label="Date of brands establishment"
            placeholder=""
            keyboardType="number-pad"
            autoCapitalize={'none'}
          />
          <MainTextInput
            
            onChangeText={t => _handleTextChange('website', t)}
            value={state.website}
            label="Website (Reference)"
            placeholder=""
            autoCapitalize={'none'}
          />
      
           <MainTextInput
            
            onChangeText={t => _handleTextChange('AvailableDesign', t)}
            value={state.AvailableDesign}
            label="Number of Available Design"
            placeholder=""
            autoCapitalize={'none'}
          />
           <MainTextInput
            
            onChangeText={t => _handleTextChange('PiecesDesign', t)}
            value={state.PiecesDesign}
            label="Pieces of each Design (all sizes)"
            placeholder=""
            autoCapitalize={'none'}
          />
<Text style={styles.BottomTextContainer}>Add some products images</Text>
<TouchableOpacity onPress={ImageSelect}>
  <Image style={styles.ImageContainer} source={require('../assets/ImagePicker.png')}></Image>
</TouchableOpacity> 
       
              <View style={styles.buttonView}>
                <Button loader={loader}
                  btnPress={onRegister}
                  label={"Apply"}
                />
            
            </View>
            
          </View>
          
         
          
        </ScrollView>
        <Toast ref={ref => Toast.setRef(ref)} />
      </SafeAreaView>
    
  );
}
const styles=StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: Colors.background.primary,
      },
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
      scrollContainer: {
        flex: 1,
        paddingHorizontal: Metrics.smallMargin,
      },
      logoView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Metrics.ratio(10),
    
        marginBottom: Metrics.ratio(20),
      },
      textHeader: {
        textAlign:'center',
        alignContent:'center',
        color: Colors.white,
        fontSize: Metrics.ratio(20),
        fontWeight: 'bold',
        paddingLeft: Metrics.ratio(20),
      },
      ImageContainer:{
        marginLeft:Metrics.ratio(40),
        marginRight:Metrics.ratio(30),
height:Metrics.ratio(150),
width:Metrics.ratio(270)
      },
      socialButtonContainer: {
        marginTop:Metrics.ratio(20),
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        
      },
      BottomTextContainer:{
            fontSize:15,
            marginLeft:Metrics.ratio(35),
            color:'#4C4C4C',
            paddingTop:Metrics.ratio(5),

      },
      socialButton: {
        backgroundColor: 'white', // Set your desired background color for the buttons
        width: Metrics.vw * 18,
        height: Metrics.vh * 6,
        borderRadius: Metrics.ratio(10),
        justifyContent: 'center',
        alignItems: 'center',
      },
      socialButtonIcon: {
        width: Metrics.ratio(95),
        height: Metrics.ratio(25),
        resizeMode: 'contain',
      }, 
      logo: {
        resizeMode: 'contain',
        width: Metrics.ratio(200),
        height: Metrics.ratio(170),
      },
      TextContainer:{
        marginTop:Metrics.ratio(20),
        fontSize:25, 
        textDecorationLine: 'underline', 
        color:'#083166',
        left:Metrics.ratio(30),
      },
      logoText: {
        color: Colors.descriptionColor,
        marginTop: Metrics.ratio(-20),
        marginBottom: Metrics.ratio(20),
      },
      forgotPassowordView: {
        alignItems: 'flex-end',
        padding: Metrics.ratio(10),
      },
      forgotPasswordText: {
        color: Colors.descriptionColor,
        textDecorationLine: 'underline',
        fontSize: Metrics.ratio(12),
      },
      buttonView: {
        height:Metrics.vh*6,
        backgroundColor:'#083166',
borderRadius:Metrics.ratio(70),
        marginTop: Metrics.ratio(20),
        width: Metrics.vw * 60,
        marginHorizontal: Metrics.vw * 40,
        justifyContent: "center",
        alignItems: "center",
      },
     
      backView: {
        
borderRadius:Metrics.ratio(30),
        marginTop: Metrics.ratio(20),
        width: Metrics.vw * 60,
        marginHorizontal: Metrics.vw * 50,
        justifyContent: "center",
        alignItems: "center",
      },
      iconStyle: {
        fontSize: Metrics.ratio(20),
        color: Colors.themeColor,
      },
     
    
      genderRow: {
        flex: 1.5,
        flexDirection: 'row',
        paddingVertical: Metrics.ratio(10),
    
        paddingHorizontal: Metrics.ratio(10),
      },
      genderView: {
        borderBottomColor: Colors.borderColor,
        flex: 1,
        borderBottomWidth: 1,
        flexDirection: 'row',
        height: 50,
      },
      iconsRound: {
        width: Metrics.ratio(45),
        height: Metrics.ratio(45),
        borderRadius: Metrics.ratio(90),
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.themeColor,
        backgroundColor: Colors.transparent,
      },
      genderBtnContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: Metrics.ratio(10),
        // peddingLeft: Metrics.ratio(10),
      },
      genderText: {
        paddingLeft: Metrics.ratio(5),
        paddingRight: Metrics.ratio(5),
      },
      registeredContainer: {
        marginTop: Metrics.ratio(10),
      },
      rowView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      main: {
        overflow: "hidden",
        borderRadius: Metrics.borderRadius,
        backgroundColor: "transparent",
        flexDirection: "row",
        alignItems: "center",
        minHeight: Metrics.ratio(50),
        marginVertical: Metrics.ratio(8),
        marginHorizontal: Metrics.ratio(10),
    },
    dropDownView:{
      flex:1,
      borderBottomWidth: 1,
      borderBottomColor:Colors.borderColor
      
    }
})
export default Join;
