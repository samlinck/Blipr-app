import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import TextCustom from '../components/TextCustom';
import universalstyles from '../assets/style/Style';
import colors from '../constants/Colors';

export default class TutorialScreen2 extends React.Component {

  goToTutorial3 = () => this.props.navigation.navigate('Tutorial3');

  render() {
    return (
      <View style={styles.container}>
        <View>
          <TextCustom style={[universalstyles.title, styles.title]}>
            1
            <Text style={styles.dot}>.</Text>
          </TextCustom>
          <TextCustom style ={styles.title}>
            Find your concert by scanning the Blipr QR-code on your concert ticket.
          </TextCustom>
          </View>  
        <Image
            source={require('../assets/images/tut-2.png')}
            style={styles.image}
          />
        <TouchableOpacity
          onPress={this.goToTutorial3}>
            <TextCustom style={universalstyles.btn}>Next</TextCustom>
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