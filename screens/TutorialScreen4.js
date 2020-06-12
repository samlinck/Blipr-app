import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import TextCustom from '../components/TextCustom';

export default class TutorialScreen4 extends React.Component {

  goToLogin= () => this.props.navigation.navigate('Login');

  render() {
    return (
      <View style={styles.container}>
        <TextCustom>Tutorial 4</TextCustom>

        <TouchableOpacity
          onPress={this.goToLogin}>
            <TextCustom>Next</TextCustom>
        </TouchableOpacity> 
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