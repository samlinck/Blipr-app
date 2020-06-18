import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import TextCustom from '../components/TextCustom';
import { useNavigation } from '@react-navigation/native';
import universalstyles from '../assets/style/Style';
import colors from '../constants/Colors';

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
            <View style={[universalstyles.container, styles.container]}>
                 <Image
                source={require('../assets/images/connecting.png')}
                style={styles.image}
                 />
                <TextCustom style={styles.image} >Connecting</TextCustom>
                <ActivityIndicator size="large"/>
            
    
            </View>
        );
    }
    
};

const styles = StyleSheet.create({
    text: {
        fontSize: 60,
    },
    container: {
        backgroundColor: '#EAEAEA',
        justifyContent: "center",
    },
     image: {
        marginVertical: 50,
        alignSelf: "center"
    },
});