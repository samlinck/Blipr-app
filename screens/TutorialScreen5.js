import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import TextCustom from '../components/TextCustom';
import universalstyles from '../assets/style/Style';
import colors from '../constants/Colors';

export default class TutorialScreen5 extends React.Component {

  goToTutorial6 = () => this.props.navigation.navigate('Tutorial6');

  render() {
    return (
      <View style={styles.container}>
        <View>
          <TextCustom style={[universalstyles.title, styles.title]}>
           4
            <Text style={styles.dot}>.</Text>
          </TextCustom>
          <TextCustom style ={styles.title}>
          You can now start recording the concert. If you press the circle button on your Blipr Wearable it will glow red and start recording. Press it again and the recording will stop.
          </TextCustom>
          </View>  
        <Image
            source={require('../assets/images/tut-5.png')}
            style={styles.image}
          />
        <TouchableOpacity
          onPress={this.goToTutorial6}>
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