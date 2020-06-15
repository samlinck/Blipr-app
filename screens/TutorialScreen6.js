import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import TextCustom from '../components/TextCustom';

export default class TutorialScreen6 extends React.Component {

  goToApp= () => this.props.navigation.navigate('App');

  render() {
    return (
      <View style={styles.container}>
        <TextCustom>Tutorial 6</TextCustom>

        <TouchableOpacity
          onPress={this.goToApp}>
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