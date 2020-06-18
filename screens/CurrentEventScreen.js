import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import TextCustom from '../components/TextCustom';
import CountDown from 'react-native-countdown-component';
import universalstyles from '../assets/style/Style';
import colors from '../constants/Colors';

export default class CurrentEventScreen extends React.Component {
      
      render() {
        return (
          <View style={[universalstyles.container, styles.container]}>
              <TextCustom style={[universalstyles.title, styles.white]}>Zwangere Guy<Text style={styles.red}>.</Text></TextCustom>
            
            <TextCustom style={styles.white}>10/06/2020</TextCustom>
            <Image
            source={require('../assets/images/guy-connect.png')}
            style={styles.image}
             />

            <TextCustom style={styles.text}>Blips made: <Text style={styles.red}>0</Text></TextCustom>

            
            <CountDown
                size={30}
                until={5}
                onFinish={() => alert('Please return your Blipr Wearable')}
                digitStyle={{backgroundColor: '#F72806', borderWidth: 2, borderColor: '#F72806'}}
                digitTxtStyle={{color: '#fff'}}
                timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
                separatorStyle={{color: '#F72806'}}
                timeToShow={['H', 'M', 'S']}
                timeLabels={{m: null, s: null}}
                showSeparator
            />
          </View> 
        )
      }
    
};

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 30,
        lineHeight: 35,
        color: colors.white,
        paddingVertical: 30,
    }, red: {
      color: colors.red,
  },
  white: {
    color: colors.white
  },
  image: {
      marginVertical: 50,
      alignSelf: "center"
  },
  container: {
    backgroundColor: "black",
  }
});