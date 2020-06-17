import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import TextCustom from '../components/TextCustom';
import universalstyles from '../assets/style/Style';
import colors from '../constants/Colors';

export default class TutorialScreen6 extends React.Component {

  goToApp= () => this.props.navigation.navigate('Login');

render() {
    return (
      <View style={styles.container}>
        <View>
          <TextCustom style={[universalstyles.title, styles.title]}>
           5
            <Text style={styles.dot}>.</Text>
          </TextCustom>
          <TextCustom style ={styles.title}>
          Once the event is finished you can find your recorded Blips in your collection. Be aware that your Blips might not appear immediately right after the event.
          </TextCustom>
          </View>  
        <Image
            source={require('../assets/images/tut-6.png')}
            style={styles.image}
          />
        <TouchableOpacity
          onPress={this.goToApp}>
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