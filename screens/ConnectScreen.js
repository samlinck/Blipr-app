import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import TextCustom from '../components/TextCustom';
import { useNavigation } from '@react-navigation/native';
import universalstyles from '../assets/style/Style';
import colors from '../constants/Colors';

export default class ConnectScreen extends React.Component {

    constructor(props){
        super(props)
      }
    
    goToConnect = () => {
        this.props.navigation.navigate('ConnectingScreen')
    }

    render () {
        return (
            <View style= {[universalstyles.container, styles.container]} >
                <View>
                <TextCustom style={universalstyles.title}>Zwangere Guy<Text style={styles.red}>.</Text></TextCustom>
            
                <TextCustom>10/06/2020</TextCustom>
                <Image
                source={require('../assets/images/guy-connect.png')}
                style={styles.image}
                 />
                 <Text style={{color: "#848484", marginBottom: 10}}>Ticket holder:   Sam Ghyselinck</Text>
                 <TextCustom>Press the power button on your Blipr Wearable and press the connect button below.</TextCustom>
                </View>
                <TouchableOpacity
                onPress={this.goToConnect}>
                    <TextCustom style={universalstyles.btn}>Connect Wearable</TextCustom>
                </TouchableOpacity>
            </View>
        );
    }
    
};

const styles = StyleSheet.create({
    text: {
        fontSize: 60,
    },
    red: {
        color: colors.red,
    },
    image: {
        marginVertical: 50,
        alignSelf: "center"
    },
    container: {
        justifyContent: "space-between",
        paddingBottom: 60,
    }
});