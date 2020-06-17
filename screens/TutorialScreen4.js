import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import TextCustom from '../components/TextCustom';
import universalstyles from '../assets/style/Style';
import colors from '../constants/Colors';

export default class TutorialScreen4 extends React.Component {

  goToTutorial5 = () => this.props.navigation.navigate('Tutorial5');

  render() {
    return (
      <View style={styles.container}>
        <View>
          <TextCustom style={[universalstyles.title, styles.title]}>
           3
            <Text style={styles.dot}>.</Text>
          </TextCustom>
          <TextCustom style ={styles.title}>
          Wait till the LED circle on your Blipr Wearable turns blue. You are now fully connected.
          </TextCustom>
          </View>  
        <Image
            source={require('../assets/images/tut-4.png')}
            style={styles.image}
          />
        <TouchableOpacity
          onPress={this.goToTutorial5}>
            <TextCustom style= {universalstyles.btn}>Next</TextCustom>
        </TouchableOpacity> 
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 30,
    alignItems: 'stretch',
  }, 
  title: {
    textAlign: "left",
    paddingHorizontal: 25,
  },
  dot: {
    color: colors.red,
  },
  image: {
    alignSelf: "center"
  }
})