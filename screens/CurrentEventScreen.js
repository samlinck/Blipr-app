import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import TextCustom from '../components/TextCustom';
import CountDown from 'react-native-countdown-component';

export default class CurrentEventScreen extends React.Component {
      
      render() {
        return (
          <View>
            <TextCustom>Zwangere Guy</TextCustom>
            
            <TextCustom>10/06/2020</TextCustom>

            <TextCustom>Blips: 0</TextCustom>

            
            <CountDown
                size={30}
                until={5000}
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
        fontSize: 60,
    }
});