import React from 'react';
import { StyleSheet, Text, View, TextInput, ActivityIndicator, TouchableOpacity } from 'react-native';
// Import firebase and it's auth module
import firebase from 'firebase/app';
import TextCustom from '../components/TextCustom';
import TextInputCustom from '../components/TextInputCustom';

export default class LoginScreen extends React.Component {

  constructor(props){
    super(props)
    this.state={
      fontLoaded: false,
      email: '',
      password: '',
      errorMessage: null,
    }
  }
  
  handleEmailChange = email => {
    this.setState({ email });
  }

  handlePasswordChange = password => {
    this.setState({ password });
  }

  handleLogin = () => {
    if(this.state.email === '' || this.state.password === ''){
      this.setState({
        errorMessage: "Empty fields are not permitted!"
      })
      // End function by returning true, disables actual login on this error.
      return true;
    }
    // Signup a user with email and password from the state
    // On success: change nav to AppNavigation which loads up the HomeScreen
    // On error: show error
    const{ email, password } = this.state
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then( () => this.props.navigation.navigate('App'))
    .catch( error => this.setState({ errorMessage: error.message }))
  }

  goToRegister = () => this.props.navigation.navigate('Register');

  render() {
      return (
        <View >

          <TextCustom >Blipr</TextCustom>
          
          <TextCustom >Login</TextCustom>
          
          {this.state.errorMessage &&
            <Text>
              {this.state.errorMessage}
            </Text>}

          <TextInputCustom
            name="email"
            value={this.state.email}
            placeholder="E-mail"
            autoCapitalize="none"
            keyboardType="email-address"
            onChangeText={this.handleEmailChange}
          />
         
          <TextInputCustom
            name="password"
            value={this.state.password}
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry={true} // Masks the input, useful for passwords
            onChangeText={this.handlePasswordChange}
          />
        
          <TouchableOpacity
           onPress={this.handleLogin}>
            <TextCustom onPress={this.handleLogin}>Login</TextCustom>
          </TouchableOpacity>

          <TouchableOpacity
           onPress={this.goToRegister}>
            <TextCustom onPress={this.goToRegister}>No account yet?</TextCustom>
          </TouchableOpacity>

          <TouchableOpacity>
            <TextCustom>Forgot password?</TextCustom>
          </TouchableOpacity>

          <TouchableOpacity>
            <TextCustom>Sign in with Facebook</TextCustom>
          </TouchableOpacity>

        </View>
      )
  }
}

const styles = StyleSheet.create({
 // Here styling
})