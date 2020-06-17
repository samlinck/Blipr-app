import React from 'react';
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';

export default class TextCustom extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            fontloaded: false,
        }
    }

    // asyncroon font laden en als did lukt gaan we de state van fontLoaded op true zetten
    async UNSAFE_componentWillMount() {
        await Font.loadAsync({
            'blipr': require('../assets/fonts/Graphik-Bold.ttf'),
        })
        this.setState({ fontLoaded: true })
    }

    render() {
        /* als de state van fontLoaded true is dan gaan we <Text> tonen waar de font op kunnen toepassen, anders <ActivityIndicator> */
        if (this.state.fontLoaded) {
            return (
                <View>
                    <Text style={[styles.defaultStyle, this.props.style]}>
                        {this.props.children}
                    </Text>
                </View>
            )
        }else{
            return <ActivityIndicator size='small'/>
        }
    }
}

const styles = StyleSheet.create({
    defaultStyle: {
        fontFamily: 'blipr',
        color: 'black',
        textAlign: 'left',
        fontSize: 16,
        lineHeight: 24,
    },
})