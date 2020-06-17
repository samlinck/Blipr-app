import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, ActivityIndicator, TouchableOpacity } from 'react-native';
// Import firebase and it's auth module
import firebase from 'firebase/app';
import TextCustom from '../components/TextCustom';
import TextInputCustom from '../components/TextInputCustom';
import universalstyles from '../assets/style/Style';
import colors from '../constants/Colors';

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
    .then( () => this.props.navigation.navigate('Tutorial1'))
    .catch( error => this.setState({ errorMessage: error.message }))
  }

  goToRegister = () => this.props.navigation.navigate('Register');

  render() {
      return (
        <View style={universalstyles.container}>
          
          <TextCustom style={[universalstyles.title, styles.title]} >Login<Text style={styles.dot}>.</Text></TextCustom>
          <Image
            source={require('../assets/images/login.png')}
            style={styles.loginImage}
          />
          
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
            <TextCustom onPress={this.handleLogin} style= {[universalstyles.btn, styles.btn]}>Login</TextCustom>
          </TouchableOpacity>

          <View style={styles.links}>
            <TouchableOpacity
            onPress={this.goToRegister}>
              <TextCustom onPress={this.goToRegister} style={universalstyles.link} >No account yet?</TextCustom>
            </TouchableOpacity>

            <TouchableOpacity>
              <TextCustom style={universalstyles.link}>Forgot password?</TextCustom>
            </TouchableOpacity>
          </View>  

          <View style={styles.orContainer}>
            <Text style={styles.line}></Text>
            <Text style={styles.or}>or</Text>
            <Text style={styles.line}></Text>
          </View>

          <TouchableOpacity>
            <TextCustom style= {universalstyles.btn}>Sign in with Facebook</TextCustom>
          </TouchableOpacity>

        </View>
      )
  }
}

const styles = StyleSheet.create({
 // Here styling
 title: {
    textAlign: "left",
    marginBottom: 25,
 } ,
 dot: {
  color: colors.red,
 },
 loginImage: {
    alignSelf: "center",
    width: 250,
    height: 250,
  },
  btn: {
    alignSelf: "flex-start",
    marginVertical: 25,
  },
  links: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 25,
  },
  line: {
    flex:1,
    height: 1,
    backgroundColor: 'black',
  },
  or: {
    width: 50,
    textAlign: "center",
  }
})