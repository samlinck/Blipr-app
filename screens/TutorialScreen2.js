import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import TextCustom from '../components/TextCustom';

export default class TutorialScreen2 extends React.Component {

  goToTutorial3 = () => this.props.navigation.navigate('Tutorial3');

  render() {
    return (
      <View style={styles.container}>
        <TextCustom>Tutorial 2</TextCustom>

        <TouchableOpacity
          onPress={this.goToTutorial3}>
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