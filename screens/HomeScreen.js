import React from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import TextCustom from '../components/TextCustom';
import TextInputCustom from '../components/TextInputCustom';
// Import firebase and it's auth module
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

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
      <View style={styles.container}>

        <TextCustom >Blipr 🔴</TextCustom>

        <TextCustom >Welcome, {this.state.name}!</TextCustom>

        <TouchableOpacity
          onPress={this.handleLogout}>
            <TextCustom >Logout</TextCustom>
        </TouchableOpacity>
      
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'center'
  },
})