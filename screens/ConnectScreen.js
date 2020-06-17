import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import TextCustom from '../components/TextCustom';
import { useNavigation } from '@react-navigation/native';

export default class ConnectScreen extends React.Component {

    constructor(props){
        super(props)
      }
    
    goToConnect = () => {
        this.props.navigation.navigate('ConnectingScreen')
    }

    render () {
        return (
            <View >
                <TextCustom>Zwangere Guy</TextCustom>
            
                <TextCustom>10/06/2020</TextCustom>
            
    
                <TouchableOpacity
                onPress={this.goToConnect}>
                    <TextCustom>Connect Wearable</TextCustom>
                </TouchableOpacity>
            </View>
        );
    }
    
};

const styles = StyleSheet.create({
    text: {
        fontSize: 60,
    }
});