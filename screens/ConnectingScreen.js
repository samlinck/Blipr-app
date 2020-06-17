import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import TextCustom from '../components/TextCustom';
import { useNavigation } from '@react-navigation/native';

export default class ConnectScreen extends React.Component {

    constructor(props){
        super(props)
      }

    componentDidMount() {
        setTimeout( Connect = () => {
            return this.props.navigation.navigate('CurrentEventScreen')
        }, 4*2000)
    }

    render () {
        return (
            <View >
                <TextCustom>Image wearable</TextCustom>
            
                <ActivityIndicator size="large"/>
            
    
            </View>
        );
    }
    
};

const styles = StyleSheet.create({
    text: {
        fontSize: 60,
    }
});