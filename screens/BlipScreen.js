import * as React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import { MaterialIcons, Octicons } from '@expo/vector-icons';



export default class BlipScreen extends React.Component {
    
      constructor(props){
        super(props);
        this.state = {
            mute: false,
            shouldPlay: false,
        };
      }
        
      handlePlayAndPause = () => {  
        this.setState((prevState) => ({
           shouldPlay: !prevState.shouldPlay  
        }));
      }
      
      handleVolume = () => {
        this.setState(prevState => ({
          mute: !prevState.mute,  
        }));
      }

    render () {
        const { width } = Dimensions.get('window');
        return (
            <View>
                <Text>Blips</Text>

                <Text>John Mayer</Text>
                <Text>De Roma</Text>


                <Video
                    source={require('../assets/videos/test.mp4')}
                    shouldPlay={this.state.shouldPlay}
                    resizeMode="cover"
                    style={{ width, height: 300 }}
                    isMuted={this.state.mute}
                />

                <View style={styles.controlBar}>
                    <MaterialIcons 
                    name={this.state.mute ? "volume-mute" : "volume-up"}
                    size={45} 
                    color="red" 
                    onPress={this.handleVolume} 
                    />
                    <MaterialIcons 
                    name={this.state.shouldPlay ? "pause" : "play-arrow"} 
                    size={45} 
                    color="red" 
                    onPress={this.handlePlayAndPause} 
                    />
                </View>

            </View>
            
        )
    }
};

const styles = StyleSheet.create({
    text: {
        fontSize: 60,
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
    controlBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    }
});