import React from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ActivityIndicator} from 'react-native';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import DatePicker from 'react-native-datepicker'
import TextCustom from '../components/TextCustom';
import TextInputCustom from '../components/TextInputCustom';


export default class RegisterScreen extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      birthday: '',
      errorMessage: null,
    }
  }

  handleNameChange = name => {
    this.setState({ name });
  }

  handleEmailChange = email => {
    this.setState({ email });
  }

  handlePasswordChange = password => {
    this.setState({ password });
  }

  handleConfirmPasswordChange = confirmPassword => {
    this.setState({ confirmPassword });
  }

  handleBirthdayChange = birthday => {
    this.setState({ birthday });
  }

  

  handleRegister = () => {
    // Check if Password and Password confirmation are the same
    if(this.state.password !== this.state.confirmPassword){
      this.setState({
        errorMessage: "Passwords must match!"
      })
      return true;
    }
    // Register a user with the email and password from the state
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    // On succes: save name / birthday & change nav to AppNavigation which loads up the HomeScreen
    .then( () => {
      firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).set({
        name: this.state.name,
        birthday: this.state.birthday,
      })
      this.props.navigation.navigate('App')
    })
    // On error: show error
    .catch( error => this.setState({ errorMessage: error.message }))
  }

  goToLogin = () => this.props.navigation.navigate('Login');

  render(){
    return (
      <View style={styles.container}>

        <TextCustom>Blipr</TextCustom>

        <TextCustom>Register</TextCustom>
        
        {this.state.errorMessage && 
          <Text>
            {this.state.errorMessage}
          </Text>}

        <TextInputCustom
          placeholder="Name"
          onChangeText={this.handleNameChange}
          value={this.state.name}
        />

        <TextInputCustom
          placeholder="E-mail"
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={this.handleEmailChange}
          value={this.state.email}
        />

        <TextInputCustom
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={this.handlePasswordChange}
          value={this.state.password}
        />

        <TextInputCustom
          secureTextEntry={true}
          placeholder="Confirm password"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={this.handleConfirmPasswordChange}
          value={this.state.confirmPassword}
        />

        <DatePicker
          style={{width: 300}}
          date={this.state.birthday}
          value={this.state.birthday}
          mode="date"
          placeholder="Your birthday"
          format="DD-MM-YYYY"
          minDate="01-01-1910"
          maxDate="01-01-2020"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          showIcon={false}
          onDateChange={this.handleBirthdayChange}
        />

        <TouchableOpacity
          onPress={this.handleRegister}>
            <TextCustom>Register</TextCustom>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.goToLogin}>
            <TextCustom>Already have an account?</TextCustom>
        </TouchableOpacity> 



      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
})