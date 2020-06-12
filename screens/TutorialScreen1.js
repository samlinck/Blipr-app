import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import TextCustom from '../components/TextCustom';

export default class TutorialScreen1 extends React.Component {

  goToTutorial2 = () => this.props.navigation.navigate('Tutorial2');

  render() {
    return (
      <View style={styles.container}>
        <TextCustom>Tutorial 1</TextCustom>

        <TouchableOpacity
          onPress={this.goToTutorial2}>
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