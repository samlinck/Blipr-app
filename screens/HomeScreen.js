import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
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
      <View style={ universalstyles.container }>

        <View style={styles.welcome}>
          <TextCustom style={ [universalstyles.title, styles.title] }>
            Hi, {this.state.name}
            <Text style={styles.dot}>.</Text>
          </TextCustom>
          <TextCustom>
            So far you have made
            <Text style= { styles.dot }> 23 </Text>
            blips at {"\n"}
            <Text style= { styles.dot }>3 </Text>
            different concerts.
          </TextCustom>
        </View>
        <TouchableOpacity
          onPress={this.handleLogout}>
            <TextCustom >Logout</TextCustom>
        </TouchableOpacity>
      
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  title: {
    textAlign: "left",
    marginBottom: 25,
 } ,
 dot: {
  color: colors.red,
 },
})