import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import TextCustom from '../components/TextCustom';
import universalstyles from '../assets/style/Style';
import colors from '../constants/Colors';

export default class TutorialScreen1 extends React.Component {

  goToTutorial2 = () => this.props.navigation.navigate('Tutorial2');

  render() {
    return (
      <View style={styles.container}>
        <View>
          <TextCustom style={[universalstyles.title, styles.title]}>
            Hi there
            <Text style={styles.dot}>.</Text>
          </TextCustom>
          <TextCustom style ={styles.title}>
            Let's learn how to use Blipr in a few easy steps.
          </TextCustom>
          </View>  
        <Image
            source={require('../assets/images/tut-1.png')}
            style={styles.image}
          />
        <TouchableOpacity
          onPress={this.goToTutorial2}>
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