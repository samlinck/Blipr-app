import React from 'react';
import { StyleSheet, ImageBackground, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import TextCustom from '../components/TextCustom';
import TextInputCustom from '../components/TextInputCustom';
// Import firebase and it's auth module
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import universalstyles from '../assets/style/Style';
import colors from '../constants/Colors';
import LoginScreen from '../screens/LoginScreen';


export default class HomeScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name: "",
    };
  }

  // When this component is mounted (loaded), set the name.
  componentDidMount() {
    // Get name via Firestore.
    this.getName();
  }
  
  getName = () => {
    // Get authenticated user's ID
    let uid = firebase.auth().currentUser.uid;
    // Get their name from firestore and set it in state
    firebase.firestore().collection('users').doc(uid).get()
    .then(doc => {
      this.setState({ 
        name: doc.data().name,
      });
    });
  }

  handleLogout = () => {
    firebase.auth().signOut();
  }

  render() {
    return (
      <ScrollView>

        <View style={ styles.welcome }>
          <TextCustom style={ [universalstyles.title, styles.title] }>
            Hi, {this.state.name}
            <Text style={styles.dot}>.</Text>
          </TextCustom>
          <TextCustom style={ styles.white }>
            So far you have made
            <Text style= { styles.dot }> 23 </Text>
            blips at {"\n"}
            <Text style= { styles.dot }>3 </Text>
            different concerts.
          </TextCustom>
        </View>
        <View style= {styles.shows}>
          <TextCustom style={ [universalstyles.title, styles.title] }>
            Your shows
            <Text style={styles.dotBlack}>.</Text>
          </TextCustom>
          <View style={styles.showsContainer}>
            <View style={styles.imgContainer}>
              <ImageBackground 
              source={require('../assets/images/show-1.png')}
              style={styles.image}>
                <TextCustom style={styles.text}>MCDE</TextCustom>
              </ImageBackground>
            </View>
            <View style={styles.imgContainer}>
              <ImageBackground 
              source={require('../assets/images/show-2.png')}
              style={styles.image}>
                <TextCustom style={styles.text}>Jayda G</TextCustom>
              </ImageBackground>
            </View>
            <View style={styles.imgContainer}>
              <ImageBackground 
              source={require('../assets/images/show-3.png')}
              style={styles.image}>
                <TextCustom style={styles.text}>Mac Demarco</TextCustom>
              </ImageBackground>
            </View>
            <View style={styles.imgContainer}>
              <ImageBackground 
              source={require('../assets/images/show-4.png')}
              style={styles.image}>
                <TextCustom style={styles.text}>Angèle</TextCustom>
              </ImageBackground>
            </View>
          </View>
        </View>
        <View style= {styles.blips}>
          <TextCustom style={ [universalstyles.title, styles.titleBlack] }>
            Your blips
            <Text style={styles.dot}>.</Text>
          </TextCustom>
          <View style={styles.showsContainer}>
            <View style={styles.imgContainer}>
              <ImageBackground 
              source={require('../assets/images/blip-1.png')}
              style={styles.image}>
                <TextCustom style={[styles.text, styles.textBlack]}>Favoriete nummer</TextCustom>
              </ImageBackground>
            </View>
            <View style={styles.imgContainer}>
              <ImageBackground 
              source={require('../assets/images/blip-2.png')}
              style={styles.image}>
                <TextCustom style={[styles.text, styles.textBlack]}>One kiss</TextCustom>
              </ImageBackground>
            </View>
            <View style={styles.imgContainer}>
              <ImageBackground 
              source={require('../assets/images/blip-3.png')}
              style={styles.image}>
                <TextCustom style={[styles.text, styles.textBlack]}>Dansen</TextCustom>
              </ImageBackground>
            </View>
            <View style={styles.imgContainer}>
              <ImageBackground 
              source={require('../assets/images/blip-4.png')}
              style={styles.image}>
                <TextCustom style={[styles.text, styles.textBlack]}>Wauw</TextCustom>
              </ImageBackground>
            </View>
          </View>
        </View>
        <View style= {styles.welcome}>
          <TextCustom style={ [universalstyles.title, styles.title] }>
            Upcoming shows
            <Text style={styles.dot}>.</Text>
          </TextCustom>
          <View style={styles.showsContainer}>
            <View style={styles.imgContainer}>
              <ImageBackground 
              source={require('../assets/images/up-1.png')}
              style={styles.image}>
                <TextCustom style={styles.text}>Selah Sue</TextCustom>
              </ImageBackground>
            </View>
            <View style={styles.imgContainer}>
              <ImageBackground 
              source={require('../assets/images/up-2.png')}
              style={styles.image}>
                <TextCustom style={styles.text}>Zwangere Guy</TextCustom>
              </ImageBackground>
            </View> 
          </View>
        </View>
        {/* <TouchableOpacity
          onPress={this.handleLogout}>
            <TextCustom >Logout</TextCustom>
        </TouchableOpacity> */}
      
      </ScrollView>
    )
  }
  
}

const styles = StyleSheet.create({
  title: {
    textAlign: "left",
    // marginBottom: 25,
    color: colors.white,
 } ,
 dot: {
  color: colors.red,
 },
 dotBlack: {
  color: "black"
 },
 welcome: {
   backgroundColor: "black",
   paddingVertical: 30,
   paddingHorizontal: 25,
 },
 white: {
   color: colors.white,
 },
 shows: {
   backgroundColor: colors.red,
   paddingVertical: 20,
   paddingHorizontal: 25,
 },
 showsContainer: {
  flexDirection: "row",
  width: '100%',
  // borderColor: "black",
  // borderWidth: 2,
  justifyContent: "space-between",
  flexWrap: 'wrap',
 },
 imgContainer: {
    width: '50%',
    paddingHorizontal: 10,
    marginVertical: 25,
 },
 image: {
  resizeMode: "contain",
  justifyContent: "center",
  alignItems: "center",
  width: '100%',
  height: 100,
  // borderColor: "blue",
  // borderWidth: 2,
},
text: {
  color: colors.white,
  paddingHorizontal: 5,
  textAlign: "center",
},
  blips:{
    paddingVertical: 20,
    paddingHorizontal: 25,
  },
  titleBlack: {
    color: colors.black
  },
  textBlack: {
    color: "black",
  }
})