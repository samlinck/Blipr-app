import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import TextCustom from '../components/TextCustom';

export default class TutorialScreen4 extends React.Component {

  goToTutorial5 = () => this.props.navigation.navigate('Tutorial5');

  render() {
    return (
      <View style={styles.container}>
        <TextCustom>Tutorial 4</TextCustom>

        <TouchableOpacity
          onPress={this.goToTutorial5}>
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