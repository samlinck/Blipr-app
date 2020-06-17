import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import TextCustom from '../components/TextCustom';
import universalstyles from '../assets/style/Style';
import colors from '../constants/Colors';


export default class TutorialScreen3 extends React.Component {

  goToTutorial4 = () => this.props.navigation.navigate('Tutorial4');

  render() {
    return (
      <View style={styles.container}>
        <View>
          <TextCustom style={[universalstyles.title, styles.title]}>
           2
            <Text style={styles.dot}>.</Text>
          </TextCustom>
          <TextCustom style ={styles.title}>
          Connect your wearable by pressing the power button on the side of the Blipr Wearable. And press ‘CONNECT WEARABLE’ in the Blipr application.
          </TextCustom>
          </View>  
        <Image
            source={require('../assets/images/tut-3.png')}
            style={styles.image}
          />
        <TouchableOpacity
          onPress={this.goToTutorial4}>
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