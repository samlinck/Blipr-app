import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import TextCustom from '../components/TextCustom';

export default class TutorialScreen3 extends React.Component {

  goToTutorial4 = () => this.props.navigation.navigate('Tutorial4');

  render() {
    return (
      <View style={styles.container}>
        <TextCustom>Tutorial 3</TextCustom>

        <TouchableOpacity
          onPress={this.goToTutorial4}>
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