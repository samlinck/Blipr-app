import React from 'react';
import { TextInput, StyleSheet, View, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';

export default class TextCustom extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            fontloaded: false,
        }
    }

    async UNSAFE_componentWillMount() {
        await Font.loadAsync({
            'blipr': require('../assets/fonts/SpaceMono-Regular.ttf'),
        })
        this.setState({ fontLoaded: true })
    }

    render() {
        if (this.state.fontLoaded) {
            return (
                <View>
                    <TextInput 
                    style={[styles.defaultStyle, this.props.style]}
                    placeholder={this.props.placeholder}
                    placeholderTextColor={this.props.placeholderTextColor}
                    defaultValue={this.props.defaultValue}
                    value={this.props.value}
                    onChangeText={this.props.onChangeText}
                    autoCapitalize={this.props.autoCapitalize}
                    autoCorrect={false}
                    secureTextEntry={this.props.secureTextEntry}
                    />
                </View>
            )
        }else{
            return <ActivityIndicator size='small'/>
        }
    }
}

const styles = StyleSheet.create({
    defaultStyle: {
        fontSize: 13,
        fontFamily: 'blipr',
        color: 'black',
        height: 80,
        width: 300,
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        paddingVertical: 2,
        paddingHorizontal: 4,
        marginTop: 10,
        textAlign: 'center',
    },
})