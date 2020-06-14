import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import TextCustom from '../components/TextCustom';

export default class TutorialScreen5 extends React.Component {

  goToTutorial6 = () => this.props.navigation.navigate('Tutorial6');

  render() {
    return (
      <View style={styles.container}>
        <TextCustom>Tutorial 5</TextCustom>

        <TouchableOpacity
          onPress={this.goToTutorial6}>
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