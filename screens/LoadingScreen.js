import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import TextCustom from '../components/TextCustom';
// Import firebase and it's auth module
import firebase from 'firebase/app';
import 'firebase/auth';

export default class LoadingScreen extends React.Component {
  
    // As soon as this component is mounted (loaded), do a firebase check if a user is identified
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            // Shorthand if/else for on 'user' which then navigates to either LoginScreen or starts up the App (HomeScreen) navigation
            return this.props.navigation.navigate(user ? 'App' : 'Tutorial1')
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <TextCustom>LOGO</TextCustom>   
                <ActivityIndicator size="large"/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})